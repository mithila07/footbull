import React from "react";
import { Box, Divider, Grid, Icon, Link, Typography } from "@mui/material";

import SendIcon from '@mui/icons-material/Send';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import { borderColor } from "@mui/system";

const navItems = ['Home', 'Ecosystem', 'Our NFTs', 'Roadmap', 'Our Team'];
const socialIcons = [ 
    {
        icon: SendIcon,
        url: '#'
    },
    {
        icon: LanguageIcon,
        url: '#'
    },
    {
        icon: TwitterIcon,
        url: '#'
    }
]

const linkStyles = {
    fontSize: '20px',
    textDecoration: 'none',
    transition: '0.35s ease-in-out all',
    color: '#ececec',
    '&:hover': {
        color: '#643ECF'
    }
}

const socialLinkStyles = {
    width: '46px',
    height: '46px',
    display: 'grid',
    placeContent: 'center',
    borderRadius: '50%',
    border: '1px solid #B9B7BE',
    backgroundColor: 'rgba(107, 104, 124, 0.2)',
    transition: '0.35s ease-in-out all',
    color: '#b4b4b7',
    '&:hover': {
        color: '#643ECF',
        borderColor: '#643ECF'
    }
}

export default function Footer() {

    return (
        <>
            <Box sx={{ padding: "0 7rem" }} mt="10rem">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                        <Box sx={{ display: 'flex', gap: '3rem', height: '100%', alignItems: 'center' }}>
                            {navItems.map((item) => (
                                <Link href="#" sx={linkStyles}>
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ display: 'flex', gap: '2rem', justifyContent: "flex-end" }}>
                        {socialIcons.map((item) => (
                                <Link href={item.url} sx={socialLinkStyles}>
                                    <item.icon width={24} height={24}  />
                                </Link>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Divider sx={{ marginBlock: '4rem 3rem', borderColor: 'rgba(255, 255, 255, 0.2)' }}/>
                <Typography color="#ffffff" align="center" sx={{ fontSize: '24px', fontVariationSettings: `"wght" 300`, marginBlockEnd: '3rem' }}>Copyright  ©  2022 FootBull All Rights Reserved.</Typography>
        </>
    );
}