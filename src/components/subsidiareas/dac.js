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
    url: "/images/banner2.webp",
    title_en: "BUNA | CONSTRUCTION INTO A NEW FRONTIER",
  },
  {
    id: 2,
    url: "/images/banner3.webp",
    title_en: "BUNA | CONSTRUCTION INTO A NEW FRONTIER",
  },
  {
    id: 3,
    url: "/images/banner4.webp",
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

const Dac = () => {
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
        <h4 className="inner-subtitle">Dac Group</h4>
        <h4 style={{ marginBottom: "15px" }}>
          Design & Build specialized contractor, With several divisions:
        </h4>

        <Grid container spacing={3} display="flex">
          <Grid item xs={12} md={4}>
            <ul className="inner-list">
              <li>
                <span>CBS MIDDLE EAST</span>Hight Tolerance Industrial Concrete
                Floors
              </li>
              <li>
                <span>KAGATEC</span> Hygienic Hexagonal Heavy-Duty Floors.
              </li>

              <li>
                <span>SHEILDTECH</span> Repair and Retrofitting works.
              </li>
              <li>
                <span>3DAC</span> Laser Scanning /BIM Modeling /Surveying
                Services.
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} md={4}>
            <ul className="inner-list">
              <li>
                <span>ASSEMBTECH</span> Special Steel Structural Erection.
              </li>
              <li>
                <span>AHEAD</span> Rush Projects.
              </li>
              <li>
                <span>DEL</span> Heavy Lifting Engineering Solutions.
              </li>
              <li>
                <span>LENTON</span> Mechanical Splices – Rebar Couplers.
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
                  src="/images/dac.png"
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

export default Dac;
