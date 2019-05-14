/* eslint-disable global-require */
require('dotenv').config({ silent: true });
/* eslint-enable global-require */

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const routers= require('./src/routers/index');

app.use(cors())


app.use(routers);

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = { app };
