import { styled, Typography } from "@mui/material";


const TitleText = styled(Typography)(() => ({
    fontSize: "clamp(40px, 5vw, 72px)",
    lineHeight: "125%",
    fontWeight: 900,
    fontVariationSettings: `"wght" 900`,
    letterSpacing: "0.03em",
    color: "#ffffff"
}));

export default TitleText;