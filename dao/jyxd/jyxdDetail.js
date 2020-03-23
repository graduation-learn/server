const connection = require('../util');

exports.queryJyxdDetail = function (titleId) {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const params = [titleId]
        const sql = "select * from jyxddetail where titleId=?";
        connect.query(sql, params, (err, data) => {
            err ? reject(err) : resolve(data);
        });
        connect.end();
    });
}