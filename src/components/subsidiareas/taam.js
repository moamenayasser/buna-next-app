// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
// Internal Imports
import Image from "next/image";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Keyboard, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const bannerData = [
  {
    id: 1,
    url: "/images/04.jpg",
    title_en: "BUNA | CONSTRUCTION INTO A NEW FRONTIER",
  },
  {
    id: 2,
    url: "/images/05.webp",
    title_en: "BUNA | CONSTRUCTION INTO A NEW FRONTIER",
  },
  {
    id: 3,
    url: "/images/about-sec.jpg",
    title_en: "BUNA | CONSTRUCTION INTO A NEW FRONTIER",
  },
];
const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  "& .thumbnail1": {
    position: "relative",
    maxWidth: "max-content",
    zIndex: 1,

    "&:after": {
      position: "absolute",
      content: '""',
      border: "3px solid #10584d",
      height: "100%",
      width: "100%",
      left: "30px",
      top: "30px",
      zIndex: -1,
    },
  },

  [theme.breakpoints.down("md")]: {
    "& img": {
      width: "100%",
      height: "300px",
    },
    "& .thumbnail1": {
      position: "relative",
      maxWidth: "100%",

      "&:after": {
        left: "10px",
      },
    },
    "& .thumbnail2": {
      display: "none",
    },
  },
}));

const Taam = () => {
  return (
    <Box pt={4} pb={10}>
      <Container>
        <Swiper
          className="main-slider"
          modules={[Navigation, EffectFade, Keyboard, Autoplay]}
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
                <Image
                  src={el.url}
                  alt={el.title_en}
                  width={1800}
                  height={500}
                  priority
                  style={{ width: "100%", height: "70vh", objectFit: "cover" }}
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <h4 className="inner-subtitle">TAAM Contraction</h4>

        <Grid container spacing={3} display="flex">
          <Grid item xs={12} md={4}>
            <ul className="inner-list">
              <li>
                <span>Commercial & Residential Projects.</span>
              </li>
              <li>
                <span>Housing Projects.</span>
              </li>

              <li>
                <span>Industrial & Logistics Facilities.</span>
              </li>
              <li>
                <span>Hospitality Projects.</span>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} md={4}>
            <ul className="inner-list">
              <li>
                <span>Healthcare Projects.</span>
              </li>
              <li>
                <span>Educational Facilities.</span>
              </li>
              <li>
                <span>Governmental Projects.</span>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <ImageContainer>
              <div className="thumbnail1">
                <Image
                  width={309}
                  height={119}
                  alt="complex"
                  src="/images/TAAM Logo.svg"
                  priority
                  style={{
                    objectFit: "contain",
                    boxShadow: "3px 3px 6px #c0c0c0",
                    padding: "15px",
                    backgroundColor: "#fff",
                  }}
                />
              </div>
            </ImageContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Taam;