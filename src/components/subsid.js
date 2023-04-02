import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const subsidImg = [
  {
    id: 1,
    img: "/images/subsid-1.jpg",
    name: "SUBSIDIARIES",
  },
  {
    id: 2,
    img: "/images/subsid-2.jpg",
    name: "SUBSIDIARIES",
  },
  {
    id: 3,
    img: "/images/subsid-3.jpg",
    name: "SUBSIDIARIES",
  },
  {
    id: 4,
    img: "/images/subsid-4.jpg",
    name: "SUBSIDIARIES",
  },
];

const BunaSubsid = () => {
  return (
    <Box display="grid" width="100%" overflow="hidden" p={8}>
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
            BUNA SUBSIDIARIES
          </Typography>

          <Typography
            component="h1"
            variant="h4"
            align="left"
            color="text.primary"
            fontWeight="600"
            gutterBottom
            sx={{ color: "#0b594f", paddingTop: "20px", mb: "40px" }}
          >
            Our Featured Services <br /> Interior Design Transformations
          </Typography>
        </Grid>
      </Container>
      <Container>
        <Grid container justifyContent="center" mb={1}>
          {subsidImg?.map((img) => (
            <Grid item xs={12} md={3} textAlign="center" key={img.id}>
              <Image
                src={img.img}
                alt={img.name}
                width={200}
                height={200}
                className="fullImg"
                sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  objectFit: "contain",
                  padding: "15px",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default BunaSubsid;
