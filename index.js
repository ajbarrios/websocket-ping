// Dependencies
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

// Routes
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

// sockets events
io.on('connection', (socket) => {
    socket.on('ping message', (msg) => socket.emit('pong message', msg));
});

// Start
http.listen(port, () => console.log('Server listening on: ' + port));