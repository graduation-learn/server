const connection = require('../util');


exports.addmathList = function ({
    title,
    time,
    src
}) {

    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = "insert into mathlist(`title`,`time`,`src`) values(?,?,?)";
        const params = [title, time, src];
        connect.query(sql, params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });

        connect.end();

    });

}

exports.querymathListByPage = function (page, limit) {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const params = [(page - 1) * limit, +limit]
        const sql = "select * from mathlist limit ?,?";
        connect.query(sql, params, (err, data) => {
            err ? reject(err) : resolve(data);
        });
        connect.end();
    });
}


exports.queryCount = function () {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = "select count(id) as count from mathlist";
        connect.query(sql, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results[0]);
            }
        })
        connect.end(); //关闭连接
    })
}