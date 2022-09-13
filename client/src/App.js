import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import CreateProduct from "./Components/CreateProduct";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-products" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
