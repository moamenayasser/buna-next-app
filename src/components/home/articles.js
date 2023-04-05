import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const cards = [1, 2, 3];

const theme = createTheme();

export default function Artilces() {
  return (
    <ThemeProvider theme={theme}>
      <main style={{ background: "#f2f2f2", padding: "50px 0" }}>
        <Container maxWidth="lg">
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
                    left: "0",
                    top: "5px",
                    width: "60px",
                    height: "2px",
                    backgroundColor: "#0b594f",
                  },
                  color: "#0b594f",
                  pl: "70px",
                  fontFamily: "sans-serif",
                },
              ]}
            >
              RECENT ARTICLES
            </Typography>

            <Typography
              component="h1"
              variant="h4"
              align="left"
              color="text.primary"
              fontWeight="600"
              gutterBottom
              sx={{ color: "#0b594f", paddingTop: "20px", mb: "0px" }}
            >
              Read Our Latest <br /> Articles
            </Typography>
          </Grid>
        </Container>
        <Container sx={{ py: 4, pb: "50px" }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: "0",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    image="/images/01.jpg"
                    alt="news"
                  />
                  <CardContent sx={{ flexGrow: 1, position: "relative" }}>
                    <box>
                      <Typography
                        sx={{
                          position: "absolute",
                          background: "#fff",
                          top: "-25px",
                          padding: "6px",
                          fontSize: "14px",
                          textAlign: "center",
                          borderBottom: "3px solid #000",
                        }}
                      >
                        20 March
                      </Typography>
                    </box>
                    <Typography gutterBottom variant="h5" component="h2">
                      ways to create extra space in small home
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Typography
                      component="a"
                      href="/"
                      sx={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        fontSize: "13px",
                        fontWeight: "700",
                        padding: "11px 32px 11px 31px",
                        position: "relative",
                        border: "1px solid currentColor",
                        color: "#000",
                        borderRadius: "0",
                        marginTop: "5px",
                        marginBottom: "10px",
                      }}
                    >
                      Read More
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
