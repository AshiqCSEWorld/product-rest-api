const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },

  transactions: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Transaction'
  }]
})

module.exports = mongoose.model('Product', productSchema);

