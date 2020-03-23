const politicsDetail = require('../../dao/politics/politicsDetail');

exports.queryPoliticsDetail = async (titleId) => {
    const result = await politicsDetail.queryPoliticsDetail(titleId);
    return result;
}