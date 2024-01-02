import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Card from "./components/Card";
import Categories from "./components/category";
import Temp from "./pages/temp";

function App() {
  return (
    <>
      <Navbar />
      <Home />

     
      <Categories />
      <p className="text-center text-purple-700 text-2xl"> Hi there! </p>
    </>
  );
}

export default App;
