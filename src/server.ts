// Architectural pattern: MVC, Dependency Injection, frontend: MVP
// => backend ning suyagi. Yani backendni malumotlar oqimini tartibga soladigon vosita.

// Design pattern: Middleware, Decotar
// => backend ni malum bir bolaklarini strukturasini yechishda yordam beradi.

// MVC => Module View Controller
// MVP => Model View Presenter

// environmental variable? mahfiy malumotlarni publicga chiqarmaslik uchun .env ga joylab qoyamiz

/* import moment from "moment"; // => commonjs da const moment = require("moment") */

// Cluster => Database => Collection => Document => Dataset

import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection succed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`The server is successfully running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error on connection MongoDB", err);
  });
