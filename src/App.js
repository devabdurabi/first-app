import React from "react";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Overmij from "./components/Overmij";
import Werkwijze from "./components/Werkwijze";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Overmij />
      <Werkwijze />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
