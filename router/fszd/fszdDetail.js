const express = require('express');
const router = express.Router();
const url = require('url');
const fszdDetail = require('../../service/fszd/fszdDetail');

router.get('/fszdDetail', async (req, res) => {
    const { titleId} = url.parse(req.url, true).query;
    const result = await fszdDetail.queryFszdDetail(titleId);
    res.send(result);
});



module.exports = router;

