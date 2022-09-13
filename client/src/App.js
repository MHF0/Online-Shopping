import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import CreateProduct from "./Components/CreateProduct";
import GetAllProducts from "./Components/GetAllProducts";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<GetAllProducts />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-products" element={<CreateProduct />} />
        <Route path="/get-all-products" element={<GetAllProducts />} />
      </Routes>
    </div>
  );
}

export default App;
