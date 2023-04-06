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
      border: '1px solid #10584d',
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
        display: 'none',
      }
    },
    "& .thumbnail2": {
      display: 'none',
    }
  }
}));


const AboutSec = () => {
  return (
    <Box pt={10} pb={10}>
      <Container>
        <Grid container spacing={3} display='flex' alignItems="center">
          <Grid item xs={12} md={6}>
            <InnerTitle title="Who we are" align="left" />
            <p>
              BUNA is a Leading General Contractor & Construction Management
              Services Organization in Saudi Arabia & a subsidiary of SUMOU
              Holding.
            </p>
            <h4 className="inner-subtitle">
              BUNA Subsidiaries are:
            </h4>
            <ul className="inner-list">
              <li>
                <span>BCT Contracting:</span>
                Specialized in mixed use, high-rise buildings, and special projects.
              </li>
              <li>
                <span>ALIGN Management:</span>
                BUNA construction management arm.
              </li>
              <li>
                <span>TAAM:</span>
                Industrial & Commercial general contractor.
              </li>
              <li>
                <span>DAC Group:</span>
                Design & Build specialized contractor With several divisions.
              </li>
            </ul>

            <Button component={Link} href="/" variant="contained">
              Read More
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
                  style={{ objectFit: 'cover'}}
                />
              </div>

              <div className="thumbnail2">
                <Image
                  width={450}
                  height={500}
                  alt="complex"
                  src="/images/01.jpg"
                  style={{ objectFit: 'cover'}}
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
