import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import InnerTitle from "./InnerTitle";
import Link from "next/link";
export default function ApplyForm() {
  return (
    <>
      <Box
        flexGrow={1}
        pt={10}
        pb={4}
        mt={10}
        bgcolor="#f8f8f8"
        className="multi"
        position="relative"
      >
        <Container fixed sx={{ position: "relative" }}>
          <Grid spacing={3} mb={2} container justifyContent="center">
            <Grid item xs={12} position="relative" textAlign="center">
              <div className="section-title">
                <Stack
                  mb={3}
                  position="relative"
                  sx={{
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      display: "block",
                      width: "50px",
                      height: "3px",
                      backgroundColor: "#10584d",
                      top: "-6px",
                      transform: "translateY(-50%)",
                      left: "48%",
                    },
                  }}
                >
                  <Typography component="h1" variant="h2" py={1}>
                    Apply Now
                  </Typography>
                </Stack>
                <Typography
                  variant="p"
                  align="center"
                  color="#000"
                  fontSize={16}
                  paragraph
                >
                  Some placeholder content for the collapse component Some
                  placeholder.
                </Typography>
              </div>
            </Grid>
          </Grid>

          <Box
            align="center"
            component="form"
            sx={{
              "& > :not(style)": {
                m: { xs: 1, md: 2 },
                width: { xs: "30ch", md: "40ch" },
                textAlign: "left",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="outlined"
            />
            <TextField id="standard-basic" label="Email" variant="outlined" />
            <TextField id="standard-basic" label="Phone" variant="outlined" />
          </Box>
          <Stack
            direction="row"
            align="center"
            alignItems="center"
            justifyContent="center"
            spacing={5}
            sx={{ margin: "40px" }}
          >
            <Button
              component={Link}
              href="/"
              variant="outlined"
              style={{ border: "2px solid #000" }}
            >
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>

            <Button component={Link} href="/" variant="contained">
              Apply
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
