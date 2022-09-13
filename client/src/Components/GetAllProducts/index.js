import React, { useState, useEffect } from "react";
import { getProducts } from "../../functions/product";
import { Link } from "react-router-dom";

const GetAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    const res = await getProducts();
    setProducts(res.products);
  };
  return (
    <div className="container">
      <div className="row">
        {products &&
          products.map((product) => (
            <div className="col-md-4 mt-3" key={product._id}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={product.image}
                  alt="Card image cap"
                  width={200}
                  height={250}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <Link
                    to={`/product/${product._id}`}
                    className="btn btn-primary"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GetAllProducts;
