import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactInfo" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
