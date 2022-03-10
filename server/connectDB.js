import mysql from 'mysql2';

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'learn_Node',
    connectionLimit: 10
}).promise();

export default connection;