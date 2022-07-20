const Product = require('../models/productModel');
//Retorna todos os itens da tabela
async function GetAllProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send(error);
  }
}
//Retorna um item da tabela
async function GetOneProduct(req, res) {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ where: { id } });
    if (!product) {
      return res.status(200).json(product);
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(200).send(error);
  }
}
//cria um produto
async function CreateProduct(req, res) {
  try {
    await Product.create(req.body);
    res.status(200).json('Product inserted');
  } catch (error) {
    res.status(400).send('deu erro');
  }
}
//atualiza um produto
async function UpdateProduct(req, res) {
  try {
    const { name, price, description, category } = req.body;
    const id = req.params.id;

    const product = await Product.findOne({ where: { id } });

    if (!product) {
      return res.status(400).json('product not found');
    }

    product.name = name;
    product.price = price;
    product.description = description;
    product.category = category;

    await product.save();
    res.status(201).json('Product update');
  } catch (error) {
    res.status(400).send(error);
  }
}
async function DeleteProduct(req, res) {
  try {
    const id = req.params.id;

    const product = await Product.findOne({ where: { id } });

    if (!product) {
      return res.status(404).json('Product not found');
    }

    Product.destroy({ where: { id } });
    res.status(200).send('Product Deleted');
  } catch (error) {
    res.status(400).send(error);
  }
}
module.exports = {
  GetOneProduct,
  GetAllProducts,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
};
