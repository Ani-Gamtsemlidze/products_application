import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./slider.css";
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    className="image-box"
    src={img1}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="image-box"
    src={img2}
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

const Gallery = () => {
  return <AliceCarousel mouseTracking items={items} />;
};

function Slider() {
  return (
    <div>
      <Gallery />
    </div>
  );
}

export default Slider;
