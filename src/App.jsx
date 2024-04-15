/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { Home } from "./Home";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
