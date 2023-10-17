import React, { useEffect } from "react";
import AllCategories from "../components/all_categories/AllCategories";
import Slider from "../components/homeSlider/Slider";

function HomePage() {
  return (
    <div>
      <Slider />
      <AllCategories />
    </div>
  );
}

export default HomePage;
