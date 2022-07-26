const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const apiRouter = require('./routers/api/index');
const { connectDB } = require('./models/index.model');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);

app.use('/loginPage', (req, res) => {
  return res.render('login.ejs');
});

app.use(express.static('./src/public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');

connectDB();

const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
