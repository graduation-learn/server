const express = require('express');
const router = express.Router();
const articlesService = require('../../service/articlesService/articlesService');
// const url = require('url');
const { verification } = require('../verification');

router.post('/addArticle', verification, async (req, res) => {
    await articlesService.addArticle(req.body);
    res.send({
        message: "success"
    });
});

router.post('/deleteArticleById', verification, async (req, res) => {
    const { id } = req.body;
    await articlesService.deleteArticleById(id);
    res.send({
        message: "success"
    });
});

router.post('/updateArticleById', verification, async (req, res) => {
    await articlesService.updateArticleById(req.body);
    res.send({
        message: "success"
    });
})

router.get('/queryArticleByUserIdAndType', verification, async (req, res) => {
    const { userId, type, status, page, limit } = req.query; // 用户的id和文章的类型
    console.log(userId, type, status, page, limit);
    res.send(await articlesService.queryArticleByUserIdAndType(userId, type, status, page, limit));
});


router.get('/queryArticleByPageAndType', async (req, res) => {
    const queryObj = req.query;
    res.send(await articlesService.queryArticleByPageAndType(queryObj));
});

router.get('/queryArticleDetailById', verification, async (req, res) => {
    const { id } = req.query;
    res.send(await articlesService.queryArticleDetailById(id));
});

router.get('/queryTitleListByKeyValueAndPage', async (req, res) => {
    const queryObj = req.query;
    res.send(await articlesService.queryTitleListByKeyValueAndPage(queryObj));
});

router.get('/queryArticleByPageAndExamine', verification, async (req, res) => {
    const { examineType, page, limit, type, from, } = req.query;
    res.send(await articlesService.queryArticleByPageAndExamine(type, from, examineType, page, limit));
});


router.post('/updateArticleStatusById', verification, async (req, res) => {
    await articlesService.updateArticleStatusById(req.body.status, req.body.id, req.body.fail_reason, req.body.success_time);
    res.send({
        message: "success"
    });
})

module.exports = router;