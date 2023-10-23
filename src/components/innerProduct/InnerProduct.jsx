import { Rating } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

import Loading from "../../helper/Loading/Loading";
import { AddCartTheme } from "../../Contexts/AddCartContext";
import ProductSlider from "../product_slider/ProductSlider";

function InnerProduct() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const ctxAddCart = useContext(AddCartTheme);

  const handleAdd = (e) => {
    e.stopPropagation();
    ctxAddCart.addCartHandler(data);
  };

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
        <section
          // style={{ height: "800px" }}
          className="flex justify-center pt-52 pb-11	 max-lg max-lg:pt-40  bg-gray-100 "
        >
          <div className=" flex flex-row max-lg:flex-col  max-lg:m-5  max-lg:p-2 rounded 	">
            <ProductSlider imageData={imageData} />
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
                  <span className=" text-md text-green-800 ">
                    {" "}
                    {data.price} $
                  </span>
                </div>
              </div>
              <div className="w-96 pt-4 border-t mt-8 max-lg:w-80 max-lg:pt-4">
                {data.description}
              </div>
              <div className=" flex justify-center mt-6 ">
                <Button
                  onClick={handleAdd}
                  variant="contained"
                  color="success"
                  size="medium"
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div
          className=" bg-gray-100 pt-52"
          style={{ minHeight: "calc(100vh - 50px)" }}
        >
          <Loading />
        </div>
      )}
    </>
  );
}

export default InnerProduct;
