let {fakeData,categories,pages} = require('../routers/router');
module.exports = (app) =>{
    app.route('/api/result')
    .get(fakeData)
    .post(fakeData); 
    app.route('/api/categories')
    .post(categories);
    app.route('/api/page')
    .post(pages);
};