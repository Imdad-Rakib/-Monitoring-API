import http from 'http'
import handleReqRes from '../helpers/handleReqRes.mjs'
// import environment from "../helpers/environments.mjs";

const server = {}

server.config = {
    port: 3000,
};

server.createServer = () => {
    const createServerVaribale = http.createServer(server.handleReqRes)
    createServerVaribale.listen(server.config.port, () => {
        console.log(`listening to port ${server.config.port}`)
    })
}

server.handleReqRes = handleReqRes

server.init = () => {
    server.createServer();
}

export default server