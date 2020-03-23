const politicsList = require('../../dao/politics/politicsList');

exports.queryPoliticsListByPage = async (page, limit) => {
    const result = await politicsList.queryPoliticsListByPage(page, limit);
    const count = await politicsList.queryCount();
    return {result,count:count.count};
}

