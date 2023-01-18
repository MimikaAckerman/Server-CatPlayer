const dotenv = require('dotenv')
const logger = require('logLevel')

dotenv.config()

logger.enableAll()

const ENV = process.env.NODE_ENV || 'development'

const CONFIG = {
    development:{
        app:{
            PORT: process.env.PORT || 3000
        },
        logger:{
            warn:logger.warn,
            info:logger.info,
            error:logger.error,
            trace:logger.trace,
            debug:logger.debug
        },
        db:{
            uri:process.env.MONGODB_URI_CLUSTER
        },
        auth0:{
            client_origin:process.env.APP_ORIGIN,
            audience:process.env.AUTH0_AUDIENCE,
            issuer:process.env.AUTH0_ISSUER
        }
    },
    production:{
        app:{
            PORT:process.env.PORT || 3000
        },
        logger:{
            warn:logger.warn,
            info:logger.info,
            error:logger.error,
            trace:logger.trace,
            debug:logger.debug

        },
        db:{
            //localhost -> albums
           /*  url:'http://localhost:8000/albums' */
        }
    }
}
module.exports = CONFIG[ENV]