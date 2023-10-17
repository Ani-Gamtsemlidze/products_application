import React, { useContext, useEffect, useState } from "react";
import { AddCartTheme } from "../../Contexts/AddCartContext";
import cart from "../../assets/shopping-bag.png";
import "./cart.css";

function Cart() {
  const ctxAddCart = useContext(AddCartTheme);

  return (
    <div className="relative">
      <img className="w-10 h-10 items-center justify-center" src={cart} />
      <span className=" cart_text absolute text-xs">
        {ctxAddCart.data.length}
      </span>
    </div>
  );
}

export default Cart;
