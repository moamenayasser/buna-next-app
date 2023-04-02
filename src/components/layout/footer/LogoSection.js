// Internal Imports
import Image from "next/image";
// MUI
import Typography from "@mui/material/Typography";
// Images
import FooterImg from "/public/images/Buna-logo.png";

const LogoSection = () => {
  return (
    <>
      <Typography
        component="h4"
        variant="h6"
        textTransform="capitalize"
        gutterBottom
      >
       Holding Company Structure
      </Typography>
      <Typography variant="body2" mb={4} width="90%">
        Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
        consectetur. Lorem ipsum dolor sit amet consectetur.
      </Typography>
      <Image
        src={FooterImg}
        alt="BUNA"
        width={120}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </>
  );
};

export default LogoSection;
