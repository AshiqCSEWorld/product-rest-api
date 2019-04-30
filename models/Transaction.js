const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
  amount: {
    type: Number,
  },

  method: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Transaction', transactionSchema);