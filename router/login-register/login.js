const express = require('express');
const router = express.Router();
const loginInfo = require('../../service/login-register/login');
const { verification } = require('../verification');

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const isAdmin = req.body.isAdmin;
    const result = await loginInfo.queryLoginInfo(username, password, isAdmin);
    res.send(result);
});

router.get('/verify', verification, async (req, res) => {
    res.send({
        message: 'ok'
    });
});



module.exports = router;

