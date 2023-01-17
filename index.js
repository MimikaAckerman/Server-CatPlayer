const app = require('./server.js')
const config = require('./src/config/config.js')
const connect = require('./src/db/connect.js')

connect().then(async function onServerInit(){
  config.logger.info('database connected')

  app.listen(config.app.PORT,() => {
    config.logger.info(`server is running in http://localhost:${config.app.PORT}`)
  })
})
















/* import express from "express";
/* import dotenv from 'dotenv'*/
/* import accountRouter from "./routes/account.js";
import authRouter from "./routes/auth.js"; */

/* dotenv.config();
process.env.PORT */
/* const PORT = process.env.PORT //3000; */
/* const PORT = 3000

const app = express();
app.use(express.json());
app.use(express.text());
 */

/* app.use("/account" , accountRouter)
app.use("/auth",authRouter)

app.listen(PORT, () => console.log(`servidor levantado en el puerto ${PORT}`)); */

/* app.use(
    cors({
      origin: */ /* config.development.client.URL (URL FRONTEND)*/
   /*  }) */
/*   );  */