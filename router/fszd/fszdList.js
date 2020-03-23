const express = require('express');
const router = express.Router();
const url = require('url');
const fszdList = require('../../service/fszd/fszdList');

router.get('/fszdList', async (req, res) => {
    const { page, limit } = url.parse(req.url, true).query;
    const result = await fszdList.queryFszdListByPage(page, limit);
    res.send(result);
});



module.exports = router;