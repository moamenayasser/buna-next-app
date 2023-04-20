// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
// Internal Imports
import Image from "next/image";
import InnerTitle from "../InnerTitle";

const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  "& .thumbnail1": {
    position: "relative",
    maxWidth: "max-content",
    zIndex: 1,

    "&:after": {
      position: "absolute",
      content: '""',
      border: "3px solid #10584d",
      height: "100%",
      width: "100%",
      left: "30px",
      top: "30px",
      zIndex: -1,
    },
  },
  "& .thumbnail2": {
    position: "absolute",
    top: "80px",
    right: 0,
    zIndex: 2,
    "& img": {
      border: "10px solid #fff",
      animation: "jump2 5s linear infinite",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& img": {
      width: "100%",
      height: "300px",
    },
    "& .thumbnail1": {
      position: "relative",
      maxWidth: "100%",

      "&:after": {
        left: "10px",
      },
    },
    "& .thumbnail2": {
      display: "none",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .thumbnail1": {
      "&:after": {
        display: "none",
      },
    },
  },
}));

const WhoWeAre = () => {
  return (
    <Box pt={10} pb={10}>
      <Container>
        <Grid container spacing={3} display="flex">
          <Grid item xs={12} md={6}>
            <InnerTitle title="WHO WE ARE ?" align="left" />
            <p>
              BUNA is a Leading General Contractor & Construction Management
              Services Organization in Saudi Arabia & a subsidiary of SUMOU
              Holding.
            </p>
            <h4 className="inner-subtitle">BUNA Subsidiaries are:</h4>
            <ul className="inner-list">
              <li>
                <span>ALIGN Management:</span> BUNA construction management arm.
              </li>
              <li>
                <span>TAAM:</span> Industrial & Commercial general contractor.
              </li>
              <li>
                <span>DAC Group:</span>
                Design & Build specialized contractor. With several divisions.
              </li>
              <li>
                <span>BCT Contracting: </span> Specialized in mixed use,
                high-rise buildings, and special projects.
              </li>
            </ul>
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
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="thumbnail2">
                <Image
                  width={450}
                  height={500}
                  alt="complex"
                  src="/images/01.jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </ImageContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
