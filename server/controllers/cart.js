const CartSchema = require("../database/modules/cart");

const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user.id;
    const cart = await CartSchema.findOne({ user: userId });
    if (cart) {
      const product = cart.products.find((p) => p.product == productId);
      if (product) {
        product.quantity += 1;
      } else {
        cart.products.push({ product: productId, quantity: 1 });
      }
      await cart.save();
      res.status(200).json({ msg: "Product added to cart successfully." });
    } else {
      const newCart = new CartSchema({
        user: userId,
        products: [{ product: productId, quantity: 1 }],
      });
      await newCart.save();
      res.status(200).json({ msg: "Product added to cart successfully." });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await CartSchema.findOne({ user: userId }).populate(
      "products.product",
      "name price image"
    );
    res.status(200).json({ cart });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user.id;
    const cart = await CartSchema.findOne({ user: userId });
    if (cart) {
      const product = cart.products.find((p) => p.product == productId);
      if (product) {
        product.quantity -= 1;
        if (product.quantity == 0) {
          cart.products = cart.products.filter((p) => p.product != productId);
        }
        await cart.save();
        res
          .status(200)
          .json({ msg: "Product removed from cart successfully." });
      } else {
        res.status(400).json({ msg: "Product not found." });
      }
    } else {
      res.status(400).json({ msg: "Cart not found." });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
};
