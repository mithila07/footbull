import React from "react";
import { Typography } from "@mui/material";
import TitleText from "../../styles/components/TitleText";
import CustomButton from "../../styles/components/CustomButton";
import EastIcon from "@mui/icons-material/East";
import Wrapper from "../../styles/components/Wrapper";

export default function CtaSection() {

    return (
        <>
            <Wrapper sx={{ display: "flex", flexDirection: "column", alignItems: "center",marginBlockStart: {xs: "1rem", md: "10rem"}  }}>
                <TitleText variant="h1" align="center" mb="30px"><span className="gradientText">Footbull</span> x NFTs</TitleText>
                <Typography align="center" mb="50px" sx={{ maxWidth: "1000px", fontSize: "18px", fontVariationSettings: `"wght" 500`, marginInline: "auto" }}>Those wanting to play on the Footbull application and have a chance at winning a piece of the prize pools will need to open mystery boxes to play. To keep the platform democratic, players can do marketing tasks to be allocated free boxes, however for a better chance at better players & if you want to skip the tasks, players and investors will be able to pay to open boxes. 50% of the proceeds from NFT minting will be bought into the $FBull token. There will also be a reselling market of the cards, as more valuable players are sold for more.
                </Typography>
                <CustomButton endIcon={<EastIcon sx={{ zIndex: "2", textAlign: "center" }} />}>
                    <Typography variant="span" component="span" className="customButtonText">Explore More</Typography>
                </CustomButton>
            </Wrapper>
        </>
    );
}