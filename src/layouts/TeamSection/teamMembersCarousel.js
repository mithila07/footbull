import React from "react";
import styles from "./teamMembersCarousel.module.scss";
import { Avatar, Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TeamMembersCarousel() {

    const teamData = [
        {
            profileImg: 'https://i.pravatar.cc/215?img=60',
            username: '@TOPGENTLEDEV',
            role: 'Advisor & Partner'
        },
        {
            profileImg: 'https://i.pravatar.cc/215?img=43',
            username: '@MKTKing',
            role: 'Incubation'
        },
        {
            profileImg: 'https://i.pravatar.cc/215?img=14',
            username: '@RollsReece',
            role: 'Founder'
        },
        {
            profileImg: 'https://i.pravatar.cc/215?img=15',
            username: '@Trynos',
            role: 'CEO / Manager'
        }
    ];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <Box mt="6rem">
            <Slider {...settings}>
                <div className={styles.teamItem}>
                    <Avatar src="https://i.pravatar.cc/215?img=60" sx={{ width: 215, height: 215, zIndex: 2 }} />
                    <div className={styles.teamItemData}>
                        <Typography align="center" color="#ffffff" sx={{ fontSize: "25px", fontVariationSettings: `"wght" 500`, marginBlockEnd: "5px" }}>@TOPGENTLEDEV</Typography>
                        <Typography align="center" color="#9e9e9e" variant="span" component="span">Advisor & Partner</Typography>
                    </div>
                </div>

                <div className={styles.teamItem}>
                    <Avatar src="https://i.pravatar.cc/215?img=43" sx={{ width: 215, height: 215, zIndex: 2 }} />
                    <div className={styles.teamItemData}>
                        <Typography align="center" color="#ffffff" sx={{ fontSize: "25px", fontVariationSettings: `"wght" 500`, marginBlockEnd: "5px" }}>@MKTKing</Typography>
                        <Typography align="center" color="#9e9e9e" variant="span" component="span">Incubation</Typography>
                    </div>
                </div>

                <div className={styles.teamItem}>
                    <Avatar src="https://i.pravatar.cc/215?img=14" sx={{ width: 215, height: 215, zIndex: 2 }} />
                    <div className={styles.teamItemData}>
                        <Typography align="center" color="#ffffff" sx={{ fontSize: "25px", fontVariationSettings: `"wght" 500`, marginBlockEnd: "5px" }}>@RollsReece</Typography>
                        <Typography align="center" color="#9e9e9e" variant="span" component="span">Founder</Typography>
                    </div>
                </div>

                <div className={styles.teamItem}>
                    <Avatar src="https://i.pravatar.cc/215?img=15" sx={{ width: 215, height: 215, zIndex: 2 }} />
                    <div className={styles.teamItemData}>
                        <Typography align="center" color="#ffffff" sx={{ fontSize: "25px", fontVariationSettings: `"wght" 500`, marginBlockEnd: "5px" }}>@Trynos</Typography>
                        <Typography align="center" color="#9e9e9e" variant="span" component="span">CEO / Manager</Typography>
                    </div>
                </div>
            </Slider>
        </Box>
    );
}