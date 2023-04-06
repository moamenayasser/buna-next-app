// MUI
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// Internal Imports
import Image from "next/image";
import Link from "next/link";
import InnerTitle from "../InnerTitle";
import { SideTitle } from "../SideTitle";

const CardBox = styled(Box)(({ theme }) => ({
  borderRadius: 0,
  border: '1px solid #e7e5e5',
  textAlign: 'center',
  padding: '10px',
  position: 'relative',
  boxShadow: '1px 5px 5px #eee',

  "&:before , &:after": {
    boxSizing: 'inherit',
    zIndex: '-1',
    content: '""',
    position: 'absolute',
    border: '2px solid transparent',
    width: 0,
    height: 0,
  },
  "&:before": {
    top: 0,
    left: 0
  },
  "&:after": {
    bottom: 0,
    right: 0
  },

  "&:hover": {
    animation: 'jump1 5s linear infinite',

    "&:before , &:after": {
      width: '100%',
      height: '100%',
      display: 'block',
      transition: 'width 0.25s ease-out, height 0.25s ease-out 0.25s'
    },
    "&:before": {
      borderTopColor: theme.palette.secondary.main,
      borderRightColor: theme.palette.secondary.main,
    },
    "&:after": {
      borderBottomColor: theme.palette.secondary.main,
      borderLeftColor: theme.palette.secondary.main,
    },
  },

  "& .card-img": {
    position: 'relative',
    width: '200px',
    height: '120px',
    display: 'block',
    margin: 'auto',
    padding: '15px',
  },
}));

const subsidImg = [
  {
    id: 1,
    img: "/images/align-management.png",
    name: "Alignment Management",
    desc: "Cursus euismod dictumst a non dis nisi sociosqu mauris."
  },
  {
    id: 2,
    img: "/images/TAAM Logo.svg",
    name: "Taam Group",
    desc: "Cursus euismod dictumst a non dis nisi sociosqu mauris."
  },
  {
    id: 3,
    img: "/images/dac.png",
    name: "Dac Group",
    desc: "Cursus euismod dictumst a non dis nisi sociosqu mauris."
  },
  {
    id: 4,
    img: "/images/BUNA-LOGO-black.png",
    name: "Buna Group",
    desc: "Cursus euismod dictumst a non dis nisi sociosqu mauris."
  },
];

const ContactSec = () => {

  return (
    <Box pt={10} pb={10} bgcolor="#F5F5F5" position="relative">
      <Container>
        <InnerTitle title="Contact Us" align="center" color="primary" />
        <Grid container spacing={3} mb={1} mt={2} justifyContent="center">
          {subsidImg?.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Link href="/">
                
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
      <SideTitle title="Contact" />
    </Box>
  );
};
export default ContactSec;
