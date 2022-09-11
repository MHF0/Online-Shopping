const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },

  category: {
    type: String,
    required: true,
    trim: true,
  },
  comments: [
    {
      comment: {
        type: String,
        required: true,
        trim: true,
      },
      whoCommented: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  whoCreated: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Product", ProductSchema);
