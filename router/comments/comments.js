const express = require('express');
const router = express.Router();
const commentsService = require('../../service/commentsService/commentsService');
const { verification } = require('../verification');

router.get('/queryCommentByArticleId', verification, async (req, res) => {
    res.send(await commentsService.queryCommentsByArticleId(req.query.articleId));
});

router.post('/addComment', verification, async (req, res) => {
    const commentObj = req.body;
    await commentsService.addComment(commentObj);
    res.send({
        'message': "ok"
    });
});

router.post('/addReply', verification, async (req, res) => {
    const replyObj = req.body;
    await commentsService.addReply(replyObj);
    res.send({
        'message': "ok"
    });
});


module.exports = router;
