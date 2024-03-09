const Product = require("../models/productModel");

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

exports.getAllProducts = async (req, res, next) => {
  const products = await Product.find();

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product Not Found!",
    });
  }

  res.status(200).json({
    success: true,
    products,
  });
};

exports.getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product Not Found!",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
};

exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product Not Found!",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
};

exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product Not Found!",
    });
  }

  await Product.findByIdAndDelete(product);
  res.status(200).json({
    success: true,
    message: "Product Deleted Succefully!",
  });
};
