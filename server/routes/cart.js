const express = require("express");

const cartRoute = express.Router();

const { addToCart, getCart, removeFromCart } = require("../controllers/cart");

const authCheck = require("../middlewares/authCheck");

cartRoute.post("/add-to-cart", authCheck, addToCart);
cartRoute.get("/get-cart", authCheck, getCart);
cartRoute.post("/remove-from-cart", authCheck, removeFromCart);

module.exports = cartRoute;
