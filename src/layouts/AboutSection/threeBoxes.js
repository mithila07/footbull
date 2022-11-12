import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./aboutSection.module.scss";
import todoImg from "../../assets/todo-list.png"
export default function ThreeBoxes() {
    return (
        <Box className={styles.threeBoxesWrapper}>
            <Box className={styles.threeBoxes}>
                <Box component="img" src={todoImg} width={100} />
                <Box className={styles.threeBoxesContent}>
                    <Typography>1.5% Prize Pool</Typography>
                    <Typography>Tax in BNB</Typography>
                </Box>
            </Box>

            <Box className={styles.threeBoxes}>
                <Box component="img" src={todoImg} width={100} />
                <Box className={styles.threeBoxesContent}>
                    <Typography>1.5% Prize Pool</Typography>
                    <Typography>Tax in Tokens</Typography>
                </Box>
            </Box>

            <Box className={styles.threeBoxes}>
                <Box component="img" src={todoImg} width={100} />
                <Box className={styles.threeBoxesContent}>
                    <Typography>3% Marketing/Development</Typography>
                    <Typography>Cost in BNB</Typography>
                </Box>
            </Box>
        </Box>
    );
}