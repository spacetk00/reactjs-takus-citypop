import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Roulette from "./pages/roulette";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1200,
  once: true,
  disable: window.innerWidth < 768,
});

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/roulette" element={<Roulette />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
