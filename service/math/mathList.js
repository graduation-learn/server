const mathList = require('../../dao/math/mathList');

exports.querymathListByPage = async (page, limit) => {
    const result = await mathList.querymathListByPage(page, limit);
    const count = await mathList.queryCount();
    return {result,count:count.count};
}

