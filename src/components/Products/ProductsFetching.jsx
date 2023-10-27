import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../Contexts/AddCartContext";
import Products from "./Products";

function ProductsFetching() {
  const { id } = useParams();
  const { fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts(id);
  }, [id]);

  return (
    <div>
      <Products />
    </div>
  );
}

export default ProductsFetching;
