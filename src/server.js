const express = require('express');

const cors = require('cors');
const app = express();

const routers = require('./routers/index');

app.use(cors());

app.use(express.json());

app.use(routers);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(__filename, err.stack);
  res.status(500).send('Uff!');
});

module.exports = app;
