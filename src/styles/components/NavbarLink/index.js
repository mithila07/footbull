import { Link, styled } from "@mui/material";

const NavbarLink = styled(Link)(({theme}) => ({
    textDecoration: "none",
    color: "#ececec",
    fontSize: "20px",
    lineHeight: "24px",
    [theme.breakpoints.down('md')]: {
        fontSize: "16px",
        lineHeight: "20px"
    },
    letterSpacing: "0.02em",
    transition: "all 0.35s ease-in-out",
    ':hover': {
        background: "linear-gradient(to right, #4E34EE 30%, #7d34ed 60%, #b235ed 10%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    }
}));


export default NavbarLink;