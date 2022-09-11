const express = require("express");

const productRouter = express.Router();

const { createProduct } = require("../controllers/product");
const authCheck = require("../middlewares/authCheck");

productRouter.post("/create", authCheck, createProduct);

module.exports = productRouter;
