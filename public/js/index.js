var socket = io();


socket.on('connect', function() {
    console.log( 'browser is connect to server' );

    // socket.emit('createEmail', {
    //     to: 'jen@example.com',
    //     text: 'Hey, this is Trevor'
    // });

    // socket.emit('createMessage', {
    //     from: 'user1234',
    //     text: 'Hey, this is Trevor RRRRR'
    // });

    socket.emit('createMessage', {
        name: 'User 123'
    })

});

socket.on('disconnect', function() {
    console.log( 'browser is disconnected from server' );
});


socket.on('newMessage', function(newMessage) {
    console.log('newMessage: ', newMessage);
});

socket.on('newUser', function(newUser) {
    console.log('newUser: : ', newUser);
});

socket.on('adminHello', function(adminHello) {
    console.log('adminHello: ', adminHello);
});
