// Main Imports
import { useRouter } from "next/router";
// MUI
import Link from "@mui/material/Link";
import { benton_en_font, changa_ar_font } from "@/utils/fonts";

const LangSwitch = (props) => {
  const { locale, ...other } = props;

  const router = useRouter();
  const { asPath } = router;

  const newLocale = locale === "ar" ? "en" : "ar";

  return (
    <Link
      href={`/${newLocale}${asPath}`}
      underline="none"
      color="#fff"
      fontFamily={
        locale === "ar"
          ? benton_en_font.style.fontFamily
          : changa_ar_font.style.fontFamily
      }
      {...other}
    >
      {locale === "ar" ? "English" : "العربية"}
    </Link>
  );
};

export default LangSwitch;