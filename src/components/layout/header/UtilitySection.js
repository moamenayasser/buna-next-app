// MUI
import Stack from "@mui/material/Stack";
// Components
import LangSwitch from "@/components/LangSwitch";
import MobileDrawer from "./MobileDrawer";
// Icons
import LanguageIcon from "@mui/icons-material/Language";
import { Button } from "@mui/material";

const UtilitySection = (props) => {
  const { headerLinks, socialIcons, locale } = props;

  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <Button variant="outlined" sx={{ display: { xs: "none", md: "flex" } }} >
        <LangSwitch locale={locale}>
          <LanguageIcon sx={{ ml: 1 }} />
        </LangSwitch>
      </Button>

      <MobileDrawer
        headerLinks={headerLinks}
        socialIcons={socialIcons}
        locale={locale}
      />
    </Stack>
  );
};

export default UtilitySection;