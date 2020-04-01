const express = require('express');
const router = express.Router();
const articlesService = require('../../service/articlesService/articlesService');
// const url = require('url');

router.post('/addArticle', async (req, res) => {
    await articlesService.addArticle(req.body);
    res.send({
        message: "success"
    });
});

router.post('/deleteArticleById', async (req, res) => {
    const { id } = req.body;
    await articlesService.deleteArticleById(id);
    res.send({
        message: "success"
    });
});

router.post('/updateArticleById', async (req, res) => {
    await articlesService.updateArticleById(req.body);
    res.send({
        message: "success"
    });
})

router.get('/queryArticleByUserIdAndType', async (req, res) => {
    const { userId, type, status } = req.query; // 用户的id和文章的类型
    res.send(await articlesService.queryArticleByUserIdAndType(userId, type, status));
});


router.get('/queryArticleByPageAndType', async (req, res) => {
    const queryObj = req.query;
    res.send(await articlesService.queryArticleByPageAndType(queryObj));
});

router.get('/queryArticleDetailById', async (req, res) => {
    const { id } = req.query;
    res.send(await articlesService.queryArticleDetailById(id));
});




module.exports = router;