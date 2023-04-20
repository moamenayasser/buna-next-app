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

const WhyBuna = () => {
  return (
    <Box pt={10} pb={10}>
      <Container>
        <Grid container spacing={3} display="flex">
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
            </ImageContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <InnerTitle title="WHY BUNA ?" align="left" />
            <p>
              BUNA is offering wide range of technical services leaded by a
              group of highly qualified team, whose expertise in engineering
              projects covering all major disciplines of construction
              management.
              <br />
              <br />
              The Secret key of BUNA is the futuristic vision, experience, and
              high field knowledge in contracting & construction management.
              <br />
              <br />
              BUNA highly professional team, Top notch management, Modern
              Equipment & Technique are strong added value to our projects, that
              meet the client’s expectations by delivering most innovative, cost
              and time effective projects.
              <br />
              <br />
              We are differentiated by the quality of our people and our
              relentless drive, to deliver the most successful outcomes. Also,
              we align our capabilities to our customers’ objectives to create a
              lasting positive impact.
            </p>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyBuna;
