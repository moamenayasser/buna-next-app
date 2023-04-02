import Image from "next/image";
import { Box, Button, Stack, styled } from "@mui/material";
import Link from "next/link";

const SliderItem = ({ item }) => {

  const BoxStyle = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "30%",
    padding: "80px",
    zIndex: "1",
    marginLeft: "150px",
    background:"linear-gradient(45deg, #0000002b, transparent)",
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
  return (
    <>
      <Image
        src={item.img.imgUrl}
        alt={item.content.title_en}
        width={item.img.width}
        height={item.img.height}
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      />

      <BoxStyle className="content">
        <div className="title" data-swiper-parallax="-300">
          {item.content.title_en}
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
          {item.content.subTitle_en}
        </div>
        <div className="text" data-swiper-parallax="-100">
          {item.content.disc_en}
        </div>
        <Stack
          display="flex"
          justifyContent="flex-start"
          gap="15px"
          flexDirection="row"
          mt={4}
        >
          <Link href="/">
            <Button
              variant="outlined"
              color="primary"
              mt={8}
              sx={{
                color: "#fff",
                backgroundColor: "#0b594f",
                boxShadow: "0px 14px 24px 0px #d7282b3d",
                border: "none",
                padding: "15px 30px",
                borderRadius:"0",
                "&:hover": {
                  color: "#000",
                  backgroundColor: "#fff",
                  boxShadow: "unset",
                  border:"none"
                },
              }}
            >
              About us
            </Button>
          </Link>
        </Stack>
      </BoxStyle>
    </>
  );
};

export default SliderItem;
