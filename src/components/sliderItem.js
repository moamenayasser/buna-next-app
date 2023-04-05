// Internal Imports
import Image from "next/image";
import Link from "next/link";
// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {styled } from "@mui/material";


const BoxStyle = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "30%",
  padding: "80px",
  zIndex: "1",
  marginLeft: "150px",
  background: "linear-gradient(45deg, #0000002b, transparent)",
  "& :before": {
    content: '""',
    position: "absolute",
    left: "0",
    top: "0",
    width: "5px",
    height: "100%",
    backgroundColor: "#fff",
  },
  "& .title": {
    color: "#fff",
    fontSize: "5rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "sans-serif",
  },
  "& .subtitle": {
    color: "#fff",
    fontSize: "1.8rem",
    marginBottom: theme.spacing(3),
    fontFamily: "sans-serif",
  },
  "& .text": {
    maxWidth: "500px",
    color: "#ebebeb",
    fontWeight: "300",
    fontFamily: "sans-serif",
  },
}));



const SliderItem = ({ item }) => {
  return (
    <>
      <Image
        src={item.img.imgUrl}
        alt={item.title_en}
        width={item.img.width}
        height={item.img.height}
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      />

      <BoxStyle className="content">
        <div className="title" data-swiper-parallax="-300">
          {item.title_en}
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
          {item.subTitle_en}
        </div>
        <div className="text" data-swiper-parallax="-100">
          {item.desc_en}
        </div>
        <Stack display="flex" justifyContent="flex-start" gap="15px" flexDirection="row" mt={4}>
          <Link href="/">
            <Button variant="outlined" color="primary" mt={8}>
              About us
            </Button>
          </Link>
        </Stack>
      </BoxStyle>
    </>
  );
};

export default SliderItem;
