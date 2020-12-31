import User from '../model/User';

export const home = (req, res) => res.render('home', { title: 'Home' });

export const join = (req, res) => res.render('join', { title: 'Join' });

export const postLogin = (req, res) => {
    const { nickname, password } = req.body;
    const result = User.findByName(nickname);
};
