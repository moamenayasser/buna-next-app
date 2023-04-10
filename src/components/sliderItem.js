// Internal Imports
import Image from "next/image";
import Link from "next/link";
// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled, Typography } from "@mui/material";


const BoxStyle = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "0",
  display: 'flex',
  alignItems: "center",
  padding: "0 200px",
  // zIndex: "1",

  "& .content": {
    position: 'relative',
    padding: '30px',
    background: "#F5F5F5",
    animation: 'slideInLeft 0.8s linear',
    "& :before": {
      content: '""',
      position: "absolute",
      display: 'block',
      left: "0",
      top: "0",
      width: "5px",
      height: "100%",
      backgroundColor: theme.palette.secondary.main,
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
          <Typography component="h1" variant="h1">
            {item.title_en}
          </Typography>
          <Typography component="p" variant="body1">
            {item.desc_en}
          </Typography>
          <Stack display="flex" justifyContent="flex-start" gap="15px" flexDirection="row" mt={4}>
              <Button component={Link} href="/" variant="contained" color="primary" mt={8}>
                About us
              </Button>
          </Stack>
        </div>
      </BoxStyle>

    </>
  );
};

export default SliderItem;
