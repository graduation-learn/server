const connection = require('../util');

exports.queryCommentByArtilceId = article_id => {
    return new Promise(resolve => {
        const connect = connection();
        connect.connect();
        const sql = "select * from comments where `article_id` = ?";
        const params = [article_id];
        connect.query(sql, params, (err, data) => {
            err ? resolve(err) : resolve(data);
        });
    })
}

exports.addComment = ({ article_id, user_id, username, content, ctime, likeNum }) => {
    return new Promise(resolve => {
        const connect = connection();
        connect.connect();
        const sql = "insert into comments (`article_id`, `user_id`, `username`, `content`, `ctime`, `like_num`) values (?,?,?,?,?,?)";
        const params = [+article_id, +user_id, username, content, ctime, +likeNum];
        connect.query(sql, params, (err, data) => {
            err ? resolve(err) : resolve(data);
        });
    })
}
