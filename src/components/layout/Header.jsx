import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Search from "../../search/Search";

import SnackBar from "../../helper/SnackBar/SnackBar";
import { AddCartTheme } from "../../Contexts/AddCartContext";
import Cart from "./cart/Cart";

function Header({ addProduct }) {
  const ctxAddCart = useContext(AddCartTheme);

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
    <div className="flex justify-between  items-center py-5 px-12 bg-zinc-200	 max-lg:px-4">
      <div>
        <Logo />
      </div>
      <div className="">
        <SnackBar />
      </div>
      <div className="flex items-center">
        <div>
          <Search />
        </div>
        <Cart addProduct={addProduct} />
      </div>
    </div>
  );
}

export default Header;
