const {logger} = require('./../config/config.js')

function errorMiddleware(err,req,res,next){
    logger.debug('Error handle Middleware');
    logger.error(err);

    if(req.headerSent){
        return next(err)
    }
res.status(500).send({
    data:null,
    error:'Something went wrong',
});
}
module.exports = {
    errorMiddleware:errorMiddleware,
};
