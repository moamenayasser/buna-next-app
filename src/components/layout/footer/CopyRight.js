// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const CopyRight = () => {
  return (
    <Box bgcolor="#000000e6" color="common.white" py={1}>
      <Container>
        <Stack
          direction={{ md: "row" }}
          textAlign="center"
          justifyContent="center"
          gap={1}
          fontSize="14px"
        >
          <Typography style={{ fontSize: 12 }}>
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
