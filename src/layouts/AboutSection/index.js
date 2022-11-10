import React from "react";
import { Box, Grid } from "@mui/material";
import AboutSectionContent from "./aboutSectionContent";

export default function AbountSection() {

    return (
        <>
            <Box sx={{ padding: "0 7rem" }} mt="20rem">
            <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <AboutSectionContent />
                    </Grid>
                    <Grid item xs={12} md={6}>
                       
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}