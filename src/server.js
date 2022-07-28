const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const apiRouter = require('./routers/api/index');
const homeRouter = require('./routers/page/homePage.router');
const { connectDB } = require('./models/index.model');
const { notFound, errorHandler } = require('./middleware/error.middleware');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);
app.use('/home', homeRouter);

app.use(express.static('./src/public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(notFound);
app.use(errorHandler);

connectDB();

const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
