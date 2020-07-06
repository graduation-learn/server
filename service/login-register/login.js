const loginInfo = require('../../dao/login-register/login');
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const SECRETKEY = "jason-oyp";
exports.queryLoginInfo = async (username, rowPassword, isAdmin) => {
    const result = isAdmin ? await loginInfo.queryLoginInfoByAdmin(username) : await loginInfo.queryLoginInfo(username);
    console.log(result);
    if (result.length) {
        const secretPassword = result[0].password;
        const id = result[0].id;
        const isPasswordVilid = bcryptjs.compareSync(rowPassword, secretPassword);
        if (isPasswordVilid) {
            const token = jsonwebtoken.sign({
                id: String(id)
            }, SECRETKEY);
            return {
                status: 200,
                message: '登录成功',
                token,
                data: result[0]
            }
        } else {
            return {
                status: 422,
                message: '密码错误',
            }
        }
    } else {
        return {
            status: 422,
            message: '用户名不存在'
        }
    }
}