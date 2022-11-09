import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./roadmap.module.scss";

export default function Roadmap() {

    return (
        <>
            <Box mt="6rem">
                <div className={styles.roadmapItem}>
                    <Typography align="center" color="#ffffff" sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, textTransform: "uppercase" }}>
                        August 2022
                    </Typography>
                    <div className={styles.roadmapItemDivider}></div>
                    <div className={styles.roadmapItemDescription}>
                        <Typography sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, zIndex: 4 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et iolu velit.
                        </Typography>
                    </div>
                </div>

                <div className={styles.roadmapItem}>
                    <Typography align="center" color="#ffffff" sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, textTransform: "uppercase" }}>
                       September 2022
                    </Typography>
                    <div className={styles.roadmapItemDivider}></div>
                    <div className={styles.roadmapItemDescription}>
                        <Typography sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, zIndex: 4 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et iolu velit.
                        </Typography>
                    </div>
                </div>

                <div className={styles.roadmapItem}>
                    <Typography align="center" color="#ffffff" sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, textTransform: "uppercase" }}>
                       October 2022
                    </Typography>
                    <div className={styles.roadmapItemDivider}></div>
                    <div className={styles.roadmapItemDescription}>
                        <Typography sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, zIndex: 4 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et iolu velit.
                        </Typography>
                    </div>
                </div>

                <div className={styles.roadmapItem}>
                    <Typography align="center" color="#ffffff" sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, textTransform: "uppercase" }}>
                       2023
                    </Typography>
                    <div className={styles.roadmapItemDivider}></div>
                    <div className={styles.roadmapItemDescription}>
                        <Typography sx={{ fontSize: "25px;", fontVariationSettings: `"wght" 500`, zIndex: 4 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et iolu velit.
                        </Typography>
                    </div>
                </div>
            </Box>
        </>
    );
}