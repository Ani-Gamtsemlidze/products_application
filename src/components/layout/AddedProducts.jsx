import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AddCartTheme } from "../../Contexts/AddCartContext";

function AddedProducts() {
  const ctxAddCart = useContext(AddCartTheme);

  return (
    <div
      className=" flex  flex-col mt-2 items-center absolute z-1000 py-3 
    right-4 rounded border border-slate-950 top-12 bg-gray-100  
    h-96	 w-64 overflow-y-scroll scrollbar-thin  scrollbar-thumb-color-yellow scrollbar-track-slate-950  "
    >
      <div className="border-b p-2 mx-2 ">
        <h2 className="text-center ">Your Cart</h2>
      </div>
      {ctxAddCart.data.map((item) => (
        <div className=" flex justify-center items-center mt-4">
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
              <h2 className="text-md">{item.title}</h2>
            </div>
            <div>
              <span>{item.price}$</span>
            </div>
          </div>
        </div>
      ))}
      <div className=" w-28 rounded p-2 mt-4 bg-zinc-200  text-slate-950 ">
        <Link to="/checkout" className="text-center text-sm">
          Go Checkout
        </Link>
      </div>
    </div>
  );
}

export default AddedProducts;
