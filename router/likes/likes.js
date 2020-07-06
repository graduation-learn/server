const express = require('express');
const router = express.Router();
const likesService = require('../../service/likesService/likesService');
// const url = require('url');
const { verification } = require('../verification');

router.post('/addLikeByUserId', verification, async (req, res) => {
    await likesService.addLikeByUserId(req.body);
    res.send({
        message: "success"
    });
});

router.post('/deleteLikeByArticleIdAndUserId', verification, async (req, res) => {
    await likesService.deleteLikeByArticleIdAndUserId(req.body);
    res.send({
        message: "success"
    });
});

router.get('/queryLikesByArticleIdAndUserId', verification, async (req, res) => {
    const result = await likesService.queryLikesByArticleIdAndUserId(req.query);
    res.send({
        message: "success",
        data: result
    });
});

router.get('/queryLikesByArticleTypeAndUserId', verification, async (req, res) => {
    const result = await likesService.queryLikesByArticleTypeAndUserId(req.query);
    res.send({
        message: "success",
        data: result
    });
});

module.exports = router;