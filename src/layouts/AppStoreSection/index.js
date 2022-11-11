import React from "react";
import { Box, Link, Typography } from "@mui/material";
import TitleText from "../../styles/components/TitleText";
import styles from "./appStoreSection.module.scss";
import getStartedView from "../../assets/get-started-view.png";
import mineView from "../../assets/mine-view.png";
import googlePlay from "../../assets/google-play.png";
import appleStore from "../../assets/apple-store.png";

export default function AppStoreSection() {

    return (
        <>
            <Box sx={{ padding: "0 7rem" }} mt="10rem">
                <Box className={styles.appWrapper}>
                    <Box className={styles.appWrapperBackground}></Box>
                    <Box className={styles.appWrapperContent}>
                        <TitleText variant="h1" mb="30px" sx={{ fontSize: "52px" }}><span className="gradientText">Platform</span> Preview</TitleText>
                        <Typography mb="50px" sx={{ fontSize: "18px", fontVariationSettings: `"wght" 500`}}>
                            Here is a preview of the Footbull platform, which will be released 3 weeks after the launch on PancakeSwap.
                        </Typography>

                        <Box sx={{ display: "flex", gap: "1.5rem" }}>
                            <Link href="#">
                                <Box component="img" src={googlePlay} height={65} />
                            </Link>
                            <Link href="#">
                                <Box component="img" src={appleStore} height={65} />
                            </Link>
                        </Box>
                    </Box>
                    <Box component="img" src={getStartedView} className={`${styles.appWrapperImgOne} ${styles.mobileImg}`} />
                    <Box component="img" src={mineView} className={`${styles.appWrapperImgTwo} ${styles.mobileImg}`} />
                </Box>
            </Box>
        </>
    );
}