const connection = require('../util');

exports.queryReplyBycommentId = comment_id => {
    return new Promise(resolve => {
        const connect = connection();
        connect.connect();
        const sql = "select * from replys where `comment_id` = ?";
        const params = [comment_id];
        connect.query(sql, params, (err, data) => {
            err ? resolve(err) : resolve(data);
        });
    })
}

exports.addReply = ({ comment_id, from_id, from_name, content, ctime, to_id, to_name }) => {
    return new Promise(resolve => {
        const connect = connection();
        connect.connect();
        const sql = "insert into replys (`comment_id`, `from_id`, `from_name`, `content`, `ctime`, `to_id`, `to_name`) values (?,?,?,?,?,?,?)";
        const params = [+comment_id, +from_id, from_name, content, ctime, to_id, to_name];
        connect.query(sql, params, (err, data) => {
            err ? resolve(err) : resolve(data);
        });
    })
}