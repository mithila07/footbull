import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./roadmap.module.scss";

export default function Roadmap() {

    return (
        <>
            <Box mt="6rem">
                <Box className={styles.roadmapItem}>
                    <Typography align="center" color="#ffffff" sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, textTransform: "uppercase" }}>
                        Q4 2022
                    </Typography>
                    <Box className={styles.roadmapItemDivider}></Box>
                    <Box className={styles.roadmapItemDescription}>
                        <Typography sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, zIndex: 4 }}>
                            Private Sale / Seed raise, Establish partnerships, Token creation, Audit & KYC.
                            Token WL presale (1000BNB raise?) Establish relationships with call channels & outreach campaign.
                        </Typography>
                    </Box>
                </Box>

                <Box className={styles.roadmapItem}>
                    <Typography align="center" color="#ffffff" sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, textTransform: "uppercase" }}>
                        Q1 2023
                    </Typography>
                    <Box className={styles.roadmapItemDivider}></Box>
                    <Box className={styles.roadmapItemDescription}>
                        <Typography sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, zIndex: 4 }}>
                            Ethereum Cross-chain launch, New marketing campaign on Ethereum
                        </Typography>
                    </Box>
                </Box>

                <Box className={styles.roadmapItem}>
                    <Typography align="center" color="#ffffff" sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, textTransform: "uppercase" }}>
                        Q2 2023
                    </Typography>
                    <Box className={styles.roadmapItemDivider}></Box>
                    <Box className={styles.roadmapItemDescription}>
                        <Typography sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, zIndex: 4 }}>
                            Release of 'Basketbull' the NBA fantasy league on both BSC & ETH.
                        </Typography>
                    </Box>
                </Box>

                <Box className={styles.roadmapItem}>
                    <Typography align="center" color="#ffffff" sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, textTransform: "uppercase" }}>
                        Q3 2023
                    </Typography>
                    <Box className={styles.roadmapItemDivider}></Box>
                    <Box className={styles.roadmapItemDescription}>
                        <Typography sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, zIndex: 4 }}>
                            - Sponsor real football & basketball teams. Celebrity Ambassadors. Self-fuelled ecosystem due
                            to success of business model
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}