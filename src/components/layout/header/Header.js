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
    <AppBar ref={ref} {...other} style={{ backgroundColor: other["data-trigger"] ? "#000" : "transparent" }}>
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
