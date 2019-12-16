const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, removeUser, getUser, getUserInRoom } = require('./user');

const PORT = process.env.PORT || 5000

var router = require('./router');

const app = express();

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    socket.on('join', ({name, room}, callback) => {
        console.log("TCL: room", room)
        console.log("TCL: name", name)

        const { error, user } = addUser({ id: socket.id, name, room });
        console.log("TCL: user", user)

        if(error) return callback(error);
        socket.join(user.room);

        socket.emit('message', {
            user: 'admin',
            text: `${user.name}, welcome to the room ${user.room}`
        });
        socket.broadcast.to(user.room).emit('message', {
            user: 'admin',
            text: `${user.name}, has joined!`
        });

        io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room)});

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        console.log("TCL: user", user)
        io.to(user.room).emit('message', { user: user.name, text: message });
        io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room) });

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left ~>`})
        }
    });
})

app.use(router);

server.listen(PORT, () => {
    console.log(`Server listens on PORT ${PORT}`)
});
