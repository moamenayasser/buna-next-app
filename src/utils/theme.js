import { CacheProvider } from '@emotion/react'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import { deepmerge } from '@mui/utils';
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
// Fonts
import { benton_en_font, changa_ar_font, gil_en_title_font } from "./fonts";
// Components
import { truncateLines } from "./helpers";

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
        fontSize: 15,
        fontFamily: benton_en_font.style.fontFamily,
        color: '#6E777D',
        h1: {
            fontWeight: 600,
            textTransform: "uppercase",
            fontSize: '3.5rem',
        },
        h2: {
            textTransform: "uppercase",
            fontSize: '2.5rem',
            fontWeight: 600,
        },
        h3: {
            fontWeight: 600,
            fontSize: 24
        },
        h4: {
            fontWeight: 600,
            fontSize: 20
        },
        subtitle1: {
            fontWeight: 600,
            fontSize: 15,
            lineHeight: '20px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
        }
    },
    components: {
        MuiTypography: {
            variants: truncateLines([1, 2, 3, 4, 5]),
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: "15px 40px",
                    borderRadius: 0,
                    transition: 'all 0.3s ease 0s',
                    "@media screen and (max-width: 768px)": {
                        padding: "10px 20px",
                        fontSize: 12,
                    },
                },
                contained: {
                    color: "#fff",
                    backgroundColor: "#000",
                    boxShadow: "unset",
                    border: "2px solid #000",
                    zIndex: 1,
                    position: "relative",
                    overflow: "hidden",
                    
                    "&::after": {
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        background: '#fff',
                        content: '""',
                        zIndex: '-1',
                        transform: 'translateY(110%)',
                        transition: '0.2s linear',
                        transitionDelay: '0.1s',
                        display: 'block',
                        position: 'absolute',
                    },

                    "&:hover": {
                        color: '#000',
                        boxShadow: "unset",
                        transition: '0.2s linear',

                        "&::after": {
                            transform: 'translateY(0)',
                        }
                    },
                },
                outlined: {
                    color: "#000",
                    backgroundColor: "#fff",
                    boxShadow: "unset",
                    border: "2px solid #000",
                    zIndex: 1,
                    position: "relative",
                    overflow: "hidden",
                    
                    "&::after": {
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        background: '#000',
                        content: '""',
                        zIndex: '-1',
                        transform: 'translateY(110%)',
                        transition: '0.2s linear',
                        transitionDelay: '0.1s',
                        display: 'block',
                        position: 'absolute',
                    },

                    "&:hover": {
                        color: '#fff',
                        boxShadow: "unset",
                        transition: '0.2s linear',
                        border: "2px solid #000",

                        "&::after": {
                            transform: 'translateY(0)',
                        }
                    },
                },
            },
        },
        MuiTouchRipple: {
            styleOverrides: {
                root: {
                    display: 'none',
                }
            }
        }
    }
}));


const rtlTheme = responsiveFontSizes(createTheme(deepmerge(global, {
    direction: "rtl",
    typography: {
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