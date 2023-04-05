// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";
import SliderItem from "../sliderItem";
import { EffectCreative } from "swiper";

const bannerData = [
  {
    "id": 1,
    "img": {
      "width": 1900,
      "height": 600,
      "imgUrl": "/images/01.jpg"
    },
    "desc_ar": " العماره الداخليه واهميتها  العماره الداخليه واهميتها .",
    "desc_en": " Inoterior design consultancy firm that brings sensitivity to the design top restaurants.",
    "title_ar": "العماره الداخليه واهميتها ",
    "title_en": "  inovate your home",
    "subTitle_ar": "العماره الداخليه واهميتها ",
    "subTitle_en": "  inovate your home"
  },
  {
    "id": 2,
    "img": {
      "width": 1900,
      "height": 600,
      "imgUrl": "/images/02.jpg"
    },
    "desc_ar": " العماره الداخليه واهميتها  العماره الداخليه واهميتها .",
    "desc_en": " Inoterior design consultancy firm that brings sensitivity to the design top restaurants.",
    "title_ar": "العماره الداخليه واهميتها ",
    "title_en": "  inovate your home",
    "subTitle_ar": "العماره الداخليه واهميتها ",
    "subTitle_en": "  inovate your home"
  },
  {
    "id": 3,
    "img": {
      "width": 1900,
      "height": 600,
      "imgUrl": "/images/03.jpg"
    },
    "desc_ar": " العماره الداخليه واهميتها  العماره الداخليه واهميتها .",
    "desc_en": " Inoterior design consultancy firm that brings sensitivity to the design top restaurants.",
    "title_ar": "العماره الداخليه واهميتها ",
    "title_en": "  inovate your home",
    "subTitle_ar": "العماره الداخليه واهميتها ",
    "subTitle_en": "  inovate your home"
  }
]

const HomeSlider = () => {
  return (
    <Swiper
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
      loop={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {bannerData?.length !== 0 &&
        bannerData?.map((el) => (
          <SwiperSlide key={el.id}>
            <SliderItem item={el} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default HomeSlider;
