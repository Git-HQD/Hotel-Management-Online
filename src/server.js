import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine-config.js";
<<<<<<< HEAD
// import webRouter from "./routers/web/web.router";
import apiRouter from "../src/routers/api/index";
import connectDB from "./database.js";
=======
import initWebRouters from "./routers/web-router.js";
>>>>>>> origin/init-database
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from './models/index-model';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", apiRouter);

// webRouter(app);
viewEngine(app);
connectDB();

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
