import React from "react"; // Import React if not already imported
import SwiperCore, { Swiper } from "swiper"; // Import Swiper components
import "swiper/swiper-bundle.min.css"; // Import Swiper styles

// Import your images
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

// Initialize Swiper
SwiperCore.use([]);

function Swiper() {
  return (
    <Swiper
      slidesPerView={3}
      grid={{ rows: 3 }}
      mousewheel={{ forceToAxis: true }}
    >
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src={image1} loading="lazy" alt="Image 1" />
        </div>
        <div className="swiper-slide">
          <img src={image2} loading="lazy" alt="Image 2" />
        </div>
        <div className="swiper-slide">
          <img src={image3} loading="lazy" alt="Image 3" />
        </div>
      </div>
    </Swiper>
  );
}

export default Swiper;
