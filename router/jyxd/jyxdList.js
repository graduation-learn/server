const express = require('express');
const router = express.Router();
const url = require('url');
const jyxdList = require('../../service/jyxd/jyxdList');

router.get('/jyxdList', async (req, res) => {
    const { page, limit } = url.parse(req.url, true).query;
    const result = await jyxdList.queryJyxdListByPage(page, limit);
    res.send(result);
});



module.exports = router;