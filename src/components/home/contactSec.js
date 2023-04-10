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
import ContactForm from "../ContactForm";
import { SideTitle } from "../SideTitle";
// Image
import dots from '../../../public/images/dot-corner.png'
import InnerTitle from "../InnerTitle";

const ContactBox = styled(Box)(({ theme }) => ({
  "& .card-box": {
    borderRadius: 0,
    border: '1px solid #e7e5e5',
    padding: '10px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0',
    color: '#fff',

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
      top: '-1px',
      left: 2
    },
    "&:after": {
      bottom: "-1px",
      right: 2
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
      width: '100px',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5px',
    },
  },

}));


const ContactSec = ({ locale }) => {
  return (
    <ContactBox mt={10} pt={10} pb={10} bgcolor="#000" position="relative" sx={{ backgroundImage: `url(${dots.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom left' }}>
      <Container>
        <InnerTitle title="Contact Us" color="#fff" />

        <Grid container spacing={3} mb={1} mt={2} justifyContent="center">
          <Grid item xs={6} sm={6} md={4}>
            <Box className="card-box" flexDirection={{ xs: 'column', md: 'row' }}>
              <div className="card-img">
                <Image src="/images/address.svg" alt="Address" width={50} height={50} />
              </div>
              <div className="card-content">
                <Typography component="h3" variant="h4" color="#fff" mb={1}>Address</Typography>
                <Typography component="p" variant="p" mb={2}>
                  SUMOU Tower, King Abdulaziz Road,
                  2nd Floor, Office 206
                </Typography>
              </div>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={4}>
            <Box className="card-box" flexDirection={{ xs: 'column', md: 'row' }}>
              <div className="card-img">
                <Image src="/images/pb-box.svg" alt="Po-box" width={50} height={50} />
              </div>
              <div className="card-content">
                <Typography component="h3" variant="h4" color="#fff" mb={2}>P.O Box</Typography>
                <Typography component="p" variant="p" mb={2}>
                  P.O Box Jeddah 23613, K.S.A
                </Typography>
              </div>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={4}>
            <Box className="card-box" flexDirection={{ xs: 'column', md: 'row' }}>
              <div className="card-img">
                <Image src="/images/phone.svg" alt="Phone" width={50} height={50} />
              </div>
              <div className="card-content">
                <Typography component="h3" variant="h4" color="#fff" mb={2}>Phone number</Typography>
                <Link href="tel:+966126586686">
                  <Typography component="p" variant="p" mb={2}>
                    +966 12 658 6686
                  </Typography>
                </Link>
              </div>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={4}>
            <Box className="card-box" flexDirection={{ xs: 'column', md: 'row' }}>
              <div className="card-img">
                <Image src="/images/email.svg" alt="Email" width={50} height={50} />
              </div>
              <div className="card-content">
                <Typography component="h3" variant="h4" color="#fff" mb={2}>Email</Typography>
                <Link href="mailto:info@buna.sa">
                  <Typography component="p" variant="p" mb={2}>
                    info@buna.sa
                  </Typography>
                </Link>
              </div>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={4}>
            <Box className="card-box" flexDirection={{ xs: 'column', md: 'row' }}>
              <div className="card-img">
                <Image src="/images/fax.svg" alt="Fax" width={50} height={50} />
              </div>
              <div className="card-content">
                <Typography component="h3" variant="h4" color="#fff" mb={2}>Fax</Typography>
                <Link href="tel:+966126586687">
                  <Typography component="p" variant="p" mb={2}>
                    +966 12 658 6687
                  </Typography>
                </Link>
              </div>
            </Box>
          </Grid>

          {/* <Grid item xs={12} md={6}>
            <Box className="form-container" paddingLeft={{ xs: 0, md: 5 }}>
              <div className="form-border">
                <ContactForm />
              </div>
            </Box>
          </Grid> */}
        </Grid>

      </Container>
      <SideTitle title="Contact" />
    </ContactBox>
  );
};
export default ContactSec;
