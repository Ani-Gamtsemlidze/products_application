import React, { useContext, useEffect, useState } from "react";
import { AddCartTheme } from "../../Contexts/AddCartContext";
import cart from "../../assets/shopping-bag.png";
import "./cart.css";
import AddedProducts from "./AddedProducts";

function Cart() {
  const ctxAddCart = useContext(AddCartTheme);
  const [productList, setProductList] = useState(false);
  const handleAddedProducts = () => {
    setProductList(!productList);
  };

  return (
    <div className="relative ">
      <div className="cursor-pointer" onClick={handleAddedProducts}>
        <img className="w-10 h-10 items-center justify-center" src={cart} />
        <span className=" cart_text absolute text-xs">
          {ctxAddCart.data.length}
        </span>
      </div>
      {productList && <AddedProducts />}
    </div>
  );
}

export default Cart;
