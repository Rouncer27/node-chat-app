var socket = io();


socket.on('connect', function() {
    console.log( 'browser is connect to server' );

    socket.emit('createEmail', {
        to: 'jen@example.com',
        text: 'Hey, this is Trevor'
    });

    socket.emit('createMessage', {
        from: 'user1234',
        text: 'Hey, this is Trevor RRRRR'
    });
});

socket.on('disconnect', function() {
    console.log( 'browser is disconnected from server' );
});


socket.on('newEmail', function(email) {
    console.log('new Email: ', email);
});

socket.on('newMessage', function(newMessage) {
    console.log('newMessage: ', newMessage);
});
