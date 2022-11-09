import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import CustomButton from "../../styles/components/CustomButton";
import NavbarLink from "../../styles/components/NavbarLink";


export default function NavbarDesktop() {
    const navItems = ['Home', 'Ecosystem', 'Our NFTs', 'Roadmap', 'Our Team'];

    return (
        <>
            <Box sx={{ display: 'flex' }} >
                <AppBar position="relative" component="nav" color="transparent" elevation={0} sx={{ zIndex: 100 }}>
                    <Toolbar>
                        <Box component="img" src={logo} sx={{ height: 160 }} />
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, justifyContent: 'center', gap: '3rem' }}>
                            {navItems.map((item) => (
                                <NavbarLink href="#">
                                    {item}
                                </NavbarLink>
                            ))}
                        </Box>
                        <CustomButton>
                            <Typography variant="span" component="span"className="customButtonText">Login</Typography>
                        </CustomButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}