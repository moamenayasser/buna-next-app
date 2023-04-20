// Internal Imports
import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
// Components
import Layout from "@/components/layout/Layout";
import Loader from "@/components/Loader";
import InnerBanner from "@/components/InnerBanner";
// Components
import ProjectItem from "@/components/projectItem";
// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// Image
import dots from "/public/images/dot-corner.png";
// Data
import globalData from "@/utils/data.json";
import InnerTitle from "@/components/InnerTitle";
import { Grid } from "@mui/material";

const projectsData = [
  {
    id: 1,
    img: "/images/tower.jpg",
    name: "SUMOU TOWER",
    desc: "A high-rise mixed-use project consists of two towers.",
  },
  {
    id: 2,
    img: "/images/gate.jpg",
    name: "SUMOU GATE",
    desc: "The project aims to attract guests interested in visiting Madinah and Almasjid Alnabawy by providing a premium service and delivering memorable experience",
  },
  {
    id: 3,
    img: "/images/bark.jpg",
    name: "SUMOU PARK",
    desc: "The project land was originally used as a club for the youth that contains different play grounds for different sports",
  },
  {
    id: 4,
    img: "/images/tower.jpg",
    name: "SUMOU TOWER",
    desc: "A high-rise mixed-use project consists of two towers.",
  },
  {
    id: 5,
    img: "/images/gate.jpg",
    name: "SUMOU GATE",
    desc: "The project aims to attract guests interested in visiting Madinah and Almasjid Alnabawy by providing a premium service and delivering memorable experience",
  },
  {
    id: 6,
    img: "/images/bark.jpg",
    name: "SUMOU PARK",
    desc: "The project land was originally used as a club for the youth that contains different play grounds for different sports",
  },
];
const Projects = ({ locale, data }) => {
  const {
    resources,
    home: { Banner, AboutSection },
  } = data;
  const { headerLinks, footerLinks, socialIcons } = globalData;

  const [loading, setLoading] = useState(true);
  useEffect(() => setLoading(false), []);

  if (loading) return <Loader />;

  return (
    <>
      <Head>
        <title>Buna Construction</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout
        headerLinks={headerLinks}
        footerLinks={footerLinks}
        socialIcons={socialIcons}
        locale={locale}
      >
        <main>
          <InnerBanner title="Projects" />
          <Box
            pt={10}
            pb={10}
            className="project-setion"
            sx={{
              backgroundImage: `url(${dots.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom right",
            }}
          >
            <Container>
              <InnerTitle title="Buna Projects" align="left" />

              <Grid container spacing={3} display="flex">
                {projectsData?.map((item) => (
                  <Grid item xs={12} md={4}>
                    <ProjectItem item={item} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </main>
      </Layout>
    </>
  );
};
export default Projects;

export const getServerSideProps = async ({ locale }) => {
  const res = await fetch(`${process.env.API_URL}`);
  const data = await res.json();

  return {
    props: {
      data,
      locale,
    },
  };
};
