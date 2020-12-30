import mysql from 'mysql';

// const databaseInfo
//https://junspapa-itdev.tistory.com/9

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'jjanmo',
    password: 'jjanmo',
    database: 'users',
});

connection.connect();

connection.query('select * from users', (error, rows, fields) => {
    if (error) console.log(error);
    console.log(('user info : ', rows));
});

connection.end();
