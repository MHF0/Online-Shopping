import React, { useState } from "react";
import { login } from "../../functions/users";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(email, password);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userId", response.data.id);
    if (response.data.token) {
      navigate("/");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Login</h1>
        </div>

        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>

            <p className="forgot-password text-right mt-3">
              Didn't have account <a href="/sign-up">sign up?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
