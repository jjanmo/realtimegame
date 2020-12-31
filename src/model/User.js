import mysql from 'mysql2';
import dbConfig from '../config/db.config';

// https://medium.com/@moralmk/node-js-mysql-and-promises-6309f3915d37

const connection = mysql.createConnection(dbConfig);
connection.connect();

const User = {
    create: (newUser) => {
        const { nickname, password } = newUser;
        connection.query(`insert into users (nickname, password) values ('${nickname}', '${password}')`, (error, results) => {
            if (error) throw error;
            return results;
        });
    },
    findByName: (name) => {
        connection.query(`select * from users where nickname='${name}'`, (error, results) => {
            if (error) throw error;
            return results;
        });
    },
    findAllUsers: () => {
        connection.query('select * from users', (error, results) => {
            if (error) throw error;
            return results;
        });
    },
};

/*
User.update = () => {};
User.delete = () => {};
*/

export default User;
