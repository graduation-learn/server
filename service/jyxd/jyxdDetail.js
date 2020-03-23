const jyxdDetail = require('../../dao/jyxd/jyxdDetail');

exports.queryJyxdDetail = async (titleId) => {
    const result = await jyxdDetail.queryJyxdDetail(titleId);
    return result;
}