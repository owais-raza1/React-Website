import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../../components/Pages/SignUp/SignUp";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login";
import Brand from "../../components/Pages/Brand/Brand";
import Contact from "../../components/Pages/Contact/Contact";
import Tour from "../../components/Pages/Tour/Tour";
import NotFound from "../../components/Pages/Notfound/NotFound";
import ProductUpload from "../../components/Pages/ProductUpload/ProductUpload";
import ProductDetail from "../../components/Pages/ProductUpload/ProductDetail";
import AddProduct from "../../components/Pages/AddProduct/AddProduct";

function RouterConfig() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product" element={<ProductUpload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/contact" x element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default RouterConfig;
