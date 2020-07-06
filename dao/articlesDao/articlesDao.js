const connection = require('../util');

exports.addArticle = ({ ctime, title, from, content, user_id, views, status, type, is_delete, text }) => {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = 'insert into articles (`ctime`,`title`,`from`,`content`,`user_id`,`views`,`status`,`type`,`is_delete`,`text`) values(?,?,?,?,?,?,?,?,?,?)';
        const params = [ctime, title, from, content, user_id, views, status, type, is_delete, text];
        connect.query(sql, params, (err, data) => {
            err ? reject(err) : resolve(data);
        });
        connect.end();
    });
}

exports.deleteArticleById = (id) => {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = 'update articles set `is_delete` = 1 where `id` = ?';
        const params = [id];
        connect.query(sql, params, (err, data) => {
            err ? reject(err) : resolve(data);
        });
        connect.end();
    });
}


exports.updateArticleById = ({ ctime, title, content, text, id }) => {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = "update articles set `ctime` = ? , `title` = ? , `content` = ? , `text` = ? , `status` = -1 where id = ?"
        const params = [ctime, title, content, text, id];
        connect.query(sql, params, (err, data) => {
            err ? reject(err) : resolve(data);
        })
    });
}



exports.queryArticleByUserIdAndType = (id, type, status, page=1, limit=10) => {

    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = 'select * from articles where `user_id` = ? and `type` = ? and `status` = ? and `is_delete` = ? limit ?,? ';
        const params = [+id, type, parseInt(status), 0, (page - 1) * limit, +limit];
        connect.query(sql, params, (err, data) => {
            err ? reject(err) : resolve(data);
        });
        connect.end();
    });
}

exports.queryArticleByUserIdAndAlltype = (id, status, page, limit) => {

    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = 'select * from articles where `user_id` = ? and `status` = ? and `is_delete` = ? limit ?,?';
        const params = [id, status, 0, (page - 1) * limit, +limit];
        connect.query(sql, params, (err, data) => {
            err ? reject(err) : resolve(data);
        });
        connect.end();
    });
}



exports.queryArticleByPageAndType = ({ page, limit, type }) => {

    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = 'select id,ctime,title from articles where `type` = ? and `status` = 1 and `is_delete` = 0 limit ?,?';
        const params = [type, (page - 1) * limit, +limit];
        connect.query(sql, params, (err, data) => {
            err ? reject(err) : resolve(data);
        });
        connect.end();
    });
}



exports.queryArticlesCountByType = function (type) {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = "select count(id) as count from articles where `type` = ? and `status` = 1 and `is_delete` = 0";
        const params = [type];
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

exports.queryArticlesCountByAlltypeByAdmin = function () {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = "select count(id) as count from articles where `user_id`= -1 and `status` = 1 and `is_delete` = 0";
        const params = [];
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

exports.queryArticlesCountByTypeByAdmin = function (type) {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = "select count(id) as count from articles where `user_id`= -1  and `type`= ? and `status` = 1 and `is_delete` = 0";
        const params = [type];
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

exports.queryArticleDetailById = function (id) {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = "select * from articles where `id` = ? and  `is_delete` = 0 and `status` = 1";
        const params = [+id];
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

exports.queryTitleListByKeyValueAndPage = ({ wd, page, limit }) => {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = "select * from articles where  (`title` like ?  or `text` like ?) and is_delete = 0 and `status` = 1 limit ?,?";
        const params = ["%" + wd + "%", "%" + wd + "%", (page - 1) * limit, +limit];
        connect.query(sql, params, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results);
            }
        })
        connect.end(); //关闭连接
    })
}

exports.queryTitleListCountByKeyValue = function (keyValue) {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = "select count(id) as count from articles where (`title` like ?  or `text` like ?) and `status` = 1 and `is_delete` = 0";
        const params = ["%" + keyValue + "%", "%" + keyValue + "%"];
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

exports.queryArticleByPageAndExamine = function (type, from, examineType, page, limit) {
    console.log(type, from, examineType, page, limit);
    return new Promise((resolve) => {
        const connect = connection();
        connect.connect();

        const sql = "select * from articles where `user_id` != -1 and `type` like ? and `from` like ? and  `status` = ?  and `is_delete` = 0 limit ?,?";
        const params = ["%" + (type ? type : ''), "%" + (from ? from : ''), parseInt(examineType), (page - 1) * limit, +limit];

        connect.query(sql, params, (err, results) => {
            if (err) {
                resolve(err)
            } else {
                resolve(results);

            }
        })
        connect.end(); //关闭连接
    })
}

exports.queryTitleListCountByPageAndExamine = function (type, from, examineType) {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = "select count(id) as count from articles where `user_id` != -1 and `type` like ? and `from` like ? and `status` = ? and `is_delete` = 0";
        const params = ["%" + (type ? type : ''), "%" + (from ? from : ''), parseInt(examineType)];
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

exports.updateArticleStatusById = function (status, id, fail_reason, success_time) {
    return new Promise((resolve, reject) => {
        const connect = connection();
        connect.connect();
        const sql = "update articles set `status` = ? ,`fail_reason` = ?,`success_time` = ? where id = ?"
        const params = [parseInt(status), fail_reason, success_time,+id];
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