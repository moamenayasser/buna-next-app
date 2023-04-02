// Internal Imports
import localFont from "@next/font/local";
import { Changa } from "@next/font/google";

export const benton_en_font = localFont({
  src: [
    {
      path: "../../public/fonts/BentonSans-Book.otf",
      style: "normal",
      weight: "400",
      fallback: ["system-ui", "arial", "sans-serif"],
    },
    {
      path: "../../public/fonts/BentonSans-Bold.otf",
      style: "normal",
      weight: "700",
      fallback: ["system-ui", "arial", "sans-serif"],
    },
  ],
});

export const gil_en_title_font = localFont({
  src: [
    {
      path: "../../public/fonts/GIL.ttf",
      style: "normal",
      weight: "400",
      fallback: ["system-ui", "arial", "sans-serif"],
    },
    {
      path: "../../public/fonts/GILB.ttf",
      style: "normal",
      weight: "700",
      fallback: ["system-ui", "arial", "sans-serif"],
    },
  ],
});

export const changa_ar_font = Changa({ subsets: ["latin"] });
