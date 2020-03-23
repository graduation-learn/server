const loginInfo = require('../../dao/login-register/login');

exports.queryLoginInfo = async (username1,password1) => {
    const result = await loginInfo.queryLoginInfo(username1);
    console.log(result)
    if(result.length){
        const username = result[0].username;
        const password = result[0].password;
        if(username1 == username && password1 == password){
            return {
                status:200,
                message:'登录成功',
                username
            }
        }
    }else{
        return {
            status:400,
            message:'账号或密码错误',
        }
    }
    
}