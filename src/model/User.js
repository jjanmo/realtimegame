import mysql from 'mysql2/promise';
import dbConfig from '../config/db.config';

const connection = mysql.createPool(dbConfig);

const User = {
    create: async (newUser) => {
        const { nickname, password } = newUser;
        const result = await connection.query(`insert into users (nickname, password) values ('${nickname}', '${password}')`);
        return result;
    },
    findByName: async (name) => {
        const result = await connection.query(`select * from users where nickname='${name}'`);
        return result;
    },
    findAllUsers: async () => {
        const result = await connection.query('select * from users');
        return result;
    },
};

/*
User.update = () => {};
User.delete = () => {};
*/

export default User;
