import React from "react";
import styles from "./blurbGrid.module.scss"
import { Box, Grid, Typography } from "@mui/material";

import discountIcon from "../../assets/discount.svg";
import uploadIcon from "../../assets/upload.svg";
import gridIcon from "../../assets/category.svg";


export default function BlurbGrid() {

    return (
        <>
            <Grid container spacing={6} mt="6rem">
                <Grid item xs={12} md={4} sx={{ marginBlockStart: { md: "6rem" } }}>
                    <Box className={styles.blurbItem}>
                        <Box className={styles.blurbItemIcon}>
                            <Box component="img" src={discountIcon} />
                        </Box>
                        <Box className={styles.blurbItemContent}>
                            <Typography align="center" color="#ffffff" sx={{ fontSize: "25px", fontVariationSettings: `"wght" 700`, zIndex: 4 }}>Token tax & Prizes</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className={`${styles.blurbItem} ${styles.active}`}>
                        <Box className={styles.blurbItemIcon}>
                            <Box component="img" src={uploadIcon} />
                        </Box>
                        <Box className={styles.blurbItemContent}>
                            <Typography align="center" color="#ffffff" sx={{ fontSize: "25px", fontVariationSettings: `"wght" 700`, zIndex: 4 }}>Mintings the NFTs</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} sx={{ marginBlockStart: { md: "6rem" } }}>
                    <Box className={styles.blurbItem}>
                        <Box className={styles.blurbItemIcon}>
                            <Box component="img" src={gridIcon} />
                        </Box>
                        <Box className={styles.blurbItemContent}>
                            <Typography align="center" color="#ffffff" sx={{ fontSize: "25px", fontVariationSettings: `"wght" 700`, zIndex: 4 }}>Buyback into token</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}