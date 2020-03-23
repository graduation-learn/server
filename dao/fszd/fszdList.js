const connection = require('../util');


exports.addfszdList = function ({
    title,
    time,
    src
}) {

    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = "insert into fszdlist(`title`,`time`,`src`) values(?,?,?)";
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

exports.queryFszdListByPage = function (page, limit) {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const params = [(page - 1) * limit, +limit]
        const sql = "select * from fszdlist limit ?,?";
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
        const sql = "select count(id) as count from fszdlist";
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