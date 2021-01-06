import express from 'express';
import socketIO from 'socket.io';
import logger from 'morgan';
import path from 'path';
import homeRouter from './routers/homeRouter';
import userRouter from './routers/userRouter';
import socketController from './controllers/socketController';

const app = express();
const port = 4000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.use('/', homeRouter);
app.use('/user', userRouter);

const server = app.listen(port, () => console.log(`✅ App listening at http://localhost:${port}`));

const io = socketIO(server);

io.on('connection', (socket) => socketController(socket));
