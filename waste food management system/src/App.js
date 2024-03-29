import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./Client/components/navbar";
import Home from "./Client/components/Home";
import Shop from "./Client/components/Shop";
import AddProduct from "./Client/components/AddProduct";
import Login from "./Client/components/Login";
import Register from "./Client/components/Register";
import Profile from "./Client/components/Profile";
import Driverreg from "./Client/components/Driverreg";
import Driverlog from "./Client/components/Driverlog";

function App() {
  return (
    <div className="App">
      <header className="navcss">
        <Navbar />
      </header>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Driverreg" element={<Driverreg />} />
        <Route path="/Driverlog" element={<Driverlog />} />
      </Routes>
    </div>
  );
}

export default App;
