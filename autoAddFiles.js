const fs = require('fs');
const path = require('path');
const type = 'politics';
const Type = 'Politics';

/**
 * 添加dao层的list
 */
const daoListResult = fs.readFileSync(path.resolve(__dirname, './dao/english/englishList.js'));

const changeDaoListResult = daoListResult.toString().replace(/(english|English)/g, function ($) {
    return $ === 'english' ? type : Type;
});

fs.writeFileSync(path.resolve(__dirname, `./dao/${type}/${type}List.js`), changeDaoListResult);


/**
 * 添加dao层的detail
 */
const daoDetailResult = fs.readFileSync(path.resolve(__dirname, './dao/english/englishDetail.js'));

const changeDaoDetailResult = daoDetailResult.toString().replace(/(english|English)/g, function ($) {
    return $ === 'english' ? type : Type;
});

fs.writeFileSync(path.resolve(__dirname, `./dao/${type}/${type}Detail.js`), changeDaoDetailResult);


/**
 * 添加service层的list
 */
const serviceListResult = fs.readFileSync(path.resolve(__dirname, './service/english/englishList.js'));

const changeServiceListResult = serviceListResult.toString().replace(/(english|English)/g, function ($) {
    return $ === 'english' ? type : Type;
});

fs.writeFileSync(path.resolve(__dirname, `./service/${type}/${type}List.js`), changeServiceListResult);

/**
 * 添加service层的detail
 */
const serviceDetailResult = fs.readFileSync(path.resolve(__dirname, './service/english/englishDetail.js'));

const changeServiceDetailResult = serviceDetailResult.toString().replace(/(english|English)/g, function ($) {
    return $ === 'english' ? type : Type;
});

fs.writeFileSync(path.resolve(__dirname, `./service/${type}/${type}Detail.js`), changeServiceDetailResult);






/**
 * 添加router层的list
 */
const routerListResult = fs.readFileSync(path.resolve(__dirname, './router/english/englishList.js'));

const changerouterListResult = routerListResult.toString().replace(/(english|English)/g, function ($) {
    return $ === 'english' ? type : Type;
});

fs.writeFileSync(path.resolve(__dirname, `./router/${type}/${type}List.js`), changerouterListResult);

/**
 * 添加router层的detail
 */
const routerDetailResult = fs.readFileSync(path.resolve(__dirname, './router/english/englishDetail.js'));

const changerouterDetailResult = routerDetailResult.toString().replace(/(english|English)/g, function ($) {
    return $ === 'english' ? type : Type;
});

fs.writeFileSync(path.resolve(__dirname, `./router/${type}/${type}Detail.js`), changerouterDetailResult);