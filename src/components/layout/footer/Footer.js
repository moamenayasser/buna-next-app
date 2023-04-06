// Internal Imports
import { useState, useEffect } from "react";
// MUI
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// Components
import LogoSection from "./LogoSection";
import FooterDesktopLinks from "./FooterDesktopLinks";
import NewsLetterSection from "./NewsLetterSection";


const FooterWrapperStyle = styled("footer")(({ theme }) => ({
  background: '#000',
  paddingTop: 90,
  paddingBottom: theme.spacing(5),
  position: "relative",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: theme.palette.common.white,
}));


const Footer = (props) => {
  const { socialIcons, footerLinks, locale } = props;

  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const [open, setOpen] = useState(matches);

  useEffect(() => {
    if (!matches) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [matches]);

  const handleClick = (index) => {
    if (!matches) {
      if (open === index) {
        setOpen(false);
      } else {
        setOpen(index);
      }
    }
  };
  return (
    <FooterWrapperStyle>
      <Container>
        <Grid container spacing={2} position="relative">
          <Grid item xs={12} md={4} lg={3}>
            <LogoSection />
          </Grid>

          {footerLinks?.map((item, index) => (
            <Grid key={item.id} item xs={12} lg={3}>
              <FooterDesktopLinks
                data={item}
                locale={locale}
                handleClick={handleClick}
                index={index}
                matches={matches}
                open={open}
              />
            </Grid>
          ))}

          <Grid item xs={12} sm={6} lg>
            <Box>
              <NewsLetterSection socialIcons={socialIcons} locale={locale} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapperStyle>
  )
}

export default Footer;
