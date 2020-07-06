const express = require('express');
const router = express.Router();
const registerService = require('../../service/login-register/register');


router.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const isAdmin = req.body.isAdmin;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const result = await registerService.registerUser(username, password, isAdmin, phone, gender);
    res.send(result);
});



module.exports = router;