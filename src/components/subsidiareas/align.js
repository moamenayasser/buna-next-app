// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
// Internal Imports
import Image from "next/image";

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
  }
}));

const Align = () => {
  return (
    <Box pt={4} pb={10}>
      <Container>
        <h4 className="inner-subtitle">COST MANAGEMENT</h4>

        <Grid container spacing={3} display="flex">
          <Grid item xs={12} md={4}>
            <ul className="inner-list">
              <li>
                <span>Feasibility studies</span>
              </li>
              <li>
                <span>Budget cost advice</span>
              </li>

              <li>
                <span>Strategic planning</span>
              </li>
              <li>
                <span>Cost management (pre-contract)</span>
              </li>
              <li>
                <span>Cost management (postcontract)</span>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} md={4}>
            <ul className="inner-list">
              <li>
                <span>Procurement strategy</span>
              </li>
              <li>
                <span>Tendering</span>
              </li>
              <li>
                <span>Lifecycle costing</span>
              </li>
              <li>
                <span> Project cost benchmarking</span>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <ImageContainer>
              <div className="thumbnail1">
                <Image
                  width={309}
                  height={119}
                  alt="complex"
                  src="/images/align-management.png"
                  priority
                  style={{
                    objectFit: "contain",
                    boxShadow: "3px 3px 6px #c0c0c0",
                    padding: "15px",
                    backgroundColor: "#fff",
                  }}
                />
              </div>
            </ImageContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Align;
