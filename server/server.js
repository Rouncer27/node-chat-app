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

    // socket.emit('newEmail', {
    //     from: 'mike@example.com',
    //     text: 'Hey. What is going on?',
    //     createdAt: 1234
    // });

    // socket.emit('newMessage', {
    //     from: 'user8910',
    //     text: 'Hey. What is going on Trevor? You want a coffee?',
    //     createdAt: 123374
    // });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail: ', newEmail);
        
    // });

    socket.on('createMessage', (newMessage) => {
        console.log('createMessage: ', newMessage);

        io.emit('newMessage', {
            from: newMessage.from,
            text: newMessage.text,
            createdAt: new Date().getTime()
        });
    });


    socket.on('disconnect', () => {
        console.log( 'user is disconnected from server' );
    });


});

server.listen( port, () => {
    console.log(`started on port ${port}`);
});