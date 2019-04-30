const mongoose = require('mongoose');

const Product = mongoose.model('Product');
const Transaction = mongoose.model('Transaction');


exports.createProduct = async (req, res) => {
  const product = await (new Product(req.body)).save();
  res.send(product);

}

exports.getProducts = async (req, res) => {
  const products = await Product.find().select(['-transactions']);
  res.send(products);
}

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id).populate('transactions');
  if (!product) {
    return res.status(404).send('Product not found');
  }
  res.send(product);
}

exports.productWithTransaction = async (req, res) => {
  // get product by id
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).send('Product not found');
  }
  const transactions = await (new Transaction(req.body)).save();
  product.transactions.push(transactions);
  await product.save();
  res.send(product);
}