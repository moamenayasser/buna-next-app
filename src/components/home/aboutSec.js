// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
// Internal Imports
import Image from 'next/image'
import Link from "next/link";
import InnerTitle from "../InnerTitle";

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
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
  "& .thumbnail2": {
    position: 'absolute',
    top: '80px',
    right: 0,
    zIndex: 2,
    "& img": {
      border: '10px solid #fff',
      animation: 'jump2 5s linear infinite',
    }
  },
  [theme.breakpoints.down('md')]: {
    "& img": {
      width: '100%',
      height: '300px',
    },
    "& .thumbnail1": {
      position: 'relative',
      maxWidth: '100%',

      "&:after": {
        left: '10px',
      }
    },
    "& .thumbnail2": {
      display: 'none',
    }
  },
  [theme.breakpoints.down('sm')]: {
    "& .thumbnail1": {
      "&:after": {
        display: 'none',
      }
    },
  }
}));


const AboutSec = () => {
  return (
    <Box pt={10} pb={10}>
      <Container>
        <Grid container spacing={3} display='flex'>
          <Grid item xs={12} md={6}>
            <InnerTitle title="WHO WE ARE ?" align="left" />
            <p>
              BUNA is a Leading General Contractor & Construction Management Services
              Organization in Saudi Arabia & a subsidiary of SUMOU Holding.

            </p>
            {/* <p>
            Specializing in mixed use and high-rise buildings, BUNA’s visionary team of highly professional engineers and experts provide long-term, cost-effective and efficient solutions to clients, meeting all safety and quality requirements. Equipped with top quality modern technology, led by the highest of calibers in the market.
            </p> */}
            <h4 className="inner-subtitle">
              BUNA Subsidiaries are:
            </h4>
            <ul className="inner-list">
              <li>
                <span>ALIGN Management</span>
              </li>
              <li>
                <span>BCT Contracting</span>
              </li>
              <li>
                <span>TAAM </span>
              </li>
              <li>
                <span>DAC Group</span>
              </li>
            </ul>
//             <InnerTitle title="WHY BUNA ?" align="left" />
            <p>
              BUNA is offering wide range of technical services leaded by a group of highly
              qualified team, whose expertise in engineering projects covering all major
              disciplines of construction management.

            </p><br></br>
            <Button component={Link} href="/" variant="contained">
              Learn More
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <ImageContainer>
              <div className="thumbnail1">
                <Image
                  width={450}
                  height={500}
                  alt="complex"
                  src="/images/aboutSec.jpg"
                  priority
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className="thumbnail2">
                <Image
                  width={450}
                  height={500}
                  alt="complex"
                  src="/images/01.jpg"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </ImageContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSec;
