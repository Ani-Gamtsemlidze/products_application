import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InnerSlider from "../../inner_slider/InnerSlider";

import Loading from "./Loading";
// import Rating from "./Rating";

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
          <div className=" flex flex-row max-lg:flex-col max-lg:max-h-max max-lg:m-5  max-lg:p-2 rounded max-h-96		">
            <InnerSlider imageData={imageData} />
            <div className="ml-6  ">
              <div>
                <p className="text-2xl ">
                  {data.title} <span className="text-sm ">({data.brand})</span>
                </p>
                {/* <Rating data={data} /> */}
                <div className="mt-4 w-60	m-auto p-2 flex justify-between items-center bg-zinc-200		rounded-xl ">
                  <div className="flex items-center ">
                    <span className="pr-2">{data.rating}</span>
                    <Rating
                      name="half-rating-read"
                      value={data.rating}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                  </div>
                  <span className=" text-md "> {data.price} $</span>
                </div>
              </div>
              <div className="w-96 border-t mt-8 max-lg:w-80">
                <p className="pt-4">{data.description}.</p>
              </div>
              <div className="bg-color-yellow p-2 rounded w-32 mt-8 flex justify-center">
                <p>Add to cart</p>
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
