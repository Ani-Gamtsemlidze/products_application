import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import Search from "../../../search/Search";

import SnackBar from "../../../helper/SnackBar/SnackBar";
import Cart from "../cart/Cart";

function Header({ data }) {
  const Logo = () => {
    return (
      <div>
        <Link to="/">
          <img
            className="w-12 h-16 max-lg:w-10 max-lg:h-10 object-contain"
            src={logo}
          />{" "}
        </Link>
      </div>
    );
  };
  return (
    <div className="flex justify-between h-20 max-lg:h-16 items-center  px-12 bg-zinc-200	 max-lg:px-4">
      <div>
        <Logo />
      </div>
      <div className="">
        <SnackBar />
      </div>
      <div className="flex items-center">
        <div>
          <Search data={data} />
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default Header;
