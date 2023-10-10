import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InnerSlider from "./InnerSlider";

import Loading from "./Loading";
import Rating from "./rating";

function ProductDetails() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setData(data);
        console.log(data);
        setLoading(true);
      } catch (error) {
        console.log("error", error);
        setLoading(true);
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
    <>
      {loading ? (
        <section className="flex justify-center pt-12 bg-gray-100 h-screen">
          <div className="bg-slate-950 flex flex-row p-8 rounded max-h-96		">
            <InnerSlider imageData={imageData} />
            <div className="ml-5 text-white ">
              <div>
                <p className="text-2xl ">
                  {data.title} <span className="text-sm ">({data.brand})</span>
                </p>
                <Rating data={data} />
                <div className="mt-2 pr-2 flex justify-end bg-slate-900	rounded-xl">
                  <span className="text-amber-400 text-xl ">
                    {" "}
                    {data.price} $
                  </span>
                </div>
              </div>
              <div className="w-96 border-t mt-8">
                <p className="pt-4">{data.description}.</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="h-96 pt-20">
          <Loading />
        </div>
      )}
    </>
  );
}

export default ProductDetails;