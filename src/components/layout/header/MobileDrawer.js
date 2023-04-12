// Internal Imports
import { useState } from "react";
import Image from "next/image";
// MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
// Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";
// Components
import NextActiveLink from "@/components/NextActiveLink";
import LangSwitch from "@/components/LangSwitch";
import SocialItems from "./SocialItems";
// Images
import LogoImg from "/public/images/BUNA-LOGO-black.png";

const DrawerHeaderStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
}));

const AccordionStyle = styled(Accordion)(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  "& .MuiAccordionSummary-root": {
    minHeight: "auto",
    "&.Mui-expanded": {
      minHeight: "auto",
    },
    "& .MuiAccordionSummary-content": {
      margin: "8px 0",
    },
  },
  "& .MuiAccordionDetails-root": {},
}));

const MobileDrawer = (props) => {
  const { headerLinks, socialIcons, locale } = props;

  const [open, setOpen] = useState(false);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen((prev) => !prev);
  };

  return (
    <Box display={{ md: "none" }}>
      <IconButton
        color="#fff"
        aria-label="menu"
        size="small"
        sx={{ display: { md: "none" } }}
        onClick={toggleDrawer}
      >
        <MenuIcon style={{ fontSize: "2rem" , color: "#fff"}} />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <DrawerHeaderStyle>
          <NextActiveLink
            href="/"
            style={{ display: "flex" }}
            onClick={toggleDrawer}
          >
            <Image
              src={LogoImg}
              alt="Buna Logo"
              height={100}
              width={100}
              style={{ objectFit: "contain" }}
            />
          </NextActiveLink>

          <IconButton aria-label="close" size="small" onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </DrawerHeaderStyle>

        {headerLinks?.length !== 0 && (
          <List>
            {headerLinks?.map((item) => (
              <ListItem key={item.id} disablePadding>
                {item.hasDropdown ? (
                  <AccordionStyle style={{ flexGrow: 1 }} elevation={0}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`mobile-nav-${item.label_en}-content`}
                      id={`mobile-nav-${item.label_en}-header`}
                      style={{ margin: "0 !important" }}
                    >
                      <Typography textTransform="capitalize">
                        {item[`label_${locale}`]}
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <List disablePadding>
                        {item?.dropdownLinks?.map((item) => (
                          <ListItem
                            key={item.id}
                            disablePadding
                            style={{
                              textTransform: "capitalize",
                              fontSize: "0.85rem",
                            }}
                          >
                            <ListItemButton
                              component={NextActiveLink}
                              href={item.href}
                            >
                              {item[`label_${locale}`]}
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </AccordionStyle>
                ) : (
                  <ListItemButton
                    component={NextActiveLink}
                    href={item.href}
                    style={{ textTransform: "capitalize" }}
                  >
                    {item[`label_${locale}`]}
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>
        )}

        {socialIcons?.length !== 0 && (
          <Stack p={2} gap={2}>
            <Stack direction="row" alignItems="center" gap={2}>
              <SocialItems socialIcons={socialIcons} color="primary" />
            </Stack>

            <Stack direction="row" alignItems="center" gap={2}>
              <LanguageIcon />
              <LangSwitch sx={{ flexGrow: 1 }} locale={locale} />
            </Stack>
          </Stack>
        )}
      </Drawer>
    </Box>
  );
};

export default MobileDrawer;
