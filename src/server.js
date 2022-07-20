import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine-config.js";
import initWebRouters from "./routers/web-router.js";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from './models/index-model';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouters(app);

connectDB();

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
