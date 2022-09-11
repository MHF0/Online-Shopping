import React from "react";
import Logo from "./logo.png";
import { useNavigate, Link } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/"
          class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img src={Logo} alt="" width="150" height="150" />
        </Link>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" class="nav-link px-2 link-dark">
              Home
            </Link>
          </li>
          <li>
            <Link to="products" class="nav-link px-2 link-dark">
              Products
            </Link>
          </li>
          <li>
            <Link to="cart" class="nav-link px-2 link-dark">
              Cart
            </Link>
          </li>
        </ul>

        <div class="col-md-3 text-end">
          <button
            type="button"
            class="btn btn-outline-primary me-2"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            type="button"
            class="btn btn-outline-primary me-2"
            onClick={() => navigate("/sign-up")}
          >
            Sign-up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
