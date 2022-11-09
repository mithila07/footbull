import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./mapAndData.module.scss"

export default function MapAndData() {

    return (
        <div className={styles.mapWrapper}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h3" align="center" sx={{ fontSize: "52px", fontVariationSettings: `"wght" 700` }} mb="10px">
                        <span className="gradientText">1 Trillion</span>
                    </Typography>
                    <Typography align="center" sx={{ fontSize: "20px", fontVariationSettings: `"wght" 600` }}>Total Supply</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h3" align="center" sx={{ fontSize: "52px", fontVariationSettings: `"wght" 700` }} mb="10px">
                        <span className="gradientText">200B+</span>
                    </Typography>
                    <Typography align="center" sx={{ fontSize: "20px", fontVariationSettings: `"wght" 600` }}>Total for pre-sale</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h3" align="center" sx={{ fontSize: "52px", fontVariationSettings: `"wght" 700` }} mb="10px">
                        <span className="gradientText">30B+</span>
                    </Typography>
                    <Typography align="center" sx={{ fontSize: "20px", fontVariationSettings: `"wght" 600` }}>Total for liqudity</Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ marginBlockStart: {md: " 4rem" } }}>
                    <Typography variant="h3" align="center" sx={{ fontSize: "52px", fontVariationSettings: `"wght" 700` }} mb="10px">
                        <span className="gradientText">100B+</span>
                    </Typography>
                    <Typography align="center" sx={{ fontSize: "20px", fontVariationSettings: `"wght" 600`, maxWidth: "280px", marginInline: "auto" }}>Locked development and
                        ecosystem</Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ marginBlockStart: {md: " 4rem" } }}>
                    <Typography variant="h3" align="center" sx={{ fontSize: "52px", fontVariationSettings: `"wght" 700` }} mb="10px">
                        <span className="gradientText">60B+</span>
                    </Typography>
                    <Typography align="center" sx={{ fontSize: "20px", fontVariationSettings: `"wght" 600` }}>Team Locked</Typography>
                </Grid>
            </Grid>
        </div>
    );
}