import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine-config";
import initWebRouters from "./routers/home-router";
import connectDB from "./config/db-config";
import dotenv from "dotenv";
dotenv.config()

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouters(app);

connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
});