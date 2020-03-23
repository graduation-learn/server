const englishDetail = require('../../dao/english/englishDetail');

exports.queryEnglishDetail = async (titleId) => {
    const result = await englishDetail.queryEnglishDetail(titleId);
    return result;
}