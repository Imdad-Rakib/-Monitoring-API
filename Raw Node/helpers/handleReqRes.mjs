import url from 'url'
import { StringDecoder } from 'string_decoder'
import routes from '../routes.mjs'
import notFoundHandler from '../handlers/routeHandlers/notFoundHandler.mjs'
import {parseJSON} from '../helpers/utilities.mjs'

const handler = {}
handler.handleReqRes = (req, res) => {
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.path
    const trimmedPath = path.replace(/\/|(\?.*)/g, '')
    const method = req.method.toLowerCase()
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();

        requestProperties.body = parseJSON(realData)
        chosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {};

            const payloadString = JSON.stringify(payload);

            res.setHeader('Content-type', 'application/json')
            res.writeHead(statusCode);
            res.end(payloadString);
        });

    });
};

export default handler.handleReqRes
