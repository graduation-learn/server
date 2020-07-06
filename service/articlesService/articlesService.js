const articlesDao = require('../../dao/articlesDao/articlesDao');

exports.addArticle = async (articleObj) => {
    articleObj.status = articleObj.isAdmin ? 1 : -1;
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

exports.queryArticleByUserIdAndType = async (id, type, status, page, limit) => {
    let result;
    let count;
    // console.log(id, type, status, page, limit);
    if (type === "all") {
        result = await articlesDao.queryArticleByUserIdAndAlltype(id, status, page, limit);
        count = await articlesDao.queryArticlesCountByAlltypeByAdmin();
    } else {
        result = await articlesDao.queryArticleByUserIdAndType(id, type, status, page, limit);
        count = await articlesDao.queryArticlesCountByTypeByAdmin(type);

    }
    result.length === 0 ? (result = []) : "";
    for (const prop of result) {
        prop.text = prop.text.slice(0, 10) + '...';
        prop.ctime = new Date(prop.ctime).toLocaleDateString();
        prop.success_time = new Date(prop.success_time).toLocaleDateString();
        delete prop.is_delete;
    }

    return { result, count: count.count };
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
    console.log(result);
    if (!result) {
        return [];
    }
    result.ctime = new Date(result.ctime).toLocaleDateString();
    result.text = result.text.slice(0, 10) + '...';
    delete result.is_delete;
    delete result.success_time;
    delete result.fail_reason;
    delete result.status;
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

exports.queryArticleByPageAndExamine = async (type, from, examineType, page, limit) => {
    let result = await articlesDao.queryArticleByPageAndExamine(type, from, examineType, page, limit);

    const count = await articlesDao.queryTitleListCountByPageAndExamine(type, from, examineType);
    result.length === 0 ? (result = []) : "";
    for (const prop of result) {
        prop.text = prop.text.slice(0, 10) + '...';
        prop.ctime = new Date(prop.ctime).toLocaleDateString();
        prop.success_time = new Date(prop.success_time).toLocaleDateString();
        delete prop.is_delete;
    }
    return { result, count: count.count };
}


exports.updateArticleStatusById = async (status, id, fail_reason, success_time) => {
    await articlesDao.updateArticleStatusById(status, id, fail_reason, success_time);
}