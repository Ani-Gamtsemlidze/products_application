import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./product_slider.css";
import { Carousel } from "react-responsive-carousel";

export default function ProductSlider({ imageData }) {
  const [currentIndex, setCurrentIndex] = useState();
  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img className="w-52" src={image.url} alt={image.alt} />
    </div>
  ));
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="App">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>
  );
}
