import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchProducts from "./FetchProducts";
function Products({}) {
  const [data, setDataFetch] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${id}`
        );
        const data = await response.json();
        setDataFetch(data.products);
        console.log(data.products);
        setLoading(true);
      } catch (error) {
        console.error("error", error);
        setLoading(true);
      }
    }
    fetchProducts();
  }, [id]);
  return (
    <div>
      <FetchProducts data={data} loading={loading} />
    </div>
  );
}

export default Products;
