const mysql = require('mysql');

module.exports = function () {
    return  mysql.createConnection({
        host: 'localhost',
        port:3306,
        user: 'root',
        password: 'oyp.123',
        database: 'postgraduate'
    });
}