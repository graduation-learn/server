const registerDao = require('../../dao/login-register/register');
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const SECRETKEY = "jason-oyp";

exports.registerUser = async (username, password, isAdmin, phone, gender) => {
    password = bcryptjs.hashSync(password, 10);
    const result = isAdmin ? await registerDao.registerAdmin(username, password) : await registerDao.registerUser(username, password, phone, gender);
    if (!result.insertId) {
        return {
            message: '用户名已存在',
            status: 422
        }
    } else {
        const token = jsonwebtoken.sign({
            id: String(result.insertId)
        }, SECRETKEY);
        return {
            status: 200,
            message: '用户创建成功',
            token,
            data: {
                username,
                password,
                id: result.insertId
            }
        };
    }
}