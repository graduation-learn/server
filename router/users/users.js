const express = require('express');
const router = express.Router();
const usersService = require('../../service/usersService/usersService');
const { verification } = require('../verification');

router.get('/queryUsersInfo', verification, async (req, res) => {
    const { username, page, limit } = req.query;
    res.send(await usersService.queryUsersInfo(username, page, limit));
});

module.exports = router;