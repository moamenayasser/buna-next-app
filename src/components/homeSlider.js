// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";
import SliderItem from "./sliderItem";
import { EffectCreative } from "swiper";
const HomeSlider = (props) => {
  const { data } = props;


  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, EffectCreative]}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data?.length !== 0 &&
        data?.map((el) => (
          <SwiperSlide key={el.id}>
            <SliderItem item={el} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default HomeSlider;
