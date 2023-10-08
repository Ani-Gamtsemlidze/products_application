import { useEffect, useState } from "react";
import FetchProducts from "./FetchProducts";

function HomeDecorPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchSmartphones() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/home-decoration"
        );
        const data = await response.json();
        setData(data.products);
        console.log(data.products);
        // console.log(data.products);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchSmartphones();
  }, []);
  return <FetchProducts data={data} />;
}

export default HomeDecorPage;
