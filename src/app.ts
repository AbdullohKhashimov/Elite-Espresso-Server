import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});

/** 1- Entrance **/
const app = express();
// middleware pattern
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/** 2- Session **/
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 3600 * 6, // 6 hours
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);

/** 3- Views **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4- Routers **/
app.use("/admin", routerAdmin); // BSSR: EJS
app.use("/", router); // Middleware design pattern : React

export default app;
