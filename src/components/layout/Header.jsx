import React from "react";
import Search from "./Search";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import MenuBar from "../../pages/page_navigation/MenuBar";

function Header() {
  const Logo = () => {
    return (
      <div>
        <Link to="/">
          <img
            className="w-16 h-16 max-lg:w-10 max-lg:h-10 object-contain"
            src={logo}
          />{" "}
        </Link>
      </div>
    );
  };
  return (
    <div className="flex justify-between max-lg:justify-start items-center py-5 px-12 bg-amber-400">
      <Logo />
      <Search />
    </div>
  );
}

export default Header;
