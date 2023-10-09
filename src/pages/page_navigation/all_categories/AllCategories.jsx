import React from "react";
import smartphone from "../../../assets/smartphones.jpg";
import laptop from "../../../assets/laptop.png";
import furniture from "../../../assets/furniture.jpg";
import fragrance from "../../../assets/fragrance.jpg";
import decor from "../../../assets/decor.jpg";
import "./all_categories.css";
import { Link } from "react-router-dom";

function AllCategories() {
  return (
    <>
      <div className="ml-12 flex justify-start">
        <p className="text-3xl">All Categories</p>
      </div>
      <div className="flex flex-wrap items-center ml-8  p-5">
        <Link to="/products/smartphones">
          <div>
            <img className="" src={smartphone} />
            <p>Smartphones</p>
          </div>
        </Link>
        <Link to="/products/laptops">
          <div>
            <img className="" src={laptop} />
            <p>Laptops</p>
          </div>
        </Link>
        <Link to="/products/furniture">
          <div>
            <img className="" src={furniture} />
            <p>Furnitures</p>
          </div>
        </Link>
        <Link to="/products/fragrances">
          <div>
            <img className="" src={fragrance} />
            <p>Fragrances</p>
          </div>
        </Link>
        <Link to="/products/home-decoration">
          <div>
            <img className="" src={decor} />
            <p>Home Decoration</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default AllCategories;
