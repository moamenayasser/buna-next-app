import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container, styled } from "@mui/material";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ChairIcon from "@mui/icons-material/Chair";

const BoxWrapper = styled("div")(({ theme }) => ({
  backgroundImage: `url(${"https://source.unsplash.com/random"})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  paddingTop: "100px",
  paddingBottom: "100px",
  backgroundSize: "40% 100%",
  padding: "90px",
  position: "relative",
  "&:before": {
    content: "''",
    position: "absolute",
    left: "0",
    top: "45px",
    width: "100%",
    height: "85%",
    background: "#000",
    zIndex: "-1",
  },
}));
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "cover",
});

const ServiceSec = (props) => {
  const {data} = props
  return (
    <>
      <BoxWrapper sx={{ flexGrow: 1 }}>
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
                    backgroundColor: "#cda274",
                  },
                  color: "#cda274",
                  pl: "70px",
                  fontFamily: "sans-serif",
                },
              ]}
            >
              SERVICES WE DO
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              align="left"
              color="text.primary"
              fontWeight="600"
              gutterBottom
              sx={{ color: "#fff", paddingTop: "20px" }}
            >
              Our Featured Services <br /> Interior Design Transformations
            </Typography>
          </Grid>
          <Grid
            container
            columns={{ xs: 12, sm: 8, md: 12 }}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={3} md={3}>
              <Card
                sx={{
                  backgroundColor: "#f9f9f9",
                  height: 310,
                  position: "relative",
                  borderRadius: "0",
                  padding: "0 15px",
                }}
              >
                <CardContent>
                  <AccountBalanceOutlinedIcon
                    sx={{
                      fontSize: "3.5rem",
                      color: "#cda274",
                      marginBottom: "20px",
                    }}
                  />
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      color: "#000",
                      fontWeight: "500",
                      marginBottom: "15px",
                    }}
                  >
                    Architecture
                  </Typography>

                  <Typography variant="body2">
                    We develop the full cycle of project documentation & full
                    details. Our clients satisfaction is most
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
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
                      marginTop: "15px",
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <Card
                sx={{
                  backgroundImage: `url(${"https://source.unsplash.com/random"})`,
                  height: 310,
                  position: "relative",
                  borderRadius: "0",
                  padding: "0 15px",
                }}
              >
                <CardContent>
                  <ChairIcon
                    sx={{
                      fontSize: "3.5rem",
                      color: "#fff",
                      marginBottom: "20px",
                    }}
                  />

                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      color: "#fff",
                      fontWeight: "500",
                      marginBottom: "15px",
                    }}
                  >
                    Interior Work
                  </Typography>

                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    We will take care of the interior designs, build &
                    management of all kind of living projects
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      display: "inline-block",
                      verticalAlign: "middle",
                      fontSize: "13px",
                      fontWeight: "700",
                      padding: "11px 32px 11px 31px",
                      position: "relative",
                      border: "1px solid currentColor",
                      color: "#fff",
                      borderRadius: "0",
                      marginTop: "15px",
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={3} md={3}>
              <Card
                sx={{
                  backgroundColor: "#f9f9f9",
                  height: 310,
                  position: "relative",
                  borderRadius: "0",
                  padding: "0 15px",
                }}
              >
                <CardContent>
                  <AccountBalanceOutlinedIcon
                    sx={{
                      fontSize: "3.5rem",
                      color: "#cda274",
                      marginBottom: "20px",
                    }}
                  />

                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      color: "#000",
                      fontWeight: "500",
                      marginBottom: "15px",
                    }}
                  >
                    Retail Designs
                  </Typography>

                  <Typography variant="body2">
                    We can help you with the retail interior design and third
                    party management to create best
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
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
                      marginTop: "15px",
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <Card
                sx={{
                  backgroundColor: "#f9f9f9",
                  height: 310,
                  position: "relative",
                  borderRadius: "0",
                  padding: "0 15px",
                }}
              >
                <CardContent>
                  <ChairIcon
                    sx={{
                      fontSize: "3.5rem",
                      color: "#cda274",
                      marginBottom: "20px",
                    }}
                  />

                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      color: "#000",
                      fontWeight: "500",
                      marginBottom: "15px",
                    }}
                  >
                    2D/3D Layouts
                  </Typography>

                  <Typography variant="body2">
                    Device and implement business strategies that drive success
                    for an entire business
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
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
                      marginTop: "15px",
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </BoxWrapper>
    </>
  );
};

export default ServiceSec;
