import React, { useState, useEffect, useContext } from "react";
import "./navigation.css";
import { NavLink, Link } from "react-router-dom";
import { AddCartTheme } from "../../../Contexts/AddCartContext";

function Navigation() {
  const [active, setActive] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const ctxAddCart = useContext(AddCartTheme);

  useEffect(() => {
    function handleResize() {
      setActive(window.innerWidth >= 992);
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial setup
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className=" nav_box max-lg:overflow-x-scroll max-lg:scrollbar-thin
      max-lg:scrollbar-thumb-color-yellow max-lg:scrollbar-track-zinc-200"
    >
      <ul className="nav_bar flex bg-slate-950 text-white justify-between">
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
          <NavLink to={`/all-products`}>All products</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
