const ProductSchema = require("../database/modules/productSchema");

const createProduct = async (req, res) => {
  try {
    const { name, price, description, image, category } = req.body;
    const userId = req.user.userId;
    const product = await ProductSchema.findOne({ name });
    if (product) {
      return res.status(400).json({ msg: "Product already exists." });
    }
    const newProduct = new ProductSchema({
      name,
      price,
      description,
      image,
      category,
      whoCreated: userId,
    });
    await newProduct.save();
    res.status(200).json({ msg: "Product created successfully." });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  createProduct,
};
