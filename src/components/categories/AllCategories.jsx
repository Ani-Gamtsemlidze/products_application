import React, { useContext } from "react";
import smartphone from "../../assets/smartphones.jpg";
import laptop from "../../assets/laptop.png";
import furniture from "../../assets/furniture.jpg";
import fragrance from "../../assets/fragrance.jpg";
import decor from "../../assets/decor.jpg";
import "./all_categories.css";
import { Link } from "react-router-dom";

function AllCategories() {
  return (
    <>
      <div className=" categories_box p-10 max-lg:p-6 bg-gray-100 ">
        <div className=" items-center flex ml-18">
          <p className="text-4xl">All Categories</p>
        </div>
        <div className="flex max-lg:justify-between flex-wrap pt-10 max-lg:pt-4 ">
          <div className=" image_box	">
            <Link to="/products/smartphones">
              <img className="slides" src={smartphone} />
              <h2>Smartphones</h2>
            </Link>
          </div>
          <div className=" image_box	">
            <Link to="/products/laptops">
              <img className="slides" src={laptop} />
              <h2>Laptops</h2>
            </Link>
          </div>
          <div className="image_box	">
            <Link to="/products/furniture">
              <img className="slides" src={furniture} />
              <h2>Furnitures</h2>
            </Link>
          </div>
          <div className="image_box	">
            <Link to="/products/fragrances">
              <img className="slides" src={fragrance} />
              <h2>Fragrances</h2>
            </Link>
          </div>
          <div className="image_box	">
            <Link to="/products/home-decoration">
              <img className="slides" src={decor} />
              <h2>Home Decoration</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCategories;
