const express = require('express');
const router = express.Router();
const url = require('url');
const englishDetail = require('../../service/english/englishDetail');

router.get('/englishDetail', async (req, res) => {
    const { titleId} = url.parse(req.url, true).query;
    const result = await englishDetail.queryEnglishDetail(titleId);
    res.send(result);
});



module.exports = router;

