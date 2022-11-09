import React from "react";
import { Box, Grid } from "@mui/material";
import MainHeaderImgAndCta from "./mainHeaderImgAndCta";
import MainHeaderText from "./mainHeaderText";

export default function MainHeader() {

    return (
        <>
            <Box sx={{ padding: "0 7rem" }} mt="7rem">
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <MainHeaderText />
                    </Grid>
                    <Grid item md={6} sx={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
                       <MainHeaderImgAndCta />
                    </Grid>
                </Grid>
            </Box>
            
        </>
    );
}