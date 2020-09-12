//the client makes the request
const WS = new WebSocket('ws://localhost:3000');
//if data is sent it's given to this property
WS.onmessage = (payload) =>{
    console.log(payload.data);
}
//handle to get an array of all the forms in the html
document.forms[0].onsubmit = ()=>{
    //message is the id form
    let input = document.getElementById('message');
    //sending data to the server
    WS.send(input.value)
};