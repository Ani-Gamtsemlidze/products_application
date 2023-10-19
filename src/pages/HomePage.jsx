import React from "react";
import AllCategories from "../components/categories/AllCategories";
import HomeSlider from "../components/homeSlider/HomeSlider";

function HomePage() {
  return (
    <div>
      <HomeSlider />
      <AllCategories />
    </div>
  );
}

export default HomePage;
