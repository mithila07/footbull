import React from "react";
import { Box } from "@mui/material";
import TitleText from "../../styles/components/TitleText";

import qrrebound from "../../assets/4qr_rebound.png";
import mariel from "../../assets/mari_el.png";
import ns from "../../assets/ns.png";
import sm from "../../assets/sm.png";
import vb from "../../assets/vb.png";
import Wrapper from "../../styles/components/Wrapper";

const itemData = [
    {
        img: qrrebound,
        title: '4QR Rebound',
        width: 120
    },
    {
        img: mariel,
        title: 'Mari El',
        width: 160
    },
    {
        img: ns,
        title: 'NS',
        width: 120
    },
    {
        img: sm,
        title: 'SM',
        width: 80
    },
    {
        img: vb,
        title: 'VB',
        width: 80
    }
]

export default function PartnerSection() {

    return (
        <>
            <Wrapper mt="5rem">
                <TitleText variant="h1" align="center" mb="3rem">Our Partners</TitleText>
                <Box mt="5rem" sx={{ display: "flex", gap: "clamp(4rem, 10vw, 10rem)", alignItems: "center", justifyContent: "center" }}>
                    {itemData.map((item) => (
                        <img width={item.width} src={item.img} alt={item.title} loading="lazy" />
                    ))}
                </Box>
            </Wrapper>
        </>
    );
}