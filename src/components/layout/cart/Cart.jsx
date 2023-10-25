import React from "react";
import { useProducts } from "../../../Contexts/AddCartContext";
import cart from "../../../assets/shopping-bag.png";
import "./cart.css";
import ProductsInCart from "../../Products/ProductsInCart";

function Cart() {
  const { data, productList, handleAddedProducts, handleCart, cartRef } =
    useProducts();

  handleCart();

  return (
    <div className="relative max-lg:ml-10" ref={cartRef}>
      <div className="cursor-pointer" onClick={handleAddedProducts}>
        <img className="w-10 h-10 items-center justify-center" src={cart} />
        <span className="cart_text absolute text-xs">{data.length}</span>
      </div>
      {productList && <ProductsInCart />}
    </div>
  );
}

export default Cart;
