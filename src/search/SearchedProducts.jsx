import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FetchProducts from "../pages/page_navigation/FetchProducts";

function SearchedProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("q");

  useEffect(() => {
    async function fetchSearchData() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${id}`
        );
        const searchData = await response.json();
        const products = searchData.products;
        setData(products);
        console.log(products);
        setLoading(true);

        console.log(searchData.products);
      } catch (error) {
        console.log("error", error);
        setLoading(true);
      }
    }
    fetchSearchData();
  }, [id]);

  return (
    <div>
      {data.length > 0 ? (
        <FetchProducts data={data} loading={loading} />
      ) : (
        <div className="pt-8 flex justify-center">
          <p className="text-center text-xl h-96 text-slate-950 inline-block">
            No items found
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchedProducts;
