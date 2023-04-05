import "../styles/globals.css";
import Theme from "../utils/theme";

export default function App({ Component, pageProps }) {
  const locale = pageProps.locale || "en";
  return (
    <Theme locale={locale}>
      <Component {...pageProps} />;
    </Theme>
  )
}
