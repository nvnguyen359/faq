const fs = require('fs');
let fns = require('../fns');
let data = () => {
    let rawdata = fs.readFileSync('./data/fake.json');
    return JSON.parse(rawdata);
};
let pagesData = () => {
    let rawdata = fs.readFileSync('./data/pages.json');
    return JSON.parse(rawdata);
};
let fakeData = (req, res, next) => {
    let body = req.body;
   // console.log(body);
    try {
        let  result = data();
        if (body != null) {
            result = result.find((el) => {
                return el.category === body.category;
            });
            let filter = result.data.find((e) =>{
               return body.key == e.key;
            });
           // console.log(filter)
            result = {
                category:body.category,
                data:filter
            };
        }
        fns.success(res, next, result);
    } catch (error) {
        fns.failed(res, next, error);
    }
};
let categories = (req, res, next) => {
    try {
        fns.success(res, next, data());
    } catch (error) {
        fns.failed(res, next, error);
    }
};
let pages = (req, res, next) => {
    try {
        let data = pagesData();
        const body = req.body;
       // console.log(body)
        if(body!=null){
            data = data.find((el)=>{
                return el.page == body.page;
            });
        }
        fns.success(res, next,data );
    } catch (error) {
        fns.failed(res, next, error);
    }
};
module.exports = {
    fakeData, categories,pages
};