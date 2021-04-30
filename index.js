const express = require('express');
const fibonacciRoutes = require('./routes');
const app = express();
const router = express.Router();
const port =  process.env.PORT || 3000;

app.use('/', router);
fibonacciRoutes(router);

app.listen(port, () => {
  console.log(`listening address http://localhost:${port}`);
});