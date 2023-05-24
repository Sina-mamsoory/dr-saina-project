import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#8be9fd"
        },
        secondary: {
            main: "#bd93f9"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        }
    },
    typography: {
        fontFamily: "IRANSans",
    },
})

