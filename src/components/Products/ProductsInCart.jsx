import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AddCartTheme } from "../../Contexts/AddCartContext";

function ProductsInCart() {
  const ctxAddCart = useContext(AddCartTheme);

  return (
    <div
      className=" flex z-50 flex-col mt-2 items-center absolute z-1000 py-3 
    right-4 max-lg:right-1	rounded border border-slate-950 top-12 bg-gray-100  
    h-96	 w-64 overflow-y-scroll scrollbar-thin  
    scrollbar-thumb-color-yellow scrollbar-track-slate-950  "
    >
      <div className="border-b p-2 mx-2 ">
        <h2 className="text-center ">Your Cart</h2>
      </div>
      {ctxAddCart.data.map((item, index) => (
        <div key={index} className=" flex justify-center items-center mt-4">
          <div className="w-20 h-24 ">
            <Link to={`/innerProduct/${item.id}`}>
              <img
                className="w-full h-full object-cover border bg-zinc-200"
                src={item.thumbnail}
              />
            </Link>
          </div>
          <div className="pl-2">
            <div className="w-32">
              <h2 className="text-sm ">{item.title}</h2>
            </div>
            <div>
              <span className="text-green-800">{item.price}$</span>
            </div>
          </div>
        </div>
      ))}
      {ctxAddCart.data.length ? (
        <Link to="/checkout" className="text-center text-sm">
          <div
            onClick={ctxAddCart.handleHiddenCart}
            className=" w-28 rounded p-2 mt-4 bg-zinc-200  text-slate-950 "
          >
            Go Checkout
          </div>
        </Link>
      ) : (
        <div className="mt-4">
          <p className="w-52 text-center text-red-600">Cart Data Not Found</p>
        </div>
      )}
    </div>
  );
}

export default ProductsInCart;
