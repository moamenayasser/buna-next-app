import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Link from "next/link";

// install Virtual module
SwiperCore.use([Navigation]);
const BoxWrapper = styled("div")(({ theme }) => ({
  backgroundImage: `url(${"/images/about-sec.jpg"})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left",
  paddingTop: "100px",
  paddingBottom: "100px",
  backgroundSize: "40% 100%",
  padding: "90px",
  position: "relative",
  "&:before": {
    content: "''",
    position: "absolute",
    left: "0",
    top: "45px",
    width: "100%",
    height: "90%",
    background: "#000",
    zIndex: "-1",
  },
  "& .projectName": {
    position: "absolute",
    background: "#000",
    color: "#fff",
    bottom: "-100px",
    width: "100%",
    padding: "20px",
    transition: "0.3s",
    fontFamily: "sans-serif",
    "&:hover": {
      background: "#0b594f",
    },
  },
  "& .swiper-slide:hover .projectName": {
    bottom: "0",
  },
}));

export default function HomeProjects() {
  return (
    <>
      <BoxWrapper>
        <Container maxWidth="lg">
          <Grid item xs sx={{ position: "relative" }}>
            <Typography
              component="p"
              variant="p"
              align="left"
              color="text.primary"
              fontWeight="400"
              gutterBottom
              sx={[
                {
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    left: "0",
                    top: "5px",
                    width: "60px",
                    height: "2px",
                    backgroundColor: "#0b594f",
                  },
                  color: "#0b594f",
                  pl: "70px",
                  fontFamily: "sans-serif",
                },
              ]}
            >
              OUR BEST PROJECTS
            </Typography>

            <Typography
              component="h1"
              variant="h4"
              align="left"
              color="text.primary"
              fontWeight="600"
              gutterBottom
              sx={{ color: "#fff", paddingTop: "20px", mb: "40px" }}
            >
              Our Featured Services <br /> Interior Design Transformations
            </Typography>
          </Grid>
        </Container>
        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={10}
          navigation={true}
          grabCursor={true}
        >
          <SwiperSlide>
            <Image
              src="/images/01.jpg"
              alt="About Company"
              width={600}
              height={800}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <Box
              className="projectName"
              mt={5}
              display="flex"
              justifyContent="center"
            >
              <Link href="#">SUMOU TOWER</Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/02.jpg"
              alt="About Company"
              width={600}
              height={800}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <Box
              className="projectName"
              mt={5}
              display="flex"
              justifyContent="center"
            >
              <Link href="#">SUMOU TOWER</Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/03.jpg"
              alt="About Company"
              width={600}
              height={800}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <Box
              className="projectName"
              mt={5}
              display="flex"
              justifyContent="center"
            >
              <Link href="#">SUMOU TOWER</Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/01.jpg"
              alt="About Company"
              width={600}
              height={800}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <Box
              className="projectName"
              mt={5}
              display="flex"
              justifyContent="center"
            >
              <Link href="#">SUMOU TOWER</Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/02.jpg"
              alt="About Company"
              width={600}
              height={800}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <Box
              className="projectName"
              mt={5}
              display="flex"
              justifyContent="center"
            >
              <Link href="#">SUMOU TOWER</Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/03.jpg"
              alt="About Company"
              width={600}
              height={800}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <Box
              className="projectName"
              mt={5}
              display="flex"
              justifyContent="center"
            >
              <Link href="#">SUMOU TOWER</Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/01.jpg"
              alt="About Company"
              width={600}
              height={800}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <Box
              className="projectName"
              mt={5}
              display="flex"
              justifyContent="center"
            >
              <Link href="#">SUMOU TOWER</Link>
            </Box>
          </SwiperSlide>
        </Swiper>
      </BoxWrapper>
    </>
  );
}
