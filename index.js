// Dependencies
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var connectedUsers = [];

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        socket.emit('chat message', { from: 'server', timestamp: Date.now(), content: msg.content });
    });

    socket.on('nick message', function(msg) {
        console.log(msg + ' has set its nickname!');
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});