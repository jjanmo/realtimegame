import express from 'express';
import socketIO from 'socket.io';
import logger from 'morgan';
import path from 'path';
import socketController from './controllers/socketController';
import dotenv from 'dotenv';
import events from './events';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// TODO REFACTORING : add router
// app.use('/', homeRouter);
// app.use('/user', userRouter);
app.get('/', (req, res) => res.render('home', { events: JSON.stringify(events) }));

const server = app.listen(PORT, () => console.log(`✅ App listening at http://localhost:${PORT}`));

const io = socketIO(server);

io.on('connection', (socket) => socketController(socket));
