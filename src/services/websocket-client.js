//the client makes the request
const WS = new WebSocket('ws://localhost:3000');
//if data is sent it's given to this property
WS.onmessage = (payload) =>{
    displayMessage(payload.data)
};

WS.onopen = ()=>{
    displayTitle('connection is open. type close to disconnect');
};
WS.onclose = ()=>{
    displayTitle('connection closed');
};
//display a title depending on the connection state.
const displayTitle = (title)=>{
    document.querySelector('h1').innerText = title;
}
const displayMessage = (message)=>{
    //creating an h1 tag
    let h1 = document.createElement('h1');
    //assign the text of the h1 to the message
    h1.innerText = message
    document.querySelector('div.messages').appendChild(h1);
}
//handle to get an array of all the forms in the html
document.forms[0].onsubmit = ()=>{
    //message is the id form
    let input = document.getElementById('message');
    //sending data to the server
    WS.send(input.value)
};