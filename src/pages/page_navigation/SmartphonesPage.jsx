import { useEffect, useState } from "react";
import FetchProducts from "./FetchProducts";

function Smartphones() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchSmartphones() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/smartphones"
        );
        const data = await response.json();
        setData(data.products);
        console.log(data.products);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchSmartphones();
  }, []);

  return <FetchProducts data={data} />;
}

export default Smartphones;
