const express = require('express');
const router = express.Router();
const url = require('url');
const mathDetail = require('../../service/math/mathDetail');

router.get('/mathDetail', async (req, res) => {
    const { titleId} = url.parse(req.url, true).query;
    const result = await mathDetail.querymathDetail(titleId);
    res.send(result);
});



module.exports = router;

