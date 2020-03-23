const express = require('express');
const router = express.Router();
const url = require('url');
const mathList = require('../../service/math/mathList');

router.get('/mathList', async (req, res) => {
    const { page, limit } = url.parse(req.url, true).query;
    const result = await mathList.querymathListByPage(page, limit);
    res.send(result);
});


module.exports = router;