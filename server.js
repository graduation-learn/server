const express = require('express')
const app = new express();
const routerJyxdList = require('./router/jyxd/jyxdList');
const routerJyxdDetail = require('./router/jyxd/jyxdDetail');
const routerFszdList = require('./router/fszd/fszdList');
const routerFszdDetail = require('./router/fszd/fszdDetail');
const routerEnglishList = require('./router/english/englishList');
const routerEnglishDetail = require('./router/english/englishDetail');
const routerPoliticsList = require('./router/politics/politicsList');
const routerPoliticsDetail = require('./router/politics/politicsDetail');



app.get('/', (req, res) => {
    res.send(req.send);
});

app.use('/api', routerJyxdList);
app.use('/api', routerJyxdDetail);
app.use('/api', routerFszdList);
app.use('/api', routerFszdDetail);
app.use('/api', routerEnglishList);
app.use('/api', routerEnglishDetail);
app.use('/api', routerPoliticsList);
app.use('/api', routerPoliticsDetail);

app.listen(3001, _ => {
    console.log('server is running');
});