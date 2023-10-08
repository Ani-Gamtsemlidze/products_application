import React, { useEffect } from "react";
import { useState } from "react";
import AllCategories from "../../components/AllCategories";
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
