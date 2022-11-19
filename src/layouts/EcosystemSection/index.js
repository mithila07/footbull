import React from "react";
import { Typography } from "@mui/material";
import TitleText from "../../styles/components/TitleText";
import BlurbGrid from "./blurbGrid";
import Wrapper from "../../styles/components/Wrapper";

export default function EcosystemSection() {

    return (
        <>
            <Wrapper mt="10rem">
                <TitleText variant="h1" align="center" mb="30px">Our <span className="gradientText2">Footbull Ecosystem</span></TitleText>
                <Typography align="center" sx={{ maxWidth: "800px", fontSize: "20px", fontVariationSettings: `"wght" 500`, marginInline: "auto" }}>Footbull will implement a never seen before NFT market place to buy and sell FB cards for BNB, or players 
can use their cards in the league to compete for the prize pools!</Typography>
                    
                <BlurbGrid />
            </Wrapper>
        </>
    );
}