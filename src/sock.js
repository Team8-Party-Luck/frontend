
const socket = null;

const connect = () => {
  const ws = new WebSocket("ws://localhost:8080/");
  socket = ws;

  ws.onopen = () => {
    console.log("Info: connection opened");
  };

  ws.onmessage = (event) => {
    console.log('ReceiveMessage:', event.data + "\n");
    let $socketAlert = $('div#socketAlert');
    $socketAlert.html(event.data);
    $socketAlert.css('display', 'block')
    setTimeout(() => {
      socketAlert.css('display', 'none');
    }, 3000)
  };

  ws.onclose = (event) => {
    console.log("Info: connection closed");
    // setTimeout(() => {
    //   connect();
    // }, 1000);
  };

  ws.onerror = (err) => {
    console.log("Error", err);
  };
};







Html
socket.send(msg)

$(document).ready(() => {
  connect
})

if(socket) {
  socket.send(jsonData.replyer, + jsonData.gBoardWriter, gBno)
}