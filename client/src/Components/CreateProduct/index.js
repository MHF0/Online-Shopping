import React, { useState } from "react";
import { createProduct } from "../../functions/product";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await createProduct(
        name,
        price,
        description,
        image,
        category
      );
      console.log(res);
      setLoading(false);
      setMessage(res.msg);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setMessage(err.response.data.msg);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {loading ? (
            <div className="alert alert-info">Loading...</div>
          ) : (
            <h3>Create Product</h3>
          )}
        </div>

        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Price</label>

              <input
                type="text"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Description</label>

              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Image</label>

              <input
                type="text"
                className="form-control"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="form-group">
              <label>Category</label>

              <input
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <button className="btn btn-primary mt-3">Submit</button>

            {message && <div className="alert alert-info mt-3">{message}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
