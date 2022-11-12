import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import imgOne from "../../assets/footbull/1.png";
import imgTwo from "../../assets/footbull/2.png";
import imgThree from "../../assets/footbull/3.png";
import imgFour from "../../assets/footbull/4.png";
import imgFive from "../../assets/footbull/5.png";
import imgSix from "../../assets/footbull/6.png";
import imgSeven from "../../assets/footbull/7.png";
import imgEight from "../../assets/footbull/8.png";
import imgNine from "../../assets/footbull/9.png";
import imgTen from "../../assets/footbull/10.png";
import NftCard from "../../styles/components/NftCard";
import NftCardImg from "../../styles/components/NftCardImg";

const imgData = [
    {
        img: imgOne,
        title: 'Image 1'
    },
    {
        img: imgTwo,
        title: 'Image 2'
    },
    {
        img: imgThree,
        title: 'Image 3'
    },
    {
        img: imgFour,
        title: 'Image 4'
    },
    {
        img: imgFive,
        title: 'Image 5'
    },
    {
        img: imgSix,
        title: 'Image 6'
    },
    {
        img: imgSeven,
        title: 'Image 7'
    },
    {
        img: imgEight,
        title: 'Image 8'
    },
    {
        img: imgNine,
        title: 'Image 9'
    },
    {
        img: imgTen,
        title: 'Image 10'
    },
]

export default function ImageGallery() {
    return (
        <ImageList sx={{ width: "100%", height: "100%" }} variant="woven" cols={5} gap={30}>
            {imgData.map((item) => (
                <ImageListItem key={item.img}>
                    <NftCard width={380}>
                        <NftCardImg component="img" src={item.img} alt={item.title} loading="lazy" />
                    </NftCard>
                </ImageListItem>
            ))}
        </ImageList>
    );
}