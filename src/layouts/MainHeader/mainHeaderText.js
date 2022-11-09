import React from "react";
import { Box, Typography } from "@mui/material";
import TitleText from "../../styles/components/TitleText";


export default function MainHeaderText() {

    return (
        <>
            <Box>
                <Typography color="white" variant="h6" mb={"20px"} sx={{ fontSize: "20px", fontVariationSettings: `"wght" 300`}}>Get Started</Typography>
                <TitleText variant="h1" sx={{ maxWidth: "400px"}}>Discover, collect, and sell rare <span className="gradientText">NFTs</span></TitleText>
            </Box>
        </>
    );
}