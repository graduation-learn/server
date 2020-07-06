const usersDao = require('../../dao/usersDao/usersDao');

exports.queryUsersInfo = async (username, page, limit) => {
    const result = await usersDao.queryUsersInfo(username, page, limit);
    for (const prop of result) {
        prop.gender = prop.gender === 0 ? '男' : '女';
    }
    const count = await usersDao.queryCountUsers(username);
    return { result, count: count.count };
}