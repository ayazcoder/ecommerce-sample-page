import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Customer from "./components/Customer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customer />} />
      </Routes>
    </Router>
  );
}
