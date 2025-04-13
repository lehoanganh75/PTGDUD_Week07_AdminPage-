import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="bg-white bg-opacity-80 p-4">
      <a href="#" className="block mb-2">
        Link 1
      </a>
      <a href="#" className="block mb-2">
        Link 2
      </a>
      <a href="#" className="block">
        Link 3
      </a>
    </div>
  );
};

export default Menu;
