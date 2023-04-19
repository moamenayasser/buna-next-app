// Internal Imports
import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/router';
// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";

const BoxStyle = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "0",
  display: 'flex',
  alignItems: "center",
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
  [theme.breakpoints.down('lg')]: {
    padding: "0 50px",
  },
  [theme.breakpoints.down('md')]: {
    "& .description": {
      display: 'none',
    },
    '& .content': {
      width: 'calc(100vw - 45%)',
      padding: '15px',
      "&:before": {
        display: 'none'
      }
    }
  },
}));


const SliderItem = ({ item }) => {
  const router = useRouter();
  const {locale} = router;

  return (
    <>
      <Image
        src={item.url}
        alt={item.title_en}
        width={1800}
        height={800}
        priority
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <Container fixed>
        <BoxStyle width="100%" height="100%" display="flex" alignItems="center">
          <div className="content">
            <Typography component="h1" variant="h3" mb={1}>
              <span style={{ fontSize: '40px' }}>BUNA</span> <br /> Construction Into A New Frontier
            </Typography>
            <Typography component="p" variant="body1" className="description" fontWeight={600}>
              {item[`desc_${locale}`]}
            </Typography>
            <Stack display="flex" justifyContent="flex-start" flexDirection="row" mt={3}>
              <Button component={Link} href="/" variant="contained">
                View Projects
              </Button>
            </Stack>
          </div>
        </BoxStyle>
      </Container>
    </>
  );
};

export default SliderItem;
