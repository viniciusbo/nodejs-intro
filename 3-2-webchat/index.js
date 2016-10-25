var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Define diretório das views
app.set('views', '/views');

// Define a rota index
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Define callback para ser executado ao receber uma nova conexão
io.on('connection', function(socket) {
  console.log('User connected');

  // Define callback ao receber uma nova mensagem
  socket.on('message', function(data) {
    io.sockets.emit('message', data);
  });
});

// Iniciar servidor web na porta 8080
http.listen(8080, function() {
  console.log('App started');
});