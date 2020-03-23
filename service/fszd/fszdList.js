const fszdList = require('../../dao/fszd/fszdList');

exports.queryFszdListByPage = async (page, limit) => {
    const result = await fszdList.queryFszdListByPage(page, limit);
    const count = await fszdList.queryCount();
    return {result,count:count.count};
}

