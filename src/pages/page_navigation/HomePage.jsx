import React, { useEffect } from "react";
import AllCategories from "./all_categories/AllCategories";
import Slider from "../../components/homeSlider/Slider";
import Swiper from "swiper";

function HomePage() {
  return (
    <div>
      {/* <Swiper /> */}
      <Slider />
      <AllCategories />
    </div>
  );
}

export default HomePage;
