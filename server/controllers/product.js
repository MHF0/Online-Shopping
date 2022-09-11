const ProductSchema = require("../database/modules/productSchema");

const createProduct = async (req, res) => {
  try {
    const { name, price, description, image, category } = req.body;
    const userId = req.user.id;
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
    res.status(200).json({ msg: "Product created successfully.", newProduct });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, price, description, image, category } = req.body;
    await ProductSchema.findOneAndUpdate(
      { _id: req.params.id },
      {
        name,
        price,
        description,
        image,
        category,
      }
    );
    res.status(200).json({ msg: "Product updated successfully." });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await ProductSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Product deleted successfully." });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await ProductSchema.find()
      .populate("whoCreated", "name")
      .populate("comments.whoCommented", "name");
    res.status(200).json({ products });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const createComment = async (req, res) => {
  try {
    const { comment } = req.body;
    const userId = req.user.id;
    const product = await ProductSchema.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ msg: "Product does not exist." });
    }
    const newComment = {
      comment,
      whoCommented: userId,
    };
    product.comments.push(newComment);
    await product.save();
    res.status(200).json({ msg: "Comment created successfully." });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  createComment,
};
