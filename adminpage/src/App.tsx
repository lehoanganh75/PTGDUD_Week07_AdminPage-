import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-4 gap-5 bg-blue-500 p-5">
        <Menu />
      <div className="col-span-3 flex flex-col h-full">
        <Header />
        <div className="bg-blue h-2 my-2"></div>
        <Content />
      </div>
      
    </div>
  );
}

export default App;
