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
      <div className=" p-10 ">
        <div className=" flex ml-18">
          <p className="text-4xl">All Categories</p>
        </div>
        <div className="flex flex-wrap mt-10 justify-center ">
          <div>
            <Link to="/products/smartphones">
              <img className="" src={smartphone} />
              <p>Smartphones</p>
            </Link>
          </div>
          <div>
            <Link to="/products/laptops">
              <img className="" src={laptop} />
              <p>Laptops</p>
            </Link>
          </div>
          <div>
            <Link to="/products/furniture">
              <img className="" src={furniture} />
              <p>Furnitures</p>
            </Link>
          </div>
          <div>
            <Link to="/products/fragrances">
              <img className="" src={fragrance} />
              <p>Fragrances</p>
            </Link>
          </div>
          <div>
            <Link to="/products/home-decoration">
              <img className="" src={decor} />
              <p>Home Decoration</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCategories;
