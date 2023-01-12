import express from "express";
/* import dotenv from 'dotenv'*/
import accountRouter from "./routes/account.js";







/* dotenv.config();
process.env.PORT */
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.text());


app.use("/account" , accountRouter)


app.listen(PORT, () => console.log(`servidor levantado en el puerto ${PORT}`));
