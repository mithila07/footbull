import React from "react";
import { Grid } from "@mui/material";
import MainHeaderImgAndCta from "./mainHeaderImgAndCta";
import MainHeaderText from "./mainHeaderText";
import Wrapper from "../../styles/components/Wrapper";

export default function MainHeader() {

    return (
        <>
            <Wrapper mt="7rem">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <MainHeaderText />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: {xs: "column", md: "row" }, alignItems: {md: "flex-end"}, justifyContent: "flex-end" }}>
                       <MainHeaderImgAndCta />
                    </Grid>
                </Grid>
            </Wrapper>
            
        </>
    );
}