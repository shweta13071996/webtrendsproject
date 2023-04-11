import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import {css} from "@emotion/core";
// import PropgateLoader from "react-spinner/PropgateLoader"

function App() {
  
  return (
 <div className="App">
  <Navbar/>
  <Home />
  <Products />
  <About/>
<Contact/>
<Footer />

 </div>
  );
}

export default App;
