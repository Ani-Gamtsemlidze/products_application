import React from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";

function NavigationPage() {
  return (
    <div>
      <ul className="flex bg-slate-950 text-white px-12	py-2.5 justify-between">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={`/products/smartphones`}>Smartphones</NavLink>
        </li>
        <li>
          <NavLink to={`/products/laptops`}>Laptops</NavLink>
        </li>
        <li>
          <NavLink to={`/products/furniture`}>Furniture</NavLink>
        </li>
        <li>
          <NavLink to={`/products/fragrances`}>Fragrances</NavLink>
        </li>
        <li>
          <NavLink to={`/products/home-decoration`}>Home Decoration</NavLink>
        </li>
        <li>
          <NavLink to={`/allproducts`}>All products</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavigationPage;
