const connection = require('../util');

exports.registerUser = function (username, password, phone, gender) {
    return new Promise(resolve => {
        const connect = connection();
        connect.connect();
        const params = [username, password, phone, +gender]
        const sql = "insert into users (`username`,`password`,`phone`,`gender`) values (?,?,?,?)";
        connect.query(sql, params, (err, data) => {
            err ? resolve(err) : resolve(data);
        });
        connect.end();
    });
}

exports.registerAdmin = function (username, password) {
    return new Promise(resolve => {
        const connect = connection();
        connect.connect();
        const params = [username, password]
        const sql = "insert into admin_table (`username`,`password`) values (?,?)";
        connect.query(sql, params, (err, data) => {
            err ? resolve(err) : resolve(data);
        });
        connect.end();
    });
}