import React from "react";
import Products from "../components/Products/Products";
import { useProducts } from "../Contexts/AddCartContext";
import Loading from "../helper/Loading/Loading";

function SearchedProducts() {
  const { categoryData, loading, fetchSearchedData } = useProducts();

  fetchSearchedData();

  return loading ? (
    <div className="bg-gray-100">
      {categoryData.length > 0 ? (
        <Products loading={loading} />
      ) : (
        <div
          className="pt-36 flex justify-center"
          style={{ minHeight: "calc(100vh - 52px)" }}
        >
          <p className="text-center text-xl text-red-600 inline-block">
            No items found
          </p>
        </div>
      )}
    </div>
  ) : (
    <div
      className=" bg-gray-100  pt-52"
      style={{ minHeight: "calc(100vh - 52px)" }}
    >
      <Loading />
    </div>
  );
}

export default SearchedProducts;
