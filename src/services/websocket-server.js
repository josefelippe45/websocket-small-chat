//creating the server
const WebSocketServer = require('ws').Server;
const port = process.env.PORT || 3000;
const WSS = new WebSocketServer({ port: port });
//listen for conections. every time a client does the connection, for example: does a request
// the callback is evoked.
//ws is the callback of the data sent by the client file. here it is handled
WSS.on('connection', (ws) => {
    //ws is our client. listening for a message. NOTE- the first parameter 'message' is build-in
    ws.on('message', (message) => {
        if (message == 'close') {
            ws.close();
        } else {
            //access an array of all clients to make it possible to broadcast.
            //pull each individual client
            WSS.clients.forEach((client) => {
                //send the data back to all users connected 'broadcasting'.
                client.send(message);
            });
        }
        //handle the message
        console.log(message);
    })
    console.log('You are connected');
});