import React from "react";
import { useEffect, useState } from "react";
import FetchProducts from "./FetchProducts";

function AllProducts() {
  const [data, setDataFetch] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=15");
        const data = await response.json();
        setDataFetch(data.products);
        setLoading(true);
      } catch (error) {
        setLoading(true);
      }
    }
    fetchAllProducts();
  }, []);
  return <FetchProducts data={data} loading={loading} />;
}

export default AllProducts;
