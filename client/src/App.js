import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
