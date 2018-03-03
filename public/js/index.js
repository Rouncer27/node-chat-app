var socket = io();


socket.on('connect', function() {
    console.log( 'browser is connect to server' );
});

socket.on('disconnect', function() {
    console.log( 'browser is disconnected from server' );
});

socket.on('newMessage', function(newMessage) {
    console.log('newMessage: ', newMessage);
    var li = jQuery('<li></li>');
    li.text(`${newMessage.from}: ${newMessage.text}`);

    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function() {
    });

    //jQuery('[name=message]').val().clear();
});

