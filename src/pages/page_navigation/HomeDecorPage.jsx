import { useEffect, useState } from "react";

function HomeDecorPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchSmartphones() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/homedecor"
        );
        const data = await response.json();
        console.log(data.products);
        // console.log(data.products);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchSmartphones();
  }, []);
  return <div>{ok}</div>;
}

export default HomeDecorPage;
