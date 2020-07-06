const connection = require('../util');

exports.addLikeByUserId = ({ title, text, like_time, article_id, user_id, type }) => {
    return new Promise(resolve => {
        const connect = connection();
        connect.connect();
        const sql = "insert into likes (`title`, `text`, `like_time`, `article_id`, `user_id`,`type`) values (?,?,?,?,?,?)";
        const params = [title, text, like_time, +article_id, +user_id,type];
        connect.query(sql, params, (err, data) => {
            err ? resolve(err) : resolve(data);
        });
        connect.end();
    })
}

exports.deleteLikeByArticleIdAndUserId = ({ article_id, user_id }) => {
    return new Promise(resolve => {
        const connect = connection();
        connect.connect();
        const sql = "delete  from likes where `article_id` = ? and `user_id` = ?";
        const params = [+article_id, +user_id];
        connect.query(sql, params, (err, data) => {
            err ? resolve(err) : resolve(data);
        });
        connect.end();
    });
}

exports.queryLikesByArticleIdAndUserId = ({ article_id, user_id }) => {
    return new Promise(resolve => {
        const connect = connection();
        connect.connect();
        const sql = "select * from likes where `article_id` = ? and `user_id` = ?";
        const params = [+article_id, +user_id];
        connect.query(sql, params, (err, data) => {
            err ? resolve(err) : resolve(data);
        });
        connect.end();
    });
}

exports.queryLikesByArticleTypeAndUserId = ({ type, user_id }) => {
    return new Promise(resolve => {
        const connect = connection();
        connect.connect();
        const sql = "select * from likes where `type` = ? and `user_id` = ?";
        const params = [type, +user_id];
        connect.query(sql, params, (err, data) => {
            err ? resolve(err) : resolve(data);
        });
        connect.end();
    });
}