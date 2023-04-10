// Internal Imports
import Image from "next/image";
import Link from "next/link";
// MUI
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Component
import { SideTitle } from "../SideTitle";
// Image
import dots from '../../../public/images/dot-corner.png'
import InnerTitle from "../InnerTitle";


const ContactBox = styled(Box)(({ theme }) => ({
  "& .card-box": {
    borderRadius: 0,
    border: '1px solid #e7e5e5',
    padding: '20px 10px',
    gap: '10px',
    height: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '1px 5px 5px #eee',
    color: '#000',

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

    "& .link-btn": {
      display: 'inline-block',
      marginTop: '5px',
      position: 'relative',
      paddingBottom: '1px',
      marginBottom: '-1px',
      borderBottom: '1px solid #0000004a',
      color: '#000',
      fontSize: '14px',
      fontWeight: 600,

      "&:before": {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: '-1px',
        width: 0,
        height: '1px',
        backgroundColor: theme.palette.secondary.main,
        transition: 'all ease 0.4s',
      },

      "&:hover": {
        color: theme.palette.secondary.main,
        "&:before": {
          width: '100%'
        }
      }
    },

    "& .card-img": {
      position: 'relative',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5px',
    },
  },
  "& .thumbnail1": {
    position: 'relative',
    maxWidth: 'max-content', 
    zIndex: 1,

    "&:after": {
      position: 'absolute',
      content: '""',
      border: '3px solid #10584d',
      height: '100%',
      width: '100%',
      left: '30px',
      top: '30px',
      zIndex: -1,
    }
  },
}));


const ContactSec = ({ locale }) => {
  return (
    <ContactBox mt={10} pt={10} pb={10}  position="relative" sx={{ backgroundImage: `url(${dots.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom left' }}>
      <Container>
        
        <Grid container spacing={3} >
          <Grid item xs={12} md={7}>
            <InnerTitle title="Contact Us" color="#000" />
            <Grid container spacing={3} mb={1} mt={2} justifyContent="center">
              <Grid item xs={12} sm={12} md={12}>
                <Box className="card-box" flexDirection={{ xs: 'column', sm: 'row', md: 'row' }}>
                  <div className="card-img">
                    <Image src="/images/address.svg" alt="Address" width={50} height={50} />
                  </div>
                  <div className="card-content">
                    <Typography component="h3" variant="h4" color="#000" mb={1}>Address</Typography>
                    <Typography component="p" variant="p" mb={1}>
                      SUMOU Tower, King Abdulaziz Road,
                      2nd Floor, Office 206
                    </Typography>
                    <Link href="https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D8%B3%D9%85%D9%88+%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%D8%A9%E2%80%AD/@21.6552046,39.1126746,17z/data=!3m1!4b1!4m6!3m5!1s0x15c3d975b69b19ed:0xa4e902d50c145dc0!8m2!3d21.6551996!4d39.1104859!16s%2Fg%2F11bwqp_zp7" className="link-btn" target="_blank" rel="noopener">
                      View on google map
                    </Link>
                  </div>
                </Box>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Box className="card-box" flexDirection={{ xs: 'column', sm: 'row', md: 'row' }}>
                  <div className="card-img">
                    <Image src="/images/pb-box.svg" alt="Po-box" width={50} height={50} />
                  </div>
                  <div className="card-content">
                    <Typography component="h3" variant="h4" color="#000" mb={1}>P.O Box</Typography>
                    <Typography component="p" variant="p" mb={1}>
                      P.O Box Jeddah 23613, K.S.A
                    </Typography>
                  </div>
                </Box>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Box className="card-box" flexDirection={{ xs: 'column', sm: 'row', md: 'row' }}>
                  <div className="card-img">
                    <Image src="/images/phone.svg" alt="Phone" width={50} height={50} />
                  </div>
                  <div className="card-content">
                    <Typography component="h3" variant="h4" color="#000" mb={1}>Phone number</Typography>
                    <Link href="tel:+966126586686">
                      <Typography component="p" variant="p" mb={1}>
                        +966 12 658 6686
                      </Typography>
                    </Link>
                  </div>
                </Box>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Box className="card-box" flexDirection={{ xs: 'column', sm: 'row', md: 'row' }}>
                  <div className="card-img">
                    <Image src="/images/email.svg" alt="Email" width={50} height={50} />
                  </div>
                  <div className="card-content">
                    <Typography component="h3" variant="h4" color="#000" mb={1}>Email</Typography>
                    <Link href="mailto:info@buna.sa">
                      <Typography component="p" variant="p" mb={1}>
                        info@buna.sa
                      </Typography>
                    </Link>
                  </div>
                </Box>
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <Box className="card-box" flexDirection={{ xs: 'column', sm: 'row', md: 'row' }}  textAlign={{ xs: 'center' , sm: locale === 'en' ? 'left' : 'right'}}>
                  <div className="card-img">
                    <Image src="/images/fax.svg" alt="Fax" width={50} height={50} />
                  </div>
                  <div className="card-content">
                    <Typography component="h3" variant="h4" color="#000" mb={1}>Fax</Typography>
                    <Link href="tel:+966126586687">
                      <Typography component="p" variant="p" mb={1}>
                        +966 12 658 6687
                      </Typography>
                    </Link>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box>
              <div className="thumbnail1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.222520337378!2d39.1104859!3d21.6551996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d975b69b19ed%3A0xa4e902d50c145dc0!2z2LTYsdmD2Kkg2LPZhdmIINin2YTYudmC2KfYsdmK2Kk!5e0!3m2!1sar!2seg!4v1681123445716!5m2!1sar!2seg" width={600} height={600} style={{border: 0 , width: '100%', height: '100%'}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full" ></iframe>
                {/* <Image
                  width={450}
                  height={500}
                  alt="complex"
                  src="/images/02.jpg"
                  style={{ objectFit: 'cover'}}
                /> */}
              </div>
            </Box>

            {/* <div className="contact-img" style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image src="/images/02.jpg" alt="image" fill style={{ objectFit: 'cover' }} />
            </div> */}
          </Grid>
        </Grid>

      </Container>
      <SideTitle title="Contact" />
    </ContactBox>
  );
};
export default ContactSec;
