import { CacheProvider } from '@emotion/react'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import { deepmerge } from '@mui/utils';
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
// Fonts
import { benton_en_font, changa_ar_font, gil_en_title_font } from "./fonts";


const global = responsiveFontSizes(createTheme({
    direction: 'ltr',
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#0b594f'
        }
    },
    typography: {
        fontSize: 16,
        fontFamily: benton_en_font.style.fontFamily,
    }
}))
const rtlTheme = responsiveFontSizes(createTheme(deepmerge(global, {
    direction: "rtl",
    typography:{
        fontFamily: changa_ar_font.style.fontFamily,
    }
})))

const Theme = ({ children, locale }) => {
    const ThemeDirection = locale === "ar" ? rtlTheme : global;

    const ThemeCache = createCache({
        key: locale === "ar" ? "themertl" : "themeltr",
        stylisPlugins: locale === "ar" && [prefixer, rtlPlugin],
    })
    return (
        <CacheProvider value={ThemeCache}>
            <ThemeProvider theme={ThemeDirection}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    )
}
export default Theme;