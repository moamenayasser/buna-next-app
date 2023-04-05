// MUI
import IconButton from "@mui/material/IconButton";
// Icons
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/material";

const IconButtonStyle = styled(IconButton)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: theme.palette.secondary.main,
  width: "35px",
  height: "35px",
  color: "#fff",
  border: `1px solid ${theme.palette.secondary.main}`,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    backgroundColor: "#fff",
    color: theme.palette.secondary.main,
  },
}));

const SocialItems = ({ socialIcons, ...other }) => {
  return (
    <>
      {socialIcons?.map((item) => (
        <IconButtonStyle
          key={item.id}
          aria-label={item.label}
          href={item.href}
          target="_blank"
          rel="noopener"
          color="#fff"
          {...other}
        >
          {item.label === "Twitter" && <TwitterIcon />}
          {item.label === "LinkedIn" && <LinkedInIcon />}
        </IconButtonStyle>
      ))}
    </>
  );
};

export default SocialItems;
