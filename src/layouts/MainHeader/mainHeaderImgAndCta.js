import React from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "../../styles/components/CustomButton";
import EastIcon from '@mui/icons-material/East';
import bullImg from "../../assets/bull.png";

export default function MainHeaderImgAndCta() {

    return (
        <>
            <Box
                component="img"
                src={bullImg}
                sx={{
                    height: "clamp(400px, 50vw, 950px)",
                    position: "absolute",
                    transform: "translate(-50%,-50%)",
                    left: "55%", top: "50%"
                }}
            />
            <Box sx={{ maxWidth: "350px", marginBlockEnd: "-8rem"}} >
                <Typography sx={{ fontSize: "18px", lineHeight: "30px", fontVariationSettings: `"wght" 500` }} mb="25px">
                    Brought to you by passionate football fans. Footbull is the ‘dApp’ coming to you on the Binance Smart
                    Chain.
                </Typography>
                <CustomButton endIcon={<EastIcon sx={{ zIndex: "2" }} />}>
                    <Typography variant="span" component="span" className="customButtonText">Explore</Typography>
                </CustomButton>
            </Box>
        </>
    );
}