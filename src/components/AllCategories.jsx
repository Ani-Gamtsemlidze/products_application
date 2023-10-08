import React, { useEffect } from "react";
import { useState } from "react";
function AllCategories() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     async function fetchAllProducts() {
  //       try {
  //         const response = await fetch(
  //           "https://dummyjson.com/products/categories?limit=4"
  //         );
  //         const data = await response.json();
  //         setData(data);
  //         console.log(data);
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //     }
  //     fetchAllProducts();
  //   }, []);

  return (
    <>
      {" "}
      categories
      {/* {data.map((item) => (
        <p>{item}</p>
      ))} */}
    </>
  );
}

export default AllCategories;
