const articlesDao = require('../../dao/articlesDao/articlesDao');

exports.addArticle = async (articleObj) => {
    articleObj.status = -1;
    articleObj.is_delete = 0;
    articleObj.views = 0;
    await articlesDao.addArticle(articleObj);
}

exports.deleteArticleById = async (id) => {
    await articlesDao.deleteArticleById(id);
}

exports.updateArticleById = async (articleObj) => {
    await articlesDao.updateArticleById(articleObj);

}

exports.queryArticleByUserIdAndType = async (id, type, status) => {
    let result = await articlesDao.queryArticleByUserIdAndType(id, type, status);
    result.length === 0 ? (result = []) : "";
    for (const prop of result) {
        prop.text = prop.text.slice(0, 10) + '...';
        prop.ctime = new Date(prop.ctime).toLocaleDateString();
        prop.success_time = new Date(prop.success_time).toLocaleDateString();
        delete prop.is_delete;
    }
    return result;
}

exports.queryArticleByPageAndType = async (queryObj) => {
    let result = await articlesDao.queryArticleByPageAndType(queryObj);
    for (const prop of result) {
        prop.ctime = new Date(prop.ctime).toLocaleDateString();
    }
    const count = await articlesDao.queryArticlesCountByType(queryObj.type);
    return { result, count: count.count };
}

exports.queryArticleDetailById = async (id) => {
    let result = await articlesDao.queryArticleDetailById(id);
    result.ctime = new Date(result.ctime).toLocaleDateString();
    delete result.is_delete;
    delete result.success_time;
    delete result.fail_reason;
    delete result.status;
    delete result.text;
    return result;
}

exports.queryTitleListByKeyValueAndPage = async (queryObj) => {
    let result = await articlesDao.queryTitleListByKeyValueAndPage(queryObj);
    for (const prop of result) {
        prop.ctime = new Date(prop.ctime).toLocaleDateString();
    }
    const count = await articlesDao.queryTitleListCountByKeyValue(queryObj.wd);
    return { result, count: count.count };
}