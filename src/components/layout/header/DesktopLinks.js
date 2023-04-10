// MUI
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// Component
import NextActiveLink from "@/components/NextActiveLink";


const LinksWrapperStyle = styled("li")(({ theme }) => ({
  position: "relative",
  "& > a": {
    height: 40,
    padding: "15px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "fit-content",
    justifyContent: "center",
    textTransform: "capitalize",
    color: '#fff',
    fontSize: "1.1rem",
    fontWeight: 500,
    transition: "all 0.2s linear",

    "&:focus": {
      backgroundColor: "unset",
    },
    "&:after": {
      zIndex: -1,
      position: 'absolute',
      content: '""',
      left: '10% ',
      width: '0',
      top: '0px',
      height: '2px',
      backgroundColor: theme.palette.secondary.main,
      transition: 'all 0.5s ease-out',
    },
    "&.active": {
      "&:after": {
        width: "80%",
      },
    },
    "&:hover": {
      backgroundColor: "unset",

      "&:after": {
        width: "80%",
      },
    },
  },

  "& .link": {
    fontSize: "1.1rem",
    textTransform: "capitalize",
    lineHeight: 1.75,
    height:40,
    padding: '15px',
    fontWeight: 500,
    position:"relative",
    color: '#fff',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&:after": {
      zIndex: -1,
      position: 'absolute',
      content: '""',
      left: '10%',
      width: '0',
      top: '0',
      height: '2px',
      backgroundColor: theme.palette.secondary.main,
      transition: 'all 0.5s ease-out',
    },

    "&:hover": {
      backgroundColor: "unset",
      "&:after": {
        width: "80%",
      },
    },
  },
  "& .dropdown-menu": {
    position: "absolute",
    boxShadow: theme.shadows[1],
    borderRadius: 0,
    minWidth: 160,
    maxWidth: 250,
    zIndex: 20,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    opacity: 0,
    paddingTop: 0,
    paddingBottom: 0,
    visibility: "hidden",
    transform: "translateY(10px)",
    transition: "0.25s ease-in-out",
    "& a": {
      transition: "0.25s linear",
      display: "block",
      width: "100%",
      textTransform: "capitalize",
      fontSize: "0.9rem",

      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
      },
    },
  },
  "&:hover": {
    "& .dropdown-menu": {
      opacity: 1,
      visibility: "visible",
      transform: "none",
    },
  },
}));

const DesktopLinks = ({ headerLinks, locale }) => {
 
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={2}
      component="ul"
      display={{ xs: "none", md: "flex" }}
    >
      {headerLinks?.map((item) => (
        <LinksWrapperStyle key={item.id}>
          {item.hasDropdown ? (
            <>
              <span className="link">{item[`label_${locale}`]}</span>
              <List className="dropdown-menu">
                {item?.dropdownLinks?.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton component={NextActiveLink} href={item.href}>
                      {item[`label_${locale}`]}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </>
          ) : (
            <Button href={item.href} component={NextActiveLink} color="inherit">
              {item[`label_${locale}`]}
            </Button>
          )}
        </LinksWrapperStyle>
      ))}
    </Stack>
  );
};

export default DesktopLinks;
