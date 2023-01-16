import { Router } from "express";
import { USERS_DB } from "../database.js";
import checkEmailPassword from "../helpers/checkEmailPassword.js";

const authRouter = Router();

//endpoint publico (no autenticado y no autorizado)
authRouter.get("/public",(req,res) => res.send('public endpoint'))

//endpoit autenticado para todo usuario registrado
authRouter.post("/authenticated",(req,res) =>{
    const {email,password} = req.body;
    if(!email || !password) return res.sendStatus(400);
    try {
        const user = checkEmailPassword(email,password)
        return res.send(`user ${user.name} authenticated`)
    } catch (error) {
        return res.sendStatus(401)
        
    }


        //los campos requeridos que tiene que tener el usuario al loguearse , si no se cumplen entonces dara un error 400
            /*   if(!email || !password) return res.send(400);
                const user = USERS_DB.filter(user => user.email === email)
                if(!user) return res.send(401);

                //comprobamos si las credenciales son correctas
                if(user.password !== password) return res.send(401);

                res.send(`user ${user.name} authenticated`) */
})

//endpoit autorizado a administradores
authRouter.post("/authorized",(req,res) =>{
    const {email,password} = req.body;

    if(!email || !password) return res.send(400)
    try {
        const user = checkEmailPassword(email,password);
        if(user.role !='admin') return res.send(403)
        return res.send(`admin user ${user.name}`)
    } catch (error) {
        return res.sendStatus(401)
        
    }


  /*   const user = USERS_DB.filter((user) => user.email === email);
    if(!user) return res.send(401);
    if(user.password !== password) return res.send(401);
    if(user.role !== 'admin') return res.send(403)
    res.send(`user administrator ${user.name}`) */

})
export default authRouter;

