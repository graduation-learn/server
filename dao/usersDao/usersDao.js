const connection = require('../util');

exports.queryUsersInfo = function (username, page, limit) {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const params = ["%" + (username ? username : '')+"%", (page - 1) * limit, +limit]
        const sql = "select * from users where username like ? limit ?,?  ";
        connect.query(sql, params, (err, data) => {
            err ? reject(err) : resolve(data);
        });
        connect.end();
    });
}

exports.queryCountUsers = function (username) {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = "select count(id) as count from users where `username` like ? ";
        const params = ["%" + (username ? username : '')];
        connect.query(sql, params, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results[0]);
            }
        })
        connect.end(); //关闭连接
    })
}