const express = require('express');
const router = express.Router();
const url = require('url');
const professionList = require('../../service/profession/professionList');

router.get('/professionList', async (req, res) => {
    const { page, limit } = url.parse(req.url, true).query;
    const result = await professionList.queryprofessionListByPage(page, limit);
    res.send(result);
});


module.exports = router;