import React from "react";
import { Box } from "@mui/material";
import TitleText from "../../styles/components/TitleText";
import Roadmap from "./roadmap";

export default function RoadmapSection() {

    return (
        <>
            <Box sx={{ padding: "0 7rem" }} mt="10rem">
                <TitleText variant="h1" align="center" mb="30px"><span className="gradientText">Roadmap</span> x Expansion Plans</TitleText>
                
                <Roadmap />
            </Box>
        </>
    );
}