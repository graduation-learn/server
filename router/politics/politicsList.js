const express = require('express');
const router = express.Router();
const url = require('url');
const politicsList = require('../../service/politics/politicsList');

router.get('/politicsList', async (req, res) => {
    const { page, limit } = url.parse(req.url, true).query;
    const result = await politicsList.queryPoliticsListByPage(page, limit);
    res.send(result);
});


module.exports = router;