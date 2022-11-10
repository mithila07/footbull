import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./roadmap.module.scss";

export default function Roadmap() {

    return (
        <>
            <Box mt="6rem">
                <div className={styles.roadmapItem}>
                    <Typography align="center" color="#ffffff" sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, textTransform: "uppercase" }}>
                        Q4 2022
                    </Typography>
                    <div className={styles.roadmapItemDivider}></div>
                    <div className={styles.roadmapItemDescription}>
                        <Typography sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, zIndex: 4 }}>
                            Private Sale / Seed raise, Establish partnerships, Token creation, Audit & KYC.
                            Token WL presale (1000BNB raise?) Establish relationships with call channels & outreach campaign.
                        </Typography>
                    </div>
                </div>

                <div className={styles.roadmapItem}>
                    <Typography align="center" color="#ffffff" sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, textTransform: "uppercase" }}>
                        Q1 2023
                    </Typography>
                    <div className={styles.roadmapItemDivider}></div>
                    <div className={styles.roadmapItemDescription}>
                        <Typography sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, zIndex: 4 }}>
                            Ethereum Cross-chain launch, New marketing campaign on Ethereum
                        </Typography>
                    </div>
                </div>

                <div className={styles.roadmapItem}>
                    <Typography align="center" color="#ffffff" sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, textTransform: "uppercase" }}>
                        Q2 2023
                    </Typography>
                    <div className={styles.roadmapItemDivider}></div>
                    <div className={styles.roadmapItemDescription}>
                        <Typography sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, zIndex: 4 }}>
                            Release of 'Basketbull' the NBA fantasy league on both BSC & ETH.
                        </Typography>
                    </div>
                </div>

                <div className={styles.roadmapItem}>
                    <Typography align="center" color="#ffffff" sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, textTransform: "uppercase" }}>
                        Q3 2023
                    </Typography>
                    <div className={styles.roadmapItemDivider}></div>
                    <div className={styles.roadmapItemDescription}>
                        <Typography sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, zIndex: 4 }}>
                            - Sponsor real football & basketball teams. Celebrity Ambassadors. Self-fuelled ecosystem due
                            to success of business model
                        </Typography>
                    </div>
                </div>
            </Box>
        </>
    );
}