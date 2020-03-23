const express = require('express');
const router = express.Router();
const url = require('url');
const englishList = require('../../service/english/englishList');

router.get('/englishList', async (req, res) => {
    const { page, limit } = url.parse(req.url, true).query;
    const result = await englishList.queryEnglishListByPage(page, limit);
    res.send(result);
});


module.exports = router;