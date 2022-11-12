import React from "react";
import { Box } from "@mui/material";
import TitleText from "../../styles/components/TitleText";
import TeamMembersCarousel from "./teamMembersCarousel";

export default function TeamSection() {

    return (
        <>
            <Box sx={{ padding: "0 7rem" }} mt="10rem">
                <TitleText variant="h1" align="center" mb="30px">About Team</TitleText>
                
                <TeamMembersCarousel />
            </Box>
        </>
    );
}