const express = require('express');
const router = express.Router();
const registerService = require('../../service/login-register/register');


router.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const result = await registerService.registerUser(username, password);
    res.send(result);
});



module.exports = router;