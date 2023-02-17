import React from "react";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Werkwijze from "./components/Werkwijze";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Werkwijze />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default App;
