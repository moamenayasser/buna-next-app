// Internal Imports
import Image from "next/image";
// MUI
import { Box, Container, Typography, styled } from "@mui/material";
// Components
import InnerTitle from "../InnerTitle";
import GlobalBtn from "../GlobalBtn";
// Image
import banner from "/public/images/03.jpg";

const CrossedSec = styled(Box)(({ theme }) => ({
  "& figure": {
    width: "66.666667%",
    height: "500px",
    marginLeft: 0,
    marginRight: "auto",
    position: "relative",
    overflow: "hidden",

    "&:hover": {
      "& img": {
        transform: "scale(1.2)",
      },
    },
  },
  "& .caption": {
    left: "auto",
    right: 0,
    background: "#000",
    padding: "2% 4% 2% 4%",
    position: "absolute",
    border: "1px solid rgba(0,0,0,0.2)",
    top: "50%",
    width: "50%",
    transform: "translate(0, -50%)",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      position: "relative",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& figure": {
      width: "100%",
      height: "350px",
    },
    "& .caption": {
      transform: "unset",
    },
  },
}));

const Values = () => {
  return (
    <CrossedSec pt={12} pb={12} bgcolor="#F5F5F5">
      <Container>
        <div className="projects" style={{ position: "relative" }}>
          <figure>
            <Image
              src={banner.src}
              alt="Certificate"
              fill
              style={{ objectFit: "cover", transition: "all 0.5s" }}
            />
          </figure>
          <div className="caption">
            <h4 textAlign="center" className="inner-subtitle">
              VISION
            </h4>

            <Typography variant="body1" component="p" pb={6} color="#fff">
              We aim to provide long-term, cost effective, high quality
              solutions to clients – thus building a trust worthy relationship
              with them. We do so by providing the best modern technology in
              affordable top quality.
            </Typography>
            <h4 textAlign="center" className="inner-subtitle">
              MISSION
            </h4>
            <Typography variant="body1" component="p" pb={6} color="#fff">
              By providing the best construction technology we aspire in
              creating a region with the best storage facilities – giving
              companies a great push for growth and aspiration
            </Typography>
            <h4 textAlign="center" className="inner-subtitle">
              VALUES
            </h4>
            <Typography variant="body1" component="p" pb={6} color="#fff">
              BUNA’s values are ethics, safety, quality, people, relationships,
              innovation and delivery. These qualities are what we believe in,
              what customers can expect, and how we deliver.
            </Typography>
          </div>
        </div>
      </Container>
    </CrossedSec>
  );
};
export default Values;
