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

console.log("PORT:", process.env.PORT);
console.log("MONGO_URL:", process.env.MONGO_URL);
