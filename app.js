import express from "express";
import Connectedtod from "./server.js";
import dotenv from "dotenv"
dotenv.config()


const app = express();
const PORT =7070

Connectedtod()



app.get("/", (req, res) => {
  res.send("hello world");
});


 app.listen(PORT, () => {
   console.log(`server is connected and running in :${PORT}`);
 });


export default app; 