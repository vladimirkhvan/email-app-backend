import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'us-cdbr-east.cleardb.com',
    user: 'bed2364a646a7b',
    password: '79dc9c30',
    database: 'heroku_1be9fd2aa4b8c4d',
});
