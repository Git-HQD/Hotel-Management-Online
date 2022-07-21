const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./routers/api/index")

require("dotenv").config();


const { connectDB } = require('./models/index.model');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", apiRouter);

app.use(express.static("./src/public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");

connectDB();

const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
