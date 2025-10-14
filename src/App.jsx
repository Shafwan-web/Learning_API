import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import APIPages from "./Pages/APIPages";
import APIPrcPages from "./Pages/APIPrcPages";
import Product from "./component/Product/Product";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Own_API/" />} />
        <Route path="/Own_API" element={<APIPages />} />
        <Route path="/API_Prc" element={<APIPrcPages />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
