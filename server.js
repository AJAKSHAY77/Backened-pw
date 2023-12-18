import app from "./app.js";
import mongoose from "mongoose";
const PORT = process.env.PORT || 5000
const hostname = "localhost"

//db connection

// mongoose.connect("mongodb://localhost:27017/ecommerce");

    (async() => {
      try {
          await mongoose.connect("mongodb://localhost:27017/ecommerce");
          console.log("db connected");
      } catch (error) {
          console.error("Error :", err);
          throw err
      }
})()

app.listen(PORT ,() => {
    
console.log(`server is connected and running in ${hostname}:${PORT}`);

});