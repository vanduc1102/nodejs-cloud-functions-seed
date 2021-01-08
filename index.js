require('dotenv').config({ silent: true });

const SERVER_POST = 4000;

const app = require('./src/server');

app.listen(SERVER_POST, () => console.log(`App listening on port ${SERVER_POST}!`));

module.exports = { app };
