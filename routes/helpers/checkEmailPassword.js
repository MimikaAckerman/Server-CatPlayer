import { USERS_DB } from "../../database.js";

const checkEmailPassword = (email,password) => {
  const user = USERS_DB.find((user) => user.email === email);

  if (!user) throw new Error();

  if (user.password !== password) throw new Error();
  return user;
};

export default checkEmailPassword;
