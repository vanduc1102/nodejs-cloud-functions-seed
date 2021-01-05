/* eslint-disable global-require */
require('dotenv').config({ silent: true });
/* eslint-enable global-require */

const express = require('express');

const cors = require('cors');
const app = express();
const port = 4000;

const routers = require('./src/routers/index');

app.use(cors());

app.use(express.json());

app.use(routers);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(__filename, err.stack);
  res.status(500).send('Uff!');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = { app };
