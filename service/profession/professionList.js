const professionList = require('../../dao/profession/professionList');

exports.queryprofessionListByPage = async (page, limit) => {
    const result = await professionList.queryprofessionListByPage(page, limit);
    const count = await professionList.queryCount();
    return {result,count:count.count};
}

