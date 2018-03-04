const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const port = process.env.PORT || 3010;

const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '/../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use('/', express.static(publicPath))

io.on('connection', (socket) => {
    console.log('new user connected!');
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app.'));
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user has joined.'));

    socket.on('createMessage', ( newMessage, callback ) => {
        console.log('createMessage: ', newMessage);
        io.emit('newMessage', generateMessage(newMessage.from, newMessage.text ));
        callback();
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage( 'Admin', coords.latitude, coords.longitude ) )
    });

    socket.on('disconnect', () => {
        console.log( 'user is disconnected from server' );
    });

});

server.listen( port, () => {
    console.log(`started on port ${port}`);
});