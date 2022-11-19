import React from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "../../styles/components/CustomButton";
import EastIcon from '@mui/icons-material/East';
import bullImg from "../../assets/bull.png";
import styles from "./header.module.scss";

export default function MainHeaderImgAndCta() {

    return (
        <>
            <Box
                className={styles.headerImg}
                component="img"
                src={bullImg}
            />
            <Box className={styles.headerContent}>
                <Typography sx={{ fontSize: "18px", lineHeight: "30px", fontVariationSettings: `"wght" 500` }} mb="25px">
                Web3’s Fantasy Footbull platform. Mint, play & earn in a decentralized and flawless experience!
                </Typography>
                <CustomButton endIcon={<EastIcon sx={{ zIndex: "2" }} />}>
                    <Typography variant="span" component="span" className="customButtonText">where does this lead to?</Typography>
                </CustomButton>
            </Box>
        </>
    );
}