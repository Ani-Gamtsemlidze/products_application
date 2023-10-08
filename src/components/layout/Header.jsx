import React from "react";
import Search from "./Search";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const Logo = () => {
    return (
      <div>
        <Link to="/home">
          <img className="w-16 h-16, object-contain" src={logo} />{" "}
        </Link>
      </div>
    );
  };
  return (
    <div className="flex justify-between items-center py-5 px-10  bg-amber-400">
      <Logo />
      <Search />
    </div>
  );
}

export default Header;
