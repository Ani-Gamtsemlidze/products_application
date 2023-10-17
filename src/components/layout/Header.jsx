import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Search from "../../search/Search";
import Cart from "./Cart";
import CartAdded from "./SnackBar";
import { AddCartTheme } from "../../Contexts/AddCartContext";
import { Snackbar } from "@mui/base";
import SnackBar from "./SnackBar";

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
    <div className="flex justify-between max-lg:justify-start items-center py-5 px-12 bg-zinc-200	 max-lg:px-4">
      <Logo />

      <div className="">
        <SnackBar />
      </div>
      <div className="flex items-center">
        <Search />
        <Cart addProduct={addProduct} />
      </div>
    </div>
  );
}

export default Header;
