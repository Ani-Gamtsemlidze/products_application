import React, { useEffect } from "react";
import { useProducts } from "../../Contexts/AddCartContext";
import Products from "./Products";

function AllProducts() {
  const { fetchAllProducts } = useProducts();
  fetchAllProducts();

  return <Products />;
}

export default AllProducts;
