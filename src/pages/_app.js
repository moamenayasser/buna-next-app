import { useEffect } from "react";
import "../styles/globals.css";
import Theme from "../utils/theme";

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  const locale = pageProps.locale || "en";

   useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <Theme locale={locale}>
      <Component {...pageProps} />
    </Theme>
  )
}
