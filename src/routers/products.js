const express = require('express');
const router = express.Router();
const DEBUG = require('debug')(__filename.slice(__dirname.length + 1, -3));
const productService = require('../services/product.service');
const { runAsyncWrapper } = require('../middleware');

router.use((req, res, next) => {
  DEBUG('Time: ', Date.now());
  next();
});

router.post('/', runAsyncWrapper(async (req, res) => {
  res.json(await productService.save(req.body));
}));

router.put('/:id', runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  res.json(await productService.edit(id, req.body));
}));

router.get('/:id', runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  res.json(await productService.findByIds([id]));
}));

router.get('/', runAsyncWrapper(async (req, res) => {
  res.json(await productService.search());
}));

router.delete('/:id', runAsyncWrapper(async (req, res) => {
  const { id } = req.params;
  res.json(await productService.remove(id));
}));

router.get('/about', (req, res) => {
  res.send('About Products');
});

module.exports = router;
