const express = require('express');
const router = express.Router();
const DEBUG = require('debug')(__filename.slice(__dirname.length + 1, -3));

router.use((req, res, next) => {
  DEBUG('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send('Products home page');
});

router.get('/about', (req, res) => {
  res.send('About Products');
});

module.exports = router;
