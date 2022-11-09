import React from "react";
import { Avatar } from "@mui/material";

export default function TeamMembersCarousel() {

    return (
        <>
        <div className={styles.teamItem}>
             <Avatar />
             <div className={styles.teamItemData}>

             </div>
        </div>
        </>
    );
}