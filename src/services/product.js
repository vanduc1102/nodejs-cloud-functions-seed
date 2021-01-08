
const { Datastore } = require('@google-cloud/datastore');
const datastore = require('../database');

const PRODUCT_KIND = 'Product';

async function save(requestBody) {
  let products = requestBody;
  if (!Array.isArray(requestBody)) {
    products = [requestBody];
  }
  const productEntities = products.map((p) => {
    const key = datastore.key([PRODUCT_KIND]);
    return {
      key,
      data: p
    };
  });

  await datastore.save(productEntities);

  return productEntities;
}

async function edit(productId, productContent) {
  const key = datastore.key([PRODUCT_KIND, datastore.int(productId)]);
  const originProducts = await datastore.get(key);
  const tobeUpdateProduct = Object.assign(originProducts[0], productContent);
  const productEntity = {
    key,
    data: tobeUpdateProduct
  };
  await datastore.update(productEntity);
  return productEntity;
}

async function search() {
  const query = datastore
    .createQuery(PRODUCT_KIND);
  const [products] = await datastore.runQuery(query);
  return addProductKey(products);
}

async function findByIds(productIds) {
  const keys = productIds.map(productId => datastore.key([PRODUCT_KIND, datastore.int(productId)]));
  const [products] = await datastore.get(keys);
  return addProductKey(products);
}

function addProductKey(products) {
  if (products.length > 0) {
    return products.map(entity => ({
      key: entity[Datastore.KEY],
      data: entity
    }));
  }
  return [];
}

async function remove(productId) {
  const key = datastore.key([PRODUCT_KIND, datastore.int(productId)]);
  datastore.delete(key);
  console.log(`Product ${productId} deleted successfully.`);
  return productId;
}

module.exports = {
  save,
  edit,
  findByIds,
  remove,
  search
};
