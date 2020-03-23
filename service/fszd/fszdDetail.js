const fszdDetail = require('../../dao/fszd/fszdDetail');

exports.queryFszdDetail = async (titleId) => {
    const result = await fszdDetail.queryFszdDetail(titleId);
    return result;
}