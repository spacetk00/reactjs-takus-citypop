import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
  once: true,
  disable: window.innerWidth < 768,
});

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
