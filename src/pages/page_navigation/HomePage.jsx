import React, { useEffect } from "react";
import AllCategories from "./all_categories/AllCategories";
import Slider from "../../components/homeSlider/Slider";

function HomePage() {
  return (
    <div>
      <Slider />
      <AllCategories />
    </div>
  );
}

export default HomePage;
