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
  padding: "0 10%",
  "& .content": {
    position: 'relative',
    padding: '30px',
    display: 'block',
    width: 'calc(100vw - 40%)',
    maxWidth: '650px',
    background: "#f5f5f591",
    "&:before": {
      content: '""',
      position: "absolute",
      display: 'block',
      left: "0",
      top: "0",
      width: "5px",
      height: "100%",
      backgroundColor: theme.palette.secondary.main,
    },
  },
  [theme.breakpoints.down('md')]:{
    padding: "0 50px",
    "& .description":{
      display: 'none',
    },
    '& .content':{
      width: 'calc(100vw - 45%)',
      padding: '15px',
      "&:before":{
        display: 'none'
      }
    }
  },
}));


const SliderItem = ({ item }) => {
  return (
    <>
      <Image
        src={item.img.url}
        alt={item.title_en}
        width={item.img.width}
        height={item.img.height}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <BoxStyle width="100%" height="100%" display="flex" alignItems="center">
        <div className="content">
          <Typography component="h1" variant="h1">
            {item.title_en}
          </Typography>
          <Typography component="p" variant="body1" className="description">
            {item.desc_en}
          </Typography>
          <Stack display="flex" justifyContent="flex-start" flexDirection="row" mt={4}>
            <Button component={Link} href="/" variant="contained" color="primary">
              About us
            </Button>
          </Stack>
        </div>
      </BoxStyle>
    </>
  );
};

export default SliderItem;
