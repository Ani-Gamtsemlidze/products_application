import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InnerSlider from "./InnerSlider";

function ProductDetails() {
  const [data, setData] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchProduct();
  }, [id]);

  const imageData = data.images
    ? [
        {
          label: "Image 1",
          alt: "image1",
          url: `${data.images[0]}`,
        },
        {
          label: "Image 2",
          alt: "image2",
          url: `${data.images[1]}`,
        },
        {
          label: "Image 3",
          alt: "image3",
          url: `${data.images[2]}`,
        },
      ]
    : [];
  return (
    <section className="flex justify-center items-center pt-5 bg-gray-100 h-screen		">
      <div className="bg-slate-950 flex flex-row p-4 rounded max-h-96		">
        <InnerSlider imageData={imageData} />
        <div className="ml-5 text-white ">
          <div className="  ">
            <p className="text-2xl">
              {" "}
              {data.title} <span className="text-sm">({data.brand})</span>
            </p>
            <p>{data.rating}</p>
            <span className="text-amber-400"> {data.price} $</span>
          </div>
          <div className="w-80 border-t mt-2	">
            <p>{data.description}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
