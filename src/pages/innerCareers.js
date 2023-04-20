// Internal Imports
import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
// Components
import Layout from "@/components/layout/Layout";
import Loader from "@/components/Loader";
import InnerBanner from "@/components/InnerBanner";
// Data
import globalData from "@/utils/data.json";
// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Internal Imports
import Image from "next/image";
import ApplyForm from "@/components/applyForm";
import InnerTitle from "@/components/InnerTitle";

const Careers = ({ locale, data }) => {
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
          <InnerBanner title="Careers" />
          <Box pt={10} >
            <Container>
              <Grid container spacing={3} display="flex">
                <Grid item xs={12} md={6}>
                  <InnerTitle title="Job Title" align="left" />
                  <p>
                    BUNA is a Leading General Contractor & Construction
                    Management Services Organization in Saudi Arabia & a
                    subsidiary of SUMOU Holding.
                  </p>
                  <h4 className="inner-subtitle">Job Requirments:</h4>
                  <ul className="inner-list">
                    <li>
                      <span>
                        Some placeholder content for the collapse component.
                      </span>
                    </li>
                   
                    <li>
                      <span>
                        Some placeholder content for the collapse component.
                      </span>
                    </li>
                   
                    <li>
                      <span>
                        Some placeholder content for the collapse component.
                      </span>
                    </li>
                   
                    <li>
                      <span>
                        Some placeholder content for the collapse component.
                      </span>
                    </li>
                   
                  </ul>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className="thumbnail1">
                      <Image
                        width={450}
                        height={500}
                        alt="complex"
                        src="/images/aboutSec.jpg"
                        priority
                        style={{ objectFit: "cover",width:"100%" }}
                      />
                    </div>

                </Grid>
              </Grid>
            </Container>
            <ApplyForm />
          </Box>
        </main>
      </Layout>
    </>
  );
};
export default Careers;

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
