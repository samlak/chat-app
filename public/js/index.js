var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('New message received', message);
    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    $('#messages').append(li);
});

socket.on('newLocationMessage', function(message) {
    var li = $('<li></li>');
    var a = $('<a target="_blank">My current location</a>');

    li.text(`${message.from}: `);
    a.attr('href', message.url);
    $('#messages').append(li);
    li.append(a);
    $('#messages').append(li);
});

// socket.emit('createMessage', {
//     from: "samlak",
//     text: "stay there i am coming"
// }, function (data) {
//     console.log('Hi, I am here', data);
// });

$('#message-form').on('submit', function (e) {
    e.preventDefault();
    socket.emit('createMessage', {
        from: "User",
        text: $('[name="message"]').val()
    }, function () {
        
    });
})

var locationButton = $('#send-location');
locationButton.on('click', function () {
    if(!navigator.geolocation) {
        return alert('Geolocation not supported by the browser');
    }
    navigator.geolocation.getCurrentPosition(function (position) {
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });
    }, function () {
        alert('Unable to fetch location');
    });
});