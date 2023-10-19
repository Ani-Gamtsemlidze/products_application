import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchProducts from "./FetchProducts";
function Products({ setAddProduct, addProduct }) {
  const [data, setDataFetch] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const Category_URL = "https://dummyjson.com/products/category";

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${Category_URL}/${id}`);

        if (response.ok) {
          const data = await response.json();
          setDataFetch(data.products);
          setLoading(true);
        } else {
          setLoading(true);
        }
      } catch (error) {
        setLoading(true);
      }
    }
    fetchProducts();
  }, [id, Category_URL]);

  return (
    <div>
      <FetchProducts
        setAddProduct={setAddProduct}
        addProduct={addProduct}
        id={id}
        data={data}
        loading={loading}
      />
    </div>
  );
}

export default Products;
