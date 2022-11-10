import React from "react";
import { Box, Typography } from "@mui/material";
import TitleText from "../../styles/components/TitleText";
import TeamMembersCarousel from "./teamMembersCarousel";

export default function TeamSection() {

    return (
        <>
            <Box sx={{ padding: "0 7rem" }} mt="10rem">
                <TitleText variant="h1" align="center" mb="30px">About Team</TitleText>
                <Typography align="center" sx={{ maxWidth: "800px", fontSize: "18px", fontVariationSettings: `"wght" 500`, marginInline: "auto" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et iolu velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            
                <TeamMembersCarousel />
            </Box>
        </>
    );
}