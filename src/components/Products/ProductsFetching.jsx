import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../Contexts/AddCartContext";
import Products from "./Products";

function ProductsFetching() {
  const { fetchProducts } = useProducts();

  fetchProducts();

  return (
    <div>
      <Products />
    </div>
  );
}

export default ProductsFetching;
