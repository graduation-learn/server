const commentsDao = require('../../dao/commentsDao/commentsDao');
const replysDao = require('../../dao/commentsDao/replysDao');

exports.queryCommentsByArticleId = async articleId => {
    const result = {
        code: 0,
        message: 'success',
        data: []
    }
    const commentResults = await commentsDao.queryCommentByArtilceId(articleId);
    for (const item of commentResults) {
        result.data.push(item);
        const replyResults = await replysDao.queryReplyBycommentId(item.id);
        item.reply = replyResults;
    }
    return result;
}

exports.addComment = async (commentObj) => {
    return await commentsDao.addComment(commentObj);
}

exports.addReply = async (replyObj) => {
    return await replysDao.addReply(replyObj);
}