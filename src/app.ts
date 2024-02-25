import express from "express";
import path from "path";
import router from "./router";
/** 1- Entrance **/
const app = express();

// middleware pattern
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** 2- Session **/

/** 3- Views **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4- Routers **/
app.use("/", router); // Middleware design pattern

export default app;
