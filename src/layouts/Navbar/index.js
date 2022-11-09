import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import NavbarDesktop from "./navbarDesktop";
import NavbarMobile from "./navbarMobile";

export default function Navbar() {
    const theme = useTheme();
    const breakpoint = useMediaQuery(theme.breakpoints.down('md'));

    return ( 
        <>
            {breakpoint ? <NavbarMobile /> : <NavbarDesktop />}
        </>
    );
}