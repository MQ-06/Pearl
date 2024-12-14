import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Items from "./components/Items";
import AddItem from "./components/AddItem";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="list-items" element={<Items />}></Route>
        <Route path="/add-item" element={<AddItem />}></Route>
      </Routes>
    </>
  );
}

export default App;
