var socket = io();


socket.on('connect', function() {
    console.log( 'browser is connect to server' );
});

socket.on('disconnect', function() {
    console.log( 'browser is disconnected from server' );
});

socket.on('newMessage', function(newMessage) {
    var formattedTime = moment(newMessage.createdAt).format('h:mm a');
    var li = jQuery('<li></li>');
    li.text(`${newMessage.from} at ${formattedTime}: ${newMessage.text}`);

    jQuery('#messages').append(li);
});


socket.on('newLocationMessage', function(message) {
    var formattedTime = moment(message.createdAt).format('h:mm a');
    var li = jQuery('<li></li>');
    var loactionLink = jQuery('<a target="_blank">User Location Map</a>');
    li.text(`${message.from} at ${formattedTime}: `);
    loactionLink.attr("href", message.url);
    li.append(loactionLink);
    jQuery('#messages').append(li);
});



jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();
    var messageTextbox = jQuery('[name=message]');
    socket.emit('createMessage', {
        from: 'User',
        text: messageTextbox.val()
    }, function() {
        messageTextbox.val('');
    });

});

var locationButton = jQuery('#send-location');

locationButton.on('click', function() {
    if(!navigator.geolocation) {
        return alert('Your browser does not support geolocation');
    }

    locationButton.attr('disabled', 'disabled').text('sending...');

    navigator.geolocation.getCurrentPosition( function( position ) {
        locationButton.removeAttr('disabled').text('Send Location');
        
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function() {
        locationButton.removeAttr('disabled').text('Send Location');;
        alert('Unable to fetch location.');
    })

});

