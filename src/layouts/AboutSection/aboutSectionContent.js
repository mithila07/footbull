import { Box, Typography } from "@mui/material";
import TitleText from "../../styles/components/TitleText";
import laliga from "../../assets/logo-laliga.svg";
import bundesliga from "../../assets/logo-bundesliga.svg";
import eredivisie from "../../assets/logo-eredivisie.svg";
import mls from "../../assets/logo-MLS.svg";
import beligumleague from "../../assets/logo-belgiumleague.svg";

export default function AboutSectionContent() {
    const itemData = [
        {
            img: laliga,
            title: 'LaLiga',
            width: 80
        },
        {
            img: bundesliga,
            title: 'Bundesliga',
            width: 40
        },
        {
            img: eredivisie,
            title: 'Eredivisie',
            width: 75
        },
        {
            img: mls,
            title: 'MLS',
            width: 35
        },
        {
            img: beligumleague,
            title: 'Belgium League',
            width: 45
        }
    ]

    return (
        <>
            <TitleText variant="h1" mb="2rem">About <span className="gradientText">Footbull</span></TitleText>
            <Typography sx={{ fontSize: "18px", lineHeight: "30px", fontVariationSettings: `"wght" 500` }} mb="15px">
                The Footbull token is an integral part of our ecosystem. A portion of funds from NFTs purchased by
                players will be automatically sent to a buyback contract, ensuring positive buy pressure through activity
                on the site.
            </Typography>
            <Typography sx={{ fontSize: "18px", lineHeight: "30px", fontVariationSettings: `"wght" 500` }}>
                Taxes: 9% Sell tax decreasing until 6%, 6% buy tax. Platform release date 3 weeks from Presale finalisation
            </Typography>
            <Typography sx={{ fontSize: "18px", lineHeight: "30px", fontVariationSettings: `"wght" 500` }}>
                1.5% Prize Pool Tax in BNB
            </Typography>
            <Typography sx={{ fontSize: "18px", lineHeight: "30px", fontVariationSettings: `"wght" 500` }}>
                1.5% Prize Pool Tax in Tokens
            </Typography>
            <Typography sx={{ fontSize: "18px", lineHeight: "30px", fontVariationSettings: `"wght" 500` }} mb="30px">
                3% Marketing/Development Cost in BNB
            </Typography>
            <Typography color="#fafafa" sx={{ fontSize: "21px", lineHeight: "30px", fontVariationSettings: `"wght" 500` }} mb="30px">
                Featuring over 300 officially licensed football clubs
            </Typography>
            <Box sx={{ display: "flex", gap: "45px", alignItems: "center"}}>
                {itemData.map((item) => (
                    <img width={item.width} src={item.img} alt={item.title} loading="lazy"/>
                ))}
            </Box>
        </>
    );
}