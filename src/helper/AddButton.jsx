import { useContext, useState } from "react";
import { AddCartTheme } from "../Contexts/AddCartContext";

function AddButton({ data }) {
  const ctxAddCart = useContext(AddCartTheme);

  const handleAdd = () => {
    ctxAddCart.addCartHandler(data);
  };

  return (
    <div className="bg-color-yellow p-2 rounded">
      <button onClick={handleAdd}>Add to cart</button>
    </div>
  );
}

export default AddButton;
