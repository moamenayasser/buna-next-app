// MUI
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
// Icons
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
// Components
import SocialItems from "../header/SocialItems";

const NewsLetterSection = ({ socialIcons, locale }) => {
  return (
    <>
      <Typography component="h4" variant="h6" textTransform="capitalize" gutterBottom >
        newsletter
      </Typography>

      <FormControl
        variant="outlined"
        fullWidth
        required
        style={{ marginBottom: "0.5rem" }}
        color="primary"
        component="form"
      >
        <FilledInput
          id="buna-news-letter"
          placeholder="Email Address"
          endAdornment={
            <InputAdornment position="end" style={{ padding: 0}}>
              <IconButton
                size="small"
                aria-label="submit newsletter"
                sx={{ transform: locale === "ar" ? "scaleX(-1)" : "" }}
              >
                <SendOutlinedIcon
                  style={{
                    color: "#0b594f",
                    fontSize: "1rem",
                  }}
                />
              </IconButton>
            </InputAdornment>
          }
          style={{
            color: "#000",
            fontSize: "0.85rem",
            padding: '0px',
            backgroundColor: "#bfbfbf",
            borderRadius: 0
          }}
        />
      </FormControl>

      <Typography variant="body1" mb={4}>
        Subscribe to our newsletter
      </Typography>

      <Stack direction="row" alignItems="center" gap={2}>
        <SocialItems
          socialIcons={socialIcons}
          sx={{ backgroundColor: "secondary.main" }}
          size="small"
        />
      </Stack>
    </>
  );
};

export default NewsLetterSection;
