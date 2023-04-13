// Internal Imports
import Image from "next/image";
import Link from "next/link";
// MUI
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";


const footerImg = [
  {
    id: 1,
    img: "/images/align-management-white.png",
    name: "Alignment Management",
    desc: "Cursus euismod dictumst a non dis nisi sociosqu mauris."
  },
  {
    id: 2,
    img: "/images/TAAM-Logo-white.png",
    name: "Taam Group",
    desc: "Cursus euismod dictumst a non dis nisi sociosqu mauris."
  },
  {
    id: 3,
    img: "/images/dac-white.png",
    name: "Dac Group",
    desc: "Cursus euismod dictumst a non dis nisi sociosqu mauris."
  },
  {
    id: 4,
    img: "/images/BUNA-LOGO-white.png",
    name: "Buna Group",
    desc: "Cursus euismod dictumst a non dis nisi sociosqu mauris."
  },
];

const LogoSection = () => {
  return (
    <>
      <Typography
        component="h4"
        variant="h6"
        textTransform="capitalize"
        gutterBottom
      >
        SUMOU holding
      </Typography>
      <Typography variant="body2" mb={3} width="90%">
      A world-class institutional investor catalyzing growth in global business sectors.
      </Typography>
      <Stack display="inline">
          <Link href="/">
            <Image
              src="/images/clients/sumou-w.jpg"
              alt="Sumou Logo"
              width={100}
              height={60}
              style={{ maxWidth: "100%", objectFit:'contain', margin: '5px' }}
            />
          </Link>
      </Stack>

    </>
  )
}

export default LogoSection;
