const jsonwebtoken = require('jsonwebtoken');
const SECRETKEY = "jason-oyp";
const verifyDao = require('../dao/verify/verifyDao');

exports.verification = async (req, res, next) => {
    const { id } = jsonwebtoken.verify(req.headers.authorization, SECRETKEY);
    const result = req.query.isAdmin || req.body.isAdmin ? await verifyDao.queryUserInfoByIdByAdmin(id) : await verifyDao.queryUserInfoById(id);
    // console.log(result);
    if (!result.length) {
        res.send({
            message: '验证权限不通过，请登录后再进行此操作',
            status: 400
        });
        return;
    }
    next();
}