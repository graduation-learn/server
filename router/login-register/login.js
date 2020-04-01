const express = require('express');
const router = express.Router();
const loginInfo = require('../../service/login-register/login');


router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const result = await loginInfo.queryLoginInfo(username, password);
    res.send(result);
});



module.exports = router;

