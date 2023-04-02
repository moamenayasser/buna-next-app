import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CropSquareIcon from "@mui/icons-material/CropSquare";
const BoxWrapper = styled("div")(({ theme }) => ({
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  paddingTop: "50px",
  paddingBottom: "50px",
  backgroundSize: "cover",
}));

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "cover",
});
const AboutSec = () => {
  return (
    <BoxWrapper id="aboutSection">
      <Grid
        container
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 1200,
          flexGrow: 1,
        }}
      >
        <Grid item>
          <Img
            sx={{ width: 450, height: 525, mr: "30px" }}
            alt="complex"
            src="/images/aboutSec.jpg"
          />
        </Grid>

        <Grid item xs={12} sm container alignItems="center">
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs sx={{ position: "relative" }}>
              <Typography
                component="p"
                variant="p"
                align="left"
                color="text.primary"
                fontWeight="400"
                gutterBottom
                sx={[
                  {
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      left: "15px",
                      top: "25px",
                      width: "40px",
                      height: "2px",
                      backgroundColor: "#0a594e",
                    },
                    color: "#0a594e",
                    pl: "50px",
                    fontFamily: "sans-serif",
                  },
                ]}
              >
                About Us
              </Typography>
              <Typography
                component="h1"
                variant="h4"
                align="left"
                color="text.primary"
                fontWeight="600"
                gutterBottom
              >
                Who we are
              </Typography>
              <Typography
                variant="p"
                align="left"
                color="#000"
                fontFamily="sans-serif"
                fontSize={16}
                paragraph
              >
                BUNA is a Leading General Contractor & Construction Management
                Services Organization in Saudi Arabia & a subsidiary of SUMOU
                Holding.
              </Typography>
              <Typography variant="h6" component="h6" fontWeight="bold" pb={1}>
                BUNA Subsidiaries are:
              </Typography>
              <List sx={{ padding: "0", "& li": { padding: "0" } }}>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: "20px" }}>
                    <CropSquareIcon style={{ width: "0.4em" }} />
                  </ListItemIcon>
                  <b style={{ fontFamily: "sans-serif" }}>BCT Contracting: </b>
                  <ListItemText
                    align="left"
                    primary="Specialized in mixed use, high-rise buildings, and special projects."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: "20px" }}>
                    <CropSquareIcon style={{ width: "0.4em" }} />
                  </ListItemIcon>
                  <b style={{ fontFamily: "sans-serif" }}>ALIGN Management: </b>
                  <ListItemText
                    align="left"
                    primary="BUNA construction management arm."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: "20px" }}>
                    <CropSquareIcon style={{ width: "0.4em" }} />
                  </ListItemIcon>
                  <b style={{ fontFamily: "sans-serif" }}>TAAM: </b>
                  <ListItemText
                    align="left"
                    primary=" Industrial & Commercial general contractor. "
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: "20px" }}>
                    <CropSquareIcon style={{ width: "0.4em" }} />
                  </ListItemIcon>
                  <b style={{ fontFamily: "sans-serif" }}>DAC Group: </b>
                  <ListItemText
                    align="left"
                    primary="Design & Build specialized contractor.
With several divisions."
                  />
                </ListItem>
              </List>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="right"
              ></Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </BoxWrapper>
  );
};

export default AboutSec;
