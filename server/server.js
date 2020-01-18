const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
 
io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('disconnect', () => {
        console.log('Disconnected from the client');
    });

    socket.on('createdMessage', (message) => {
        console.log('Created Message', message);

        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
    });

    socket.emit('newMessage', {
        from: 'samdev',
        text: "Hey! bitch",
        createdAt: 2321
    })
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});