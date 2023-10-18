import React, { useState, useEffect, useContext } from "react";
import "./navigation.css";
import { NavLink, Link } from "react-router-dom";
import MenuBar from "../responsive_menu/MenuBar";
import { AddCartTheme } from "../../../Contexts/AddCartContext";

function NavigationPage() {
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

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return active ? (
    <div>
      <ul
        className={"flex bg-slate-950 text-white px-12 py-2.5 justify-between"}
      >
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
      {/* <Navigation /> */}
    </div>
  ) : (
    <div className="relative">
      <Link onClick={handleMenu}>
        <MenuBar />
      </Link>
      {showMenu && (
        <div className="absolute z-50 w-full">
          <ul className=" h-screen bg-slate-950  text-white text-xl pl-8 pt-6">
            <li onClick={handleMenu} className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={handleMenu}>
              <NavLink to={`/products/smartphones`}>Smartphones</NavLink>
            </li>
            <li onClick={handleMenu}>
              <NavLink to={`/products/laptops`}>Laptops</NavLink>
            </li>
            <li onClick={handleMenu}>
              <NavLink to={`/products/furniture`}>Furniture</NavLink>
            </li>
            <li onClick={handleMenu}>
              <NavLink to={`/products/fragrances`}>Fragrances</NavLink>
            </li>
            <li onClick={handleMenu}>
              <NavLink to={`/products/home-decoration`}>
                Home Decoration
              </NavLink>
            </li>
            <li onClick={handleMenu}>
              <NavLink to={`/allproducts`}>All products</NavLink>
            </li>
          </ul>
          {/* <Navigation /> */}
        </div>
      )}
    </div>
  );
}

export default NavigationPage;
