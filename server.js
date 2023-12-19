import app from "./app.js";
import mongoose from "mongoose";

   //db connection
    const Connectedtod = async () => {
      try {
        await mongoose.connect("mongodb://localhost:27017/");
        console.log("db connected");

        // app.on("error", (err) => {
        //   console.log("ERROR", err);
        //   throw err;
        // });

       
      } catch (error) {
        console.log(error.message);
        
      }
}
    
Connectedtod()

export default Connectedtod;
  

