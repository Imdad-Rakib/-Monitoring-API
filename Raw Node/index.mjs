import server from "./lib/server.mjs";
import workers from "./lib/workers.mjs";


const app = {}
app.init = () =>{
    
    // start the server
    server.init();

    //
    workers.init();
}
app.init();