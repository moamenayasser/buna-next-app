// MUI
import Stack from "@mui/material/Stack";
// Components
import LangSwitch from "@/components/LangSwitch";
import MobileDrawer from "./MobileDrawer";
import SocialItems from "./SocialItems";

const UtilitySection = (props) => {
  const { headerLinks, socialIcons, locale } = props;

  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <Stack
        direction="row"
        alignItems="center"
        gap={1}
        display={{ xs: "none", md: "flex" }}
      >
        <SocialItems socialIcons={socialIcons} />
      </Stack>

      <LangSwitch
        sx={{ display: { xs: "none", md: "flex" } }}
        locale={locale}
      />

      <MobileDrawer
        headerLinks={headerLinks}
        socialIcons={socialIcons}
        locale={locale}
      />
    </Stack>
  );
};

export default UtilitySection;
