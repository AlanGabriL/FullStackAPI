const Product = require('../models/productModel');
const ProductRepository = require('../repositories/ProductRepository');

const productRepository = ProductRepository;

module.exports = {
  async all(req, res) {
    productRepository.GetAllProducts(req, res);
  },

  async one(req, res) {
    productRepository.GetOneProduct(req, res);
  },

  async create(req, res) {
    productRepository.CreateProduct(req, res);
  },

  async update(req, res) {
    productRepository.UpdateProduct(req, res);
  },
  async delete(req, res) {
    productRepository.DeleteProduct(req, res);
  },
};
