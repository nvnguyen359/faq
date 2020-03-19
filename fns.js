
let success = (res, next, data) => {
    res.send({
        data: data,
        code: 200,
        msg: 'successfully',
        err: 0
    });
    next();
};
let failed = (res, next, error) => {
    res.send({
        code: 400,
        msg: 'failed',
        error: error,
        data: [],
        err: 400
    });
    next();
};
module.exports = {
    success, failed
};