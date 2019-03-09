var socket = io.connect('http://localhost:3300');

socket.on('message', function(data) {
  console.log(data.msg);
  document.getElementById('global').innerHTML = data.msg;

});

function msgHandler(data) {
  console.log(data);
  socket.emit('message', data);
}
