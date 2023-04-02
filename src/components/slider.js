import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const MainSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return (
      <div style={{ height: "100vh" }}>
        <Slider {...settings}>
          <div>
            <Image
              src="https://source.unsplash.com/random"
              alt="About Company"
              width={100}
              height={100}
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <Image
              src="https://source.unsplash.com/random"
              alt="About Company"
              width={100}
              height={100}
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            />
          </div>
        </Slider>
      </div>
    );
};

export default MainSlider;
