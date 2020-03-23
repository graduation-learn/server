const connection = require('../util');

exports.queryPoliticsDetail = function (titleId) {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const params = [titleId]
        const sql = "select * from politicsdetail where titleId=?";
        connect.query(sql, params, (err, data) => {
            err ? reject(err) : resolve(data);
        });
        connect.end();
    });
}