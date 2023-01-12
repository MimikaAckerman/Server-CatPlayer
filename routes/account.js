import { Router } from "express";
import { USERS_DB } from "../database.js";

const accountRouter = Router();


 //--------------------------obtener los detalles de la cuenta
accountRouter.get("/:guid", (req, res) => {
    const { guid } = req.params;
    const user = USERS_DB.find((user) => user.guid === guid);
  
    if (!user) return res.status(404).send();
    res.send(user);
  });
  
  //--------------------crear una nueva cuenta
  accountRouter.post("/", (req, res) => {
    const { guid, name } = req.body;
    if (!guid || !name) return res.state(400).send();
  
    const user = USERS_DB.find((user) => user.guid === guid);
    if (user) return res.status(409).send();
  
    USERS_DB.push({
      guid,
      name,
    });
    return res.send();
  });
  
  //--------------------actualizar la cuenta de una cuenta
  accountRouter.patch("/:guid", (req, res) => {
    const { guid } = req.params;
    const { name } = req.body;
  
    if (!name) return res.status(400).send();
    const user = USERS_DB.find((user) => user.guid === guid);
  
    if (!user) res.status(404).send();
    user.name = name;
    return res.send(user);
  });
  
  //--------------------------------eliminar la cuenta
  accountRouter.delete("/:guid", (req, res) => {
    const { guid } = req.params;
    const userIndex = USERS_DB.findIndex((user) => user.guid === guid);
  
    if (userIndex === -1) return res.status(404).send();
    USERS_DB.splice(userIndex, 1);
    return res.send();
  });

  export default accountRouter;