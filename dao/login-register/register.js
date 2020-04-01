const connection = require('../util');

exports.registerUser = function (username, password) {
    return new Promise(resolve => {
        const connect = connection();
        connect.connect();
        const params = [username, password]
        const sql = "insert into users (`username`,`password`) values (?,?)";
        connect.query(sql, params, (err, data) => {
            err ? resolve(err) : resolve(data);
        });
        connect.end();
    });
}