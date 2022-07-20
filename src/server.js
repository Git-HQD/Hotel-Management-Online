import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine-config.js";
// import webRouter from "./routers/web/web.router";
import apiRouter from "../src/routers/api/index";
import connectDB from "./database.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", apiRouter);

// webRouter(app);
viewEngine(app);
connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
