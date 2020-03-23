const express = require('express');
const router = express.Router();
const url = require('url');
const politicsDetail = require('../../service/politics/politicsDetail');

router.get('/politicsDetail', async (req, res) => {
    const { titleId} = url.parse(req.url, true).query;
    const result = await politicsDetail.queryPoliticsDetail(titleId);
    res.send(result);
});



module.exports = router;

