import React from "react";
import { useEffect, useState } from "react";
import FetchProducts from "./FetchProducts";

function AllProducts() {
  const [dataFetch, setDataFetch] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=15");
        const data = await response.json();
        setDataFetch(data.products);
        console.log(data.products);
        setLoading(true);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    }
    fetchAllProducts();
  }, []);
  return <FetchProducts dataFetch={dataFetch} loading={loading} />;
}

export default AllProducts;
