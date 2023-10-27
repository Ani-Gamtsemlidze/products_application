import { Rating } from "@mui/material";
import React, { useEffect } from "react";
import { Button } from "@mui/material";

import Loading from "../../helper/Loading/Loading";
import { useProducts } from "../../Contexts/AddCartContext";
import ProductSlider from "../product_slider/ProductSlider";
import { useParams } from "react-router-dom";

function InnerProduct() {
  const { productData, fetchInnerProduct, loading, handleAddInCart } =
    useProducts();

  const { id } = useParams();

  useEffect(() => {
    fetchInnerProduct(id);
  }, [id]);

  const imageData = productData.images
    ? [
        {
          label: "Image 1",
          alt: "image1",
          url: `${productData.images[0]}`,
        },
        {
          label: "Image 2",
          alt: "image2",
          url: `${productData.images[1]}`,
        },
        {
          label: "Image 3",
          alt: "image3",
          url: `${productData.images[2]}`,
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
                  {productData.title}{" "}
                  <span className="text-sm ">({productData.brand})</span>
                </p>
                {/* <Rating productData={productData} /> */}
                <div className="mt-4 w-60	m-auto p-2 flex justify-between items-center bg-zinc-200		rounded-xl ">
                  <div className="flex items-center ">
                    <span className="pr-2">{productData.rating}</span>
                    <Rating
                      name="half-rating-read"
                      value={productData.rating}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                  </div>
                  <span className=" text-md text-green-800 ">
                    {" "}
                    {productData.price} $
                  </span>
                </div>
              </div>
              <div className="w-96 pt-4 border-t mt-8 max-lg:w-80 max-lg:pt-4">
                {productData.description}
              </div>
              <div className=" flex justify-center mt-6 ">
                <Button
                  onClick={handleAddInCart}
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
