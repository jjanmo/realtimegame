import User from '../model/User';
import events from '../events';

export const home = (req, res) => res.render('home', { title: 'Home', events: JSON.stringify(events) });

export const join = (req, res) => res.render('join', { title: 'Join' });

export const postLogin = async (req, res) => {
    try {
        const { nickname, password } = req.body;
        const result = await User.findByName(nickname);
        if (result[0].length > 0) {
            const { nickname: _nickname, password: _password } = result[0][0];

            if (password === _password) {
                // const socket = io('/');
                // socket.emit('setNickname', { nickname });

                res.send('<h1>You are logged in 👍</h1>');
            }
        } else {
            res.render('home', { title: 'Home', message: 'Check your nickname or password 😱' });
        }
    } catch (e) {
        console.log(e);
    }
};
