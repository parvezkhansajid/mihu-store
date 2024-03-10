const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middlewares/auth");
const router = express.Router();

router.route("/product/new").post(isAuthenticatedUser, createProduct);
router.route("/products").get(getAllProducts);
router
  .route("/product/:id")
  .put(isAuthenticatedUser, updateProduct)
  .delete(isAuthenticatedUser, deleteProduct)
  .get(getProductDetails);

module.exports = router;
