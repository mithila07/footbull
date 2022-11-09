import React from "react";
import { Box, Typography } from "@mui/material";
import TitleText from "../../styles/components/TitleText";
import MapAndData from "./mapAndData";

export default function TokenomicsSection() {

    return (
        <>
            <Box sx={{ padding: "0 7rem" }} mt="10rem">
                <TitleText variant="h1" align="center" mb="30px">Tokenomics</TitleText>
                <Typography align="center" sx={{ maxWidth: "800px", fontSize: "18px", fontVariationSettings: `"wght" 500`, marginInline: "auto" }}>After success with Footbull, we plan to launch 'Basketbull' which is an NBA fantasy league. Same concept
                    and business model as footbull, but for the NBA</Typography>

                <MapAndData />
            </Box>
        </>
    );
}