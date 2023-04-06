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
        Company Structure
      </Typography>
      <Typography variant="body2" mb={4} width="90%">
        A pioneer with a unique vision in contracting and construction management.
      </Typography>
      <Stack display="inline">
        {footerImg?.map((item) => (
          <Link href="/" key={item.id}>
            <Image
              src={item.img}
              alt={item.name}
              width={100}
              height={60}
              style={{ maxWidth: "100%", objectFit:'contain', margin: '5px' }}
            />
          </Link>
        ))}
      </Stack>

    </>
  )
}

export default LogoSection;
