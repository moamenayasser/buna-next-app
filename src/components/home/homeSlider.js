// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Keyboard, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// Component
import SliderItem from "../sliderItem";


const bannerData = [
  {
    "id": 1,
    "img": {
      "width": 1900,
      "height": 600,
      "url": "/images/01.jpg"
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
      "url": "/images/02.jpg"
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
      "url": "/images/03.jpg"
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
    <Swiper className="main-slider"
      modules={[Navigation, Pagination, EffectFade, Keyboard, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      effect={"fade"}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
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
