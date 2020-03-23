const connection = require('../util');

exports.queryFszdDetail = function (titleId) {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const params = [titleId]
        const sql = "select * from fszddetail where titleId=?";
        connect.query(sql, params, (err, data) => {
            err ? reject(err) : resolve(data);
        });
        connect.end();
    });
}