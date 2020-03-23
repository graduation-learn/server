const express = require('express');
const app = express();
const bodyParser = require('body-parser');//获取post请求参数插件
const router = express.Router();
const url = require('url');
const loginInfo = require('../../service/login-register/login');

let json = bodyParser.json();//数据JSON类型
let urlencoded =  bodyParser.urlencoded({ extended: false });//解析post请求数据

router.post('/login',json,async (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;
    const result = await loginInfo.queryLoginInfo(username,password);
    res.send(result);
});



module.exports = router;

