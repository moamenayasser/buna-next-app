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
    "url": "/images/01.jpg",
    "desc_ar": "مقاول عام رائد ومنظمة خدمات إدارة البناء ،وإحدى شركات سمو القابضة",
    "desc_en": "A leading general contractor and construction management services organization, and a subsidiary of Sumou Holding",
    "title_ar": "بونا | البناء في جبهة جديدة",
    "title_en": "BUNA | CONSTRUCTION INTO A NEW FRONTIER",
    "subTitle_ar": "بونا | البناء في جبهة جديدة",
    "subTitle_en": "BUNA | CONSTRUCTION INTO A NEW FRONTIER"
  },
  {
    "id": 2,
    "url": "/images/02.jpg",
    "desc_ar": "مقاول عام رائد ومنظمة خدمات إدارة البناء ،وإحدى شركات سمو القابضة",
    "desc_en": "A leading general contractor and construction management services organization, and a subsidiary of Sumou Holding",
    "title_ar": "بونا | البناء في جبهة جديدة",
    "title_en": "BUNA | CONSTRUCTION INTO A NEW FRONTIER",
    "subTitle_ar": "بونا | البناء في جبهة جديدة",
    "subTitle_en": "BUNA | CONSTRUCTION INTO A NEW FRONTIER"
  },
  {
    "id": 3,
    "url": "/images/03.jpg",
    "desc_ar": "مقاول عام رائد ومنظمة خدمات إدارة البناء ،وإحدى شركات سمو القابضة",
    "desc_en": "A leading general contractor and construction management services organization, and a subsidiary of Sumou Holding",
    "title_ar": "بونا | البناء في جبهة جديدة",
    "title_en": "BUNA | CONSTRUCTION INTO A NEW FRONTIER",
    "subTitle_ar": "بونا | البناء في جبهة جديدة",
    "subTitle_en": "BUNA | CONSTRUCTION INTO A NEW FRONTIER"
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
