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

const ContactBox = styled(Box)(({ theme }) => ({
  "& .card-box": {
    borderRadius: 0,
    border: '1px solid #e7e5e5',
    padding: '10px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
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
      width: '100px',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5px',
    },
  },

  "& .form-container": {
    position: 'relative',

    "& form": {
      backgroundColor: '#fff',
      padding: '80px 50px',
    },
    "& .form-border": {
      position: 'relative',
      maxWidth: 'max-content',
      zIndex: 1,

      "&:after": {
        position: 'absolute',
        content: '""',
        border: '3px solid #10584d',
        height: '100%',
        width: '100%',
        right: '30px',
        top: '30px',
        zIndex: -1,
      }
    },
    [theme.breakpoints.down('md')]: {
      "& .form-border": {
        position: 'relative',
        maxWidth: '100%',

        "&:after": {
          display: 'none',
        }
      },
    }
  }
}));


const ContactSec = ({ locale }) => {
  return (
    <ContactBox mt={10} pt={10} pb={10} bgcolor="#F5F5F5" position="relative" sx={{ backgroundImage: `url(${dots.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom left' }}>
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
          <Typography component="h1" variant="h2" color="primary" pt={1} pb={3}>Contact Us</Typography>
        </Stack>

        <Grid container spacing={3} mb={1} mt={2} justifyContent="center">
          <Grid item xs={12} md={6} justifyContent="center">

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={12} lg={6}>
                <Link href="/">
                  <Box className="card-box" flexDirection={{ xs: 'column', md: 'row' }}>
                    <div className="card-img">
                      <Image src="/images/address.svg" alt="Address" width={50} height={50} />
                    </div>
                    <div className="card-content">
                      <Typography component="h3" variant="h4" color="primary" mb={2}>Address</Typography>
                      <Typography component="p" variant="p" mb={2}>
                        SUMOU Tower, King Abdulaziz Road,
                        2nd Floor, Office 206
                      </Typography>
                    </div>
                  </Box>
                </Link>
              </Grid>

              <Grid item xs={12} sm={6} md={12} lg={6}>
                <Link href="/">
                  <Box className="card-box" flexDirection={{ xs: 'column', md: 'row' }}>
                    <div className="card-img">
                      <Image src="/images/pb-box.svg" alt="Po-box" width={50} height={50} />
                    </div>
                    <div className="card-content">
                      <Typography component="h3" variant="h4" color="primary" mb={2}>P.O Box</Typography>
                      <Typography component="p" variant="p" mb={2}>
                        P.O Box Jeddah 23613, K.S.A
                      </Typography>
                    </div>
                  </Box>
                </Link>
              </Grid>

              <Grid item xs={12} sm={6} md={12} lg={6}>
                <Link href="/">
                  <Box className="card-box" flexDirection={{ xs: 'column', md: 'row' }}>
                    <div className="card-img">
                      <Image src="/images/phone.svg" alt="Phone" width={50} height={50} />
                    </div>
                    <div className="card-content">
                      <Typography component="h3" variant="h4" color="primary" mb={2}>Phone number</Typography>
                      {/* <Link href="tel:+966126586686">
                        <Typography component="p" variant="p" mb={2}>
                          +966 12 658 6686
                        </Typography>
                      </Link> */}
                    </div>
                  </Box>
                </Link>
              </Grid>

              <Grid item xs={12} sm={6} md={12} lg={6}>
                <Link href="/">
                  <Box className="card-box" flexDirection={{ xs: 'column', md: 'row' }}>
                    <div className="card-img">
                      <Image src="/images/email.svg" alt="Email" width={50} height={50} />
                    </div>
                    <div className="card-content">
                      <Typography component="h3" variant="h4" color="primary" mb={2}>Email</Typography>
                      {/* <Link href="mailto:info@buna.sa">
                        <Typography component="p" variant="p" mb={2}>
                          info@buna.sa
                        </Typography>
                      </Link> */}
                    </div>
                  </Box>
                </Link>
              </Grid>

              <Grid item xs={12} sm={6} md={12} lg={6}>
                <Link href="/">
                  <Box className="card-box" flexDirection={{ xs: 'column', md: 'row' }}>
                    <div className="card-img">
                      <Image src="/images/fax.svg" alt="Fax" width={50} height={50} />
                    </div>
                    <div className="card-content">
                      <Typography component="h3" variant="h4" color="primary" mb={2}>Fax</Typography>
                      {/* <Link href="tel:+966126586687">
                        <Typography component="p" variant="p" mb={2}>
                          +966 12 658 6687
                        </Typography>
                      </Link> */}
                    </div>
                  </Box>
                </Link>
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={12} md={6}>
            <Box className="form-container" paddingLeft={{ xs: 0, md: 5 }}>
              <div className="form-border">
                <ContactForm />
              </div>
            </Box>
          </Grid>
        </Grid>

      </Container>
      <SideTitle title="Contact" />
    </ContactBox>
  );
};
export default ContactSec;
