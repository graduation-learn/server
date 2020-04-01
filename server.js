const express = require('express')
const app = new express();
const routersAll = require('./router/index');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


for (const prop in routersAll) {
    if (routersAll.hasOwnProperty(prop)) {
        app.use('/api', routersAll[prop]);
    }
}

app.listen(3001, _ => {
    console.log('server is running');
});