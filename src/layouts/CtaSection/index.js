import React from "react";
import { Box, Typography } from "@mui/material";
import TitleText from "../../styles/components/TitleText";
import CustomButton from "../../styles/components/CustomButton";
import EastIcon from "@mui/icons-material/East";

export default function CtaSection() {

    return (
        <>
            <Box sx={{ padding: "0 7rem", display: "flex", flexDirection: "column", alignItems: "center" }} mt="10rem">
                <TitleText variant="h1" align="center" mb="30px"><span className="gradientText">Footbull</span> x NFTs</TitleText>
                <Typography align="center" mb="50px" sx={{ maxWidth: "1000px", fontSize: "18px", fontVariationSettings: `"wght" 500`, marginInline: "auto" }}>Each mystery box is its own individual NFT which can be chosen to be kept as a mystery box to trade with
                    other community members on our platform or it can be opened to reveal a player card which can be used to compete in the weekly or monthly leagues and potentially win Prizes!</Typography>
                <CustomButton endIcon={<EastIcon sx={{ zIndex: "2", textAlign: "center" }} />}>
                    <Typography variant="span" component="span" className="customButtonText">Explore More</Typography>
                </CustomButton>
            </Box>
        </>
    );
}