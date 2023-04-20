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
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Container,
  Grid,
  styled,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const CardBox = styled(Card)(({ theme }) => ({
  borderRadius: 0,
  height: "100%",
  width: "100%",
  overflow: "hidden",
  "& .card-box": {
    borderRadius: 0,
    border: "1px solid #e7e5e5",
    padding: "15px",
    gap: "10px",
    height: "100%",
    position: "relative",
    backgroundColor: "#fff",
    boxShadow: "1px 5px 5px #eee",
    color: "#000",

    "&:before , &:after": {
      boxSizing: "inherit",
      zIndex: "-1",
      content: '""',
      position: "absolute",
      border: "2px solid transparent",
      width: 0,
      height: 0,
    },
    "&:before": {
      top: 0,
      left: 0,
    },
    "&:after": {
      bottom: 0,
      right: 0,
    },

    "&:hover": {
      animation: "jump1 5s linear infinite",
      backgroundColor: "#fff",

      "&:before , &:after": {
        width: "100%",
        height: "100%",
        display: "block",
        transition: "width 0.25s ease-out, height 0.25s ease-out 0.25s",
      },
      "&:before": {
        borderTopColor: "#000",
        borderRightColor: "#000",
      },
      "&:after": {
        borderBottomColor: "#000",
        borderLeftColor: "#000",
      },
    },

    "& .link-btn": {
      display: "inline-block",
      marginTop: "5px",
      position: "relative",
      paddingBottom: "1px",
      marginBottom: "-1px",
      borderBottom: "1px solid #0000004a",
      color: "#000",
      fontSize: "14px",
      fontWeight: 600,

      "&:before": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: "-1px",
        width: 0,
        height: "1px",
        backgroundColor: theme.palette.secondary.main,
        transition: "all ease 0.4s",
      },

      "&:hover": {
        color: theme.palette.secondary.main,
        "&:before": {
          width: "100%",
        },
      },
    },
    "& .card-img img": {
      transition: "all 0.3s ease-out 0s",
    },
    "&:hover": {
      boxShadow: "0px 14px 24px 0px #d7282b17",
      "& .card-img img": {
        transform: "scale(1.1)",
      },
      "& h4": {
        color: theme.palette.secondary.main,
      },
    },
    "& ul": {
      backgroundColor: "#fff",
      padding: 15,
      position: "absolute",
      left: 25,
      right: 25,
      top: 0,
      display: "flex",
      justifyContent: "center",
      transform: "translateY(-50%)",
      boxShadow: "0px 8px 16px 0px rgb(138 138 138 / 4%)",

      "& li": {
        textAlign: "center",
        justifyContent: "center",
      },
    },
    "@media (max-width: 768px)": {
      "& img": {
        width: "100%",
        objectFit: "cover",
      },
    },
  },
}));

const News = ({ locale, data }) => {
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
          <InnerBanner title="News" />
          <Box
            flexGrow={1}
            pt={10}
            pb={10}
            bgcolor="#f8f8f8"
            dir="ltr"
            className="multi"
          >
            <Container fixed>
              <Grid container spacing={3}>
                <Grid item sm={6} md={4}>
                  <CardBox sx={{ borderRadius: 0, boxShadow: "unset" }}>
                    <Box className="card-box">
                      <CardMedia
                        sx={{ height: "240px", overflow: "hidden" }}
                        className="card-img"
                      >
                        <Image
                          src="/images/news1.jpg"
                          width={400}
                          height={240}
                          alt="news"
                        />
                      </CardMedia>
                      <CardContent
                        sx={{ padding: "30px 5px", position: "relative" }}
                      >
                        <Link href="#">
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            mb={2}
                            fontSize={16}
                            sx={{}}
                          >
                            <Typography
                              display="flex"
                              alignItems="center"
                              fontSize="12px"
                            >
                              23rd March 2019
                            </Typography>
                          </Box>
                          <Typography
                            variant="h4"
                            component="h4"
                            mb={2}
                            sx={{ "&:hover": { color: "primary.main" } }}
                          >
                            Each of our 8 double rooms has its own distinct.
                          </Typography>
                        </Link>
                        <Typography variant="body1" component="p">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore.
                        </Typography>

                        <Box mt={3} gap={2} display="flex">
                          <Link className="link-btn" href="#">
                            Read more
                          </Link>
                        </Box>
                      </CardContent>
                    </Box>
                  </CardBox>
                </Grid>
                <Grid item sm={6} md={4}>
                  <CardBox sx={{ borderRadius: 0, boxShadow: "unset" }}>
                    <Box className="card-box">
                      <CardMedia
                        sx={{ height: "240px", overflow: "hidden" }}
                        className="card-img"
                      >
                        <Image
                          src="/images/news2.jpg"
                          width={400}
                          height={240}
                          alt="news"
                        />
                      </CardMedia>
                      <CardContent
                        sx={{ padding: "30px 5px", position: "relative" }}
                      >
                        <Link href="#">
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            mb={2}
                            fontSize={16}
                            sx={{}}
                          >
                            <Typography
                              display="flex"
                              alignItems="center"
                              fontSize="12px"
                            >
                              23rd March 2019
                            </Typography>
                          </Box>
                          <Typography
                            variant="h4"
                            component="h4"
                            mb={2}
                            sx={{ "&:hover": { color: "primary.main" } }}
                          >
                            Each of our 8 double rooms has its own distinct.
                          </Typography>
                        </Link>
                        <Typography variant="body1" component="p">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore.
                        </Typography>

                        <Box mt={3} gap={2} display="flex">
                          <Link className="link-btn" href="#">
                            Read more
                          </Link>
                        </Box>
                      </CardContent>
                    </Box>
                  </CardBox>
                </Grid>
                <Grid item sm={6} md={4}>
                  <CardBox sx={{ borderRadius: 0, boxShadow: "unset" }}>
                    <Box className="card-box">
                      <CardMedia
                        sx={{ height: "240px", overflow: "hidden" }}
                        className="card-img"
                      >
                        <Image
                          src="/images/news3.jpg"
                          width={400}
                          height={240}
                          alt="news"
                        />
                      </CardMedia>
                      <CardContent
                        sx={{ padding: "30px 5px", position: "relative" }}
                      >
                        <Link href="#">
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            mb={2}
                            fontSize={16}
                            sx={{}}
                          >
                            <Typography
                              display="flex"
                              alignItems="center"
                              fontSize="12px"
                            >
                              23rd March 2019
                            </Typography>
                          </Box>
                          <Typography
                            variant="h4"
                            component="h4"
                            mb={2}
                            sx={{ "&:hover": { color: "primary.main" } }}
                          >
                            Each of our 8 double rooms has its own distinct.
                          </Typography>
                        </Link>
                        <Typography variant="body1" component="p">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore.
                        </Typography>

                        <Box mt={3} gap={2} display="flex">
                          <Link className="link-btn" href="#">
                            Read more
                          </Link>
                        </Box>
                      </CardContent>
                    </Box>
                  </CardBox>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </main>
      </Layout>
    </>
  );
};
export default News;

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
