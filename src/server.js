import express from 'express';
import socketIO from 'socket.io';
import path from 'path';

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home', message: 'Hello World' });
});

app.listen(port, () => console.log(`✅ App listening at http://localhost:${port}`));
