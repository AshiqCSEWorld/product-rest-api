const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {
  catchErrors
} = require('../handlers/errorHandlers');

const ProductController = require('../controllers/ProductController');

// create products
router.post('/products', catchErrors(ProductController.createProduct));

// get products
router.get('/products', catchErrors(ProductController.getProducts))

// get products by id
router.get('/product/:id', catchErrors(ProductController.getProduct));

// post products with transactions
router.post('/products/:id', catchErrors(ProductController.productWithTransaction));

// paginated products
router.get('/products/page/:page', catchErrors(ProductController.paginatedProducts));



module.exports = router;

