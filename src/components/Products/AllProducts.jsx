import React, { useEffect } from "react";
import { useProducts } from "../../Contexts/AddCartContext";
import Products from "./Products";

function AllProducts() {
  const { allProducts } = useProducts();

  useEffect(() => {
    allProducts();
  }, []);

  return <Products />;
}

export default AllProducts;
