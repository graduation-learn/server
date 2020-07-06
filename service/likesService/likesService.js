const likesDao = require('../../dao/likesDao/likes');

exports.addLikeByUserId = async (obj) => {
    await likesDao.addLikeByUserId(obj);
}

exports.deleteLikeByArticleIdAndUserId = async obj => {
    await likesDao.deleteLikeByArticleIdAndUserId(obj);
}

exports.queryLikesByArticleIdAndUserId = async obj => {
    return await likesDao.queryLikesByArticleIdAndUserId(obj);
}



exports.queryLikesByArticleTypeAndUserId = async obj => {
    return await likesDao.queryLikesByArticleTypeAndUserId(obj);
}