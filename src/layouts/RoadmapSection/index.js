import React from "react";
import { Box, Typography } from "@mui/material";
import TitleText from "../../styles/components/TitleText";
import Roadmap from "./roadmap";

export default function RoadmapSection() {

    return (
        <>
            <Box sx={{ padding: "0 7rem" }} mt="10rem">
                <TitleText variant="h1" align="center" mb="30px"><span className="gradientText">Roadmap</span> x Expansion Plans</TitleText>
                <Typography align="center" sx={{ maxWidth: "800px", fontSize: "18px", fontVariationSettings: `"wght" 500`, marginInline: "auto" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et iolu velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            
                <Roadmap />
            </Box>
        </>
    );
}