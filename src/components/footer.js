import Link from "next/link";
import { useRouter } from "next/router";

import { styled } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";

import { routes } from "../data/routes";
import Social from "./Social";

const Footerwrapper = styled("div")(({ theme }) => ({
  backgroundColor: "#000",
  width: `100%`,
  position: "relative",
  overflow: "hidden",
  marginTop: "6em",
  padding: "2em 0 ",
}));
const Copyrighttext = styled("div")(({ theme }) => ({
  color: "#fff",
  fontSize: "1em",
  "&:hover": {
    color: "#cda274",
  },
}));

const Footer = () => {
  const path = routes;
  const router = useRouter();
  return (
    <Footerwrapper>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {path.map(({ name, link }) => (
            <Grid item key={link}>
              <Link href={link}>
                <Typography
                  style={{
                    fontSize: "1.25em",
                    color: "#fff",
                    "&:hover": {
                      color: "#757ce8",
                    },
                  }}
                >
                  {name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          justifyContent="center"
          direction="column"
          style={{ margin: "1.2em 0 auto" }}
        >
          <Social />
        </Grid>
        <Grid
          item
          container
          component={"a"}
          target="_blank"
          rel="noreferrer noopener"
          href="https://psdigital.me"
          justifyContent="center"
          style={{
            textDecoration: "none",
          }}
        >
          <Copyrighttext>&copy;PSdigital</Copyrighttext>
        </Grid>
      </Container>
    </Footerwrapper>
  );
};

export default Footer;
