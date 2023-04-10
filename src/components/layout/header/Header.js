// Internal Imports
import { forwardRef } from "react";
// MUI
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
// Components
import BrandSection from "./BrandSection";
import DesktopLinks from "./DesktopLinks";
import UtilitySection from "./UtilitySection";

const Header = forwardRef((props, ref) => {
  const { headerLinks, socialIcons, locale, ...other } = props;


  return (
    <AppBar ref={ref} {...other} style={{ background: other["data-trigger"] ? "#000" : "linear-gradient(rgb(16 16 16 / 63%) 39.78%, rgb(0 0 0 / 11%) 83.61%, rgb(16 16 16 / 0%) 104.61%)" }}>
      <Container>
        <Toolbar disableGutters style={{ justifyContent: "space-between" }}>
          <BrandSection trigger={other["data-trigger"]} />

          <DesktopLinks headerLinks={headerLinks} locale={locale} />

          <UtilitySection
            headerLinks={headerLinks}
            socialIcons={socialIcons}
            locale={locale}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
});

export default Header;
