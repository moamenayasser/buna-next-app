// Internal Imports
import NextLink from "next/link";
// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

const CopyRight = () => {
  return (
    <Box dir="ltr" bgcolor="common.black" color="common.white" py={2}>
      <Container>
        <Stack
          direction={{ md: "row" }}
          textAlign={{ xs: "center", md: "auto" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          gap={1}
        >
          <Typography fontSize="0.65rem">
            &copy; {new Date().getFullYear()}. All Rights Reserved. | Developed
            & Designed by{" "}
            <Link
              href="https://psdigital.me"
              target="_blank"
              color="inherit"
              underline="none"
              rel="noopener"
            >
              PSdigital
            </Link>
          </Typography>
          <Typography
            fontSize="0.65rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            component="div"
          >
            <Link
              href="/"
              component={NextLink}
              color="inherit"
              underline="none"
              textTransform="capitalize"
            >
              terms & conditions
            </Link>

            <Divider
              orientation="vertical"
              flexItem
              style={{
                marginLeft: "0.75rem",
                marginRight: "0.75rem",
                borderColor: "#fff",
              }}
            />

            <Link
              href="/"
              component={NextLink}
              color="inherit"
              underline="none"
              textTransform="capitalize"
            >
              privacy policy
            </Link>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default CopyRight;
