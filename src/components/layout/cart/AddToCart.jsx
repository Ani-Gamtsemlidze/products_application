import { Button } from "@mui/material";
import { useProducts } from "../../../Contexts/AddCartContext";

function AddToCart({ data }) {
  const { addCartHandler } = useProducts();

  const handleAdd = (e) => {
    e.stopPropagation();
    addCartHandler(data);
  };

  return (
    <div className=" p-2 rounded">
      <Button
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

export default AddToCart;
