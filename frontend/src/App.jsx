import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title="Argent Bank" />
      <Outlet />
      <Footer text="Copyright 2020 Argent Bank" />
    </>
  );
}

export default App;
