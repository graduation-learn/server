const jyxdList = require('../../dao/jyxd/jyxdList');

exports.queryJyxdListByPage = async (page, limit) => {
    const result = await jyxdList.queryJyxdListByPage(page, limit);
    const count = await jyxdList.queryCount();
    return {result,count:count.count};
}

