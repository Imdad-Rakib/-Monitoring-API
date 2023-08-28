import sampleHandler from './handlers/routeHandlers/sampleHandlers.mjs'
import {tokenHandler} from './handlers/routeHandlers/tokenHandler.mjs';
import userHandler from './handlers/routeHandlers/userHandler.mjs';
import { checkHandler } from './handlers/routeHandlers/checkHandler.mjs';

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
    check: checkHandler
};
export default routes;