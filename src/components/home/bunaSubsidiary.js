// Internal Imports
import Image from "next/image";
import Link from "next/link";
// MUI
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// Component
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
    backgroundColor: '#fff',

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

const BunaSubsidiary = () => {

  return (
    <Box pt={10} pb={10} bgcolor="#F5F5F5" position="relative">
      <Container>

        <Stack mb={3} position="relative" textAlign="center" sx={{
            "&:before": {
                content: '""',
                position: 'absolute',
                display: 'block',
                width: "50px",
                height: '3px',
                backgroundColor: '#10584d',
                top: "-6px",
                transform: 'translateY(-50%)',
                left: '50%'
            }
        }}>
            <Typography component="h1" variant="h2" color="primary" pt={1} pb={3}>BUNA SUBSIDIARIES</Typography>
        </Stack>


        <Grid container spacing={3} mb={1} mt={2} justifyContent="center">
          {subsidImg?.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Link href="/">
                <CardBox>
                  <div className="card-img" style={{ marginTop: '15px', marginBottom: '20px' }}>
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={150}
                      height={150}
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                        margi: 'auto'
                      }}
                    />
                  </div>

                  <div className="card-content">
                    <Typography component="h3" variant="h4" color="primary" mb={2}>{item.name}</Typography>
                    <Typography component="p" variant="p" mb={2}>{item.desc}</Typography>
                  </div>
                </CardBox>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
      <SideTitle title="Buna" />
    </Box>
  );
};
export default BunaSubsidiary;
