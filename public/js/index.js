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


socket.on('newLocationMessage', function(message) {
    var li = jQuery('<li></li>');
    var loactionLink = jQuery('<a target="_blank">User Location Map</a>');
    li.text(`${message.from}: `);
    loactionLink.attr("href", message.url);
    
    li.append(loactionLink);
    jQuery('#messages').append(li);
});



jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function() {
    });

});

var locationButton = jQuery('#send-location');

locationButton.on('click', function() {
    if(!navigator.geolocation) {
        return alert('Your browser does not support geolocation');
    }

    navigator.geolocation.getCurrentPosition(function(position) {
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function() {
        alert('Unable to fetch location.')
    })

});

