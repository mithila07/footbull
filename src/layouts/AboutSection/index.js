import React from "react";
import { Box, Grid } from "@mui/material";
import AboutSectionContent from "./aboutSectionContent";

export default function AbountSection() {

    return (
        <>
            <Box sx={{ padding: "0 7rem" }} mt="20rem">
            <Grid container spacing={2}>
                    <Grid item md={6}>
                        <AboutSectionContent />
                    </Grid>
                    <Grid item md={6}>
                       
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}