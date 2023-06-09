// Internal Imports
import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
// Components
import Layout from "@/components/layout/Layout";
import AboutSec from "@/components/home/aboutSec";
import HomeSlider from "@/components/home/homeSlider";
import Loader from "@/components/Loader";
// Data
import globalData from "@/utils/data.json";


const DynamicBunaSubsidiary = dynamic(() =>  import('@/components/home/bunaSubsidiary'),{
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const DynamicProjectSec = dynamic(() =>  import('@/components/home/projectSec'),{
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const DynamicCertificateSec = dynamic(() =>  import('@/components/home/certificateSec'),{
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const DynamicContactSec = dynamic(() =>  import('@/components/home/contactSec'),{
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const DynamicClientsSec = dynamic(() =>  import('@/components/home/clientsSec'),{
  loading: () => <p>Loading...</p>,
  ssr: false,
});


const Home = ({ data, locale }) => {
  const { resources, home: { Banner, AboutSection } } = data;
  const { headerLinks, footerLinks, socialIcons } = globalData;

  const [loading, setLoading] = useState(true);
  useEffect(() =>  setLoading(false), [])

  if (loading) return <Loader />;

  return (
    <>
      <Head>
        <title>Buna Construction</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout headerLinks={headerLinks} footerLinks={footerLinks} socialIcons={socialIcons} locale={locale}>
        <main>
          <HomeSlider data={Banner} />
          <AboutSec data={AboutSection} />
          <DynamicBunaSubsidiary locale={locale} />
          <DynamicProjectSec locale={locale} />
          <DynamicCertificateSec />
          <DynamicContactSec locale={locale} />
          <DynamicClientsSec locale={locale} />
        </main>
      </Layout>
    </>
  )
}
export default Home;


export const getServerSideProps = async ({ locale }) => {
  const res = await fetch(`${process.env.API_URL}`);
  const data = await res.json();

  return {
    props: {
      data,
      locale
    }
  }
}