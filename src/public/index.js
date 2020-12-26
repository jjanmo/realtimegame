const socket = io('/');

function setMessage(message) {
    socket.emit('newMessage', { message });
    console.log(`Me : ${message}`);
}

function setNickname(nickname) {
    socket.emit('setNickname', { nickname });
}

socket.on('broadcastMessage', ({ message, nickname }) => console.log(`${nickname} : ${message}`));
