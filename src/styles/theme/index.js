import { createTheme } from "@mui/material";

const footbullTheme = createTheme({
    typography: {
        "fontFamily": "MontserratVariable",
        "fontSize": 16,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        "fontWeightSemiBold": 600,
        "fontWeightBold": 700,
        "fontWeightExtraBold": 800
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true,
            }
        }
    }
});

export default footbullTheme;