let users = [];

const addUser = ({ id, name , room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.name === name && user.room === room);
    if (existingUser) {
        return { error: 'Username is taken'};
    }

    const user = { id, name, room };
    users.push(user);
    console.log("TCL: addUser -> users", users)

    return { user };
};

const removeUser = (id) => {
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
};

const getUser = (id) => {
    return users.find(u => Object.is(u.id, id));
};

const getUserInRoom = (room) => {
    return users.filter(u => Object.is(u.room, room));
};


module.exports = { addUser, removeUser, getUser, getUserInRoom };