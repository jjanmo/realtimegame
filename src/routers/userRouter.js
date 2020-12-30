import express from 'express';

const userRouter = express.Router();

userRouter.get('/join', (req, res) => res.render('join', { title: 'Join' }));

export default userRouter;
