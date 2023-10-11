import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../inner_slider/innerslider.css";
import { Carousel } from "react-responsive-carousel";

export default function InnerSlider({ imageData }) {
  const [currentIndex, setCurrentIndex] = useState();
  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img className="w-52" src={image.url} alt={image.alt} />
      {/* <p className="legend">{image.label}</p> */}
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
