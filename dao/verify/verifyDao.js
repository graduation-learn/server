const connection = require('../util');


exports.queryUserInfoById = async (id) => {
    return new Promise(resolve => {
        const connect = connection();
        connect.connect();
        const sql = "select * from users where `id` = ?";
        const params = [+id];
        connect.query(sql, params, (err, data) => {
            err ? resolve(err) : resolve(data);
        });
        connect.end();
    })
}

exports.queryUserInfoByIdByAdmin = async (id) => {
    return new Promise(resolve => {
        const connect = connection();
        connect.connect();
        const sql = "select * from admin_table where `id` = ?";
        const params = [+id];
        connect.query(sql, params, (err, data) => {
            err ? resolve(err) : resolve(data);
        });
        connect.end();
    })
}