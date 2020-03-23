const mathDetail = require('../../dao/math/mathDetail');

exports.querymathDetail = async (titleId) => {
    const result = await mathDetail.querymathDetail(titleId);
    return result;
}