const englishList = require('../../dao/english/englishList');

exports.queryEnglishListByPage = async (page, limit) => {
    const result = await englishList.queryEnglishListByPage(page, limit);
    const count = await englishList.queryCount();
    return {result,count:count.count};
}

