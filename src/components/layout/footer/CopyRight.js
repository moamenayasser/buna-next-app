// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const CopyRight = () => {
  return (
    <Box bgcolor="common.black" color="common.white" py={2}>
      <Container>
        <Stack
          direction={{ md: "row" }}
          textAlign="center"
          justifyContent="center"
          gap={1}
        >
          <Typography fontSize="0.4rem">
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
        </Stack>
      </Container>
    </Box>
  );
};

export default CopyRight;
