import React from "react";
import { Box, Grid } from "@mui/material";
import AboutSectionContent from "./aboutSectionContent";
import NftCard from "../../styles/components/NftCard";
import imgOne from "../../assets/footbull/1.png";
import imgTwo from "../../assets/footbull/4.png";
import NftCardImg from "../../styles/components/NftCardImg";
import ThreeBoxes from "./threeBoxes";

export default function AbountSection() {

    return (
        <>
            <Box sx={{ padding: "0 7rem" }} mt="20rem">
                <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <AboutSectionContent />
                        <ThreeBoxes />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: "flex", position: "relative" }}>
                        <NftCard width={300} sx={{ transform: "rotate(1.5deg)", position: "absolute", left: "2rem"  }}>
                            <NftCardImg component="img" src={imgOne} />
                        </NftCard>
                        <NftCard width={330}sx={{ transform: "rotate(-2.75deg)", position: "absolute", right: "2rem", top: "8rem" }}>
                            <NftCardImg component="img" src={imgTwo} />
                        </NftCard>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}