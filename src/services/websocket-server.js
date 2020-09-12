//creating the server
const WebSocketServer = require('ws').Server;
const port = process.env.PORT || 3000;
const WSS = new WebSocketServer({port: port});
//listen for conections. every time a client does the connection, for example: does a request
// the callback is evoked.
WSS.on('connection', (ws)=>{
    console.log('You are connected');
})
console.log('works');