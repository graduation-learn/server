const express = require('express');
const router = express.Router();
const url = require('url');
const professionDetail = require('../../service/profession/professionDetail');

router.get('/professionDetail', async (req, res) => {
    const { titleId} = url.parse(req.url, true).query;
    const result = await professionDetail.queryprofessionDetail(titleId);
    res.send(result);
});



module.exports = router;

