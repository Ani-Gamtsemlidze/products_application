import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Products from "../components/Products/Products";
import Loading from "../helper/Loading/Loading";

function SearchedProducts({ data, setData }) {
  // const [data, setData] = useState([]);
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

  return loading ? (
    <div className="bg-gray-100" style={{ minHeight: "calc(100vh - 50px)" }}>
      {data.length > 0 ? (
        <Products data={data} loading={loading} />
      ) : (
        <div
          className="pt-36 flex justify-center"
          style={{ minHeight: "calc(100vh - 88px)" }}
        >
          <p className="text-center text-xl text-red-600 inline-block">
            No items found
          </p>
        </div>
      )}
    </div>
  ) : (
    <div className=" bg-gray-100  pt-44">
      <Loading />
    </div>
  );
}

export default SearchedProducts;
