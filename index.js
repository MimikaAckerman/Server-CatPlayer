
 console.clear();
import {createServer} from 'http';

const httpServer = createServer((req,res) =>{
console.log("PETICION RECIBIDA");
res.end('the response is successful')
});
httpServer.listen(3000) 

/* 

import express  from "express";
import dotenv from 'dotenv';
import {USERS_DB} from './database.js'


dotenv.config();


process.env.PORT;
/*  const PORT = 3000; */
/* const expressApp = express();

expressApp.use(express.json());
expressApp.use(express.text());

//account details
expressApp.get("/:guid", (req,res)=>{

    const user = USERS_DB.find(user => user.guid === req.params.guid)
    
        if(!user) res.status(404).send();
        res.send(user)
})

//created account
expressApp.post()

//update account
expressApp.patch()

//delete account
expressApp.delete()



 */

/* 
expressApp.listen(PORT, () => 
    console.log(`the server is using the port ${PORT}`)
);
  */