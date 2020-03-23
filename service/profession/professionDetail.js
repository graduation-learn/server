const professionDetail = require('../../dao/profession/professionDetail');

exports.queryprofessionDetail = async (titleId) => {
    const result = await professionDetail.queryprofessionDetail(titleId);
    return result;
}