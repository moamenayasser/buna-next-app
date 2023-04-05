// Internal Imports
import dynamic from "next/dynamic";
// MUI
import Stack from "@mui/material/Stack";
// Components
import SlideInHeader from "./header/SlideInHeader";
import Header from "./header/Header";

const cloneProps = (trigger) => ({
  color: trigger ? "inherit" : "transparent",
  position: "fixed",
  elevation: trigger ? 1 : 0,
  style: {
    color: trigger ? "#000" : "#fff",
  },
});

const DynamicFooter = dynamic(() =>
  import("./footer/Footer")
);
const DynamicCopyRight = dynamic(() =>
  import("./footer/CopyRight")
);

const Layout = (props) => {
  const { headerLinks, footerLinks, socialIcons, locale, children } = props;
console.log(locale)
  return (
    <Stack minHeight="100vh" width="100%" justifyContent="space-between">
      <SlideInHeader cloneProps={cloneProps}>
        <Header
          headerLinks={headerLinks}
          socialIcons={socialIcons}
          locale={locale}
        />
      </SlideInHeader>

      <main style={{ flexGrow: 1 }}>{children}</main>

      <DynamicFooter
        socialIcons={socialIcons}
        footerLinks={footerLinks}
        locale={locale}
      />
      <DynamicCopyRight />
    </Stack>
  );
};

export default Layout;
