const express = require("express");

const productRouter = express.Router();

const { createProduct, updateProduct } = require("../controllers/product");
const authCheck = require("../middlewares/authCheck");

productRouter.post("/create", authCheck, createProduct);
productRouter.put("/update/:id", authCheck, updateProduct);

module.exports = productRouter;
