import express from 'express';
import { home, postLogin, join } from '../controllers/homeController';

const homeRouter = express.Router();

homeRouter.get('/', home);

homeRouter.post('/login', postLogin);

homeRouter.get('/join', join);

export default homeRouter;
