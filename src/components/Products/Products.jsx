import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchProducts from "./FetchProducts";
function Products({ setAddProduct, addProduct }) {
  const [data, setDataFetch] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${id}`
        );

        if (response.ok) {
          const data = await response.json();
          setDataFetch(data.products);
          setTimeout(() => {
            setLoading(true);
          }, 1000);
        } else {
          setLoading(true);
        }
      } catch (error) {
        setLoading(true);
      }
    }
    fetchProducts();
  }, [id]);

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
