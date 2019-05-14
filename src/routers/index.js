const routers = require('express').Router();

const products = require('./products');

routers.get('/', (req, res) => {
  res.json({
    name: "cloud functions: " +req.originalUrl
  })
});

routers.post('/', (req, res) => {
  res.json({
    name: "cloud functions: " +req.originalUrl,
    body: req.body
  })
});

routers.use('/products', products);

module.exports = routers;
