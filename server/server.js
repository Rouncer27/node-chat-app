const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const port = process.env.PORT || 3010;

const publicPath = path.join(__dirname, '/../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use('/', express.static(publicPath))

io.on('connection', (socket) => {
    console.log('new user connected!');

    socket.on('disconnect', () => {
        console.log( 'user is disconnected from server' );
    });

});

server.listen( port, () => {
    console.log(`started on port ${port}`);
});