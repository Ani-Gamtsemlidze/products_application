import { useContext } from "react";
import { AddCartTheme } from "../Contexts/AddCartContext";

function AddButton({ data }) {
  const ctxAddCart = useContext(AddCartTheme);

  const handleAdd = (e) => {
    e.stopPropagation();
    ctxAddCart.addCartHandler(data);
  };

  return (
    <div className="bg-color-yellow p-2 rounded">
      <button onClick={handleAdd}>Add to cart</button>
    </div>
  );
}

export default AddButton;
