const express = require('express');
const router = express.Router();
const url = require('url');
const jyxdDetail = require('../../service/jyxd/jyxdDetail');

router.get('/jyxdDetail', async (req, res) => {
    const { titleId} = url.parse(req.url, true).query;
    const result = await jyxdDetail.queryJyxdDetail(titleId);
    res.send(result);
});



module.exports = router;

