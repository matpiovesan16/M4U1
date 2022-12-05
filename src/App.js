import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import ContactoPages from "./pages/ContactoPages";
import Nosotros from "./pages/Nosotros";
import Galeria from "./pages/Galeria";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<ContactoPages />} />
          <Route path="galeria" element={<Galeria />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
