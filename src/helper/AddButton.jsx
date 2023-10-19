import { Button, createTheme } from "@mui/material";
import { useContext } from "react";
import { AddCartTheme } from "../Contexts/AddCartContext";

function AddButton({ data }) {
  const ctxAddCart = useContext(AddCartTheme);

  const handleAdd = (e) => {
    e.stopPropagation();
    ctxAddCart.addCartHandler(data);
  };

  return (
    <div className=" p-2 rounded">
      <Button
        // sx={{ bgcolor: "red" }}
        // className="button"
        onClick={handleAdd}
        variant="contained"
        color="success"
        size="medium"
      >
        Add to cart
      </Button>
    </div>
  );
}

export default AddButton;
