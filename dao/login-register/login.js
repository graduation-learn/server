const connection = require('../util');

exports.queryLoginInfo = function (username) {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const params = [username]
        const sql = "select * from users where username=?";
        connect.query(sql, params, (err, data) => {
            err ? reject(err) : resolve(data);
        });
        connect.end();
    });
}

exports.queryLoginInfoByAdmin = function (username) {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const params = [username]
        const sql = "select * from admin_table where username=?";
        connect.query(sql, params, (err, data) => {
            err ? reject(err) : resolve(data);
        });
        connect.end();
    });
}