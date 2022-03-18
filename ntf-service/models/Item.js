const mongoose = require('mongoose');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const itemSchema = new mongoose.Schema({
  tokenId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  collectionName: {
    type: String,
    required: true,
    trim: true,
  },
  favoritesCount: {
    type: Number,
    default: 0,
  },
  currency: {
    type: String,
    required: true,
    trim: true,
  },
});

// Handle Auth
itemSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Item', itemSchema);
