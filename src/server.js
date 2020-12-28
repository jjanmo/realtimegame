import express from 'express';
import socketIO from 'socket.io';
import logger from 'morgan';
import path from 'path';

const app = express();
const port = 4000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));
app.get('/', (req, res) => {
    res.render('index', { title: 'Home', message: 'Hello World' });
});

const server = app.listen(port, () => console.log(`✅ App listening at http://localhost:${port}`));

const io = socketIO(server);

io.on('connection', (socket) => {
    socket.on('newMessage', ({ message }) => {
        socket.broadcast.emit('broadcastMessage', {
            message,
            nickname: socket.nickname || 'Anonymous',
        });
    });

    socket.on('setNickname', ({ nickname }) => {
        socket.nickname = nickname;
    });
});
