import React, { useContext, useEffect, useState, useRef } from "react";
import { AddCartTheme } from "../../Contexts/AddCartContext";
import cart from "../../assets/shopping-bag.png";
import "./cart.css";
import AddedProducts from "./AddedProducts";

function Cart() {
  const ctxAddCart = useContext(AddCartTheme);
  const cartRef = useRef(null);
  console.log(cartRef);

  const handleAddedProducts = () => {
    ctxAddCart.setProductList(!ctxAddCart.productList);
  };

  // tu cartRef.current-i ar sheicavs event targets carti imaleba
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        ctxAddCart.setProductList(false); // Close the cart when clicked outside
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ctxAddCart]);

  return (
    <div className="relative" ref={cartRef}>
      <div className="cursor-pointer" onClick={handleAddedProducts}>
        <img className="w-10 h-10 items-center justify-center" src={cart} />
        <span className="cart_text absolute text-xs">
          {ctxAddCart.data.length}
        </span>
      </div>
      {ctxAddCart.productList && <AddedProducts />}
    </div>
  );
}

export default Cart;
