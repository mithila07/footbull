import React from "react";
import { Typography } from "@mui/material";
import TitleText from "../../styles/components/TitleText";


export default function AboutSectionContent() {

    return (
        <>
            <TitleText variant="h1" mb="2rem">Introducing <span className="gradientText">$FBull</span></TitleText>
            <Typography sx={{ fontSize: "18px", lineHeight: "30px", fontVariationSettings: `"wght" 500` }} mb="15px">
                The Footbull token is an integral part of our ecosystem. A portion of funds from NFTs purchased by
                players will be automatically sent to a buyback contract, ensuring positive buy pressure through activity
                on the site.
            </Typography>
            <Typography sx={{ fontSize: "18px", lineHeight: "30px", fontVariationSettings: `"wght" 500` }}>
                Taxes: 9% Sell tax decreasing until 6%, 6% buy tax. Platform release date 3 weeks from Presale finalisation
            </Typography>
        </>
    );
}