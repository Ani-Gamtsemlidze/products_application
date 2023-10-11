import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Search from "../../search/Search";

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
    <div className="flex justify-between max-lg:justify-start items-center py-5 px-12 bg-amber-400 max-lg:px-4">
      <Logo />
      <Search />
    </div>
  );
}

export default Header;
