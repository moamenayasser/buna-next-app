// Internal Imports
import Image from "next/image";
import Link from "next/link";
// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";


const BoxStyle = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "0",
  display: 'flex',
  alignItems: "center",
  padding: "0 200px",
  zIndex: "1",

  "& .content": {
    position: 'relative',
    padding: '30px',
    background: "linear-gradient(90deg, #101010 2.78%, rgba(16, 16, 16, 0) 81.61%)",
    animation: 'slideInLeft 0.8s linear',
    "& :before": {
      content: '""',
      position: "absolute",
      left: "0",
      top: "0",
      width: "5px",
      height: "100%",
      backgroundColor: theme.palette.secondary.main,
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
  }
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
      <BoxStyle width="100%" height="100%" display="flex" alignItems="center">
        <div className="content">
          <div className="title" data-swiper-parallax="-300">
            {item.title_en}
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
        </div>
      </BoxStyle>

    </>
  );
};

export default SliderItem;
