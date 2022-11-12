import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)(() => ({
        background: "transparent",
        borderRadius: 10,
        border: 0,
        color: "white",
        fontWeight: 600,
        fontVariationSettings: `"wght" 600`,
        lineHeight: "28px",
        letterSpacing: "0.02em",
        textTransform: "unset",
        width: "fit-content",
        height: 56,
        padding: "0 30px",
        boxShadow: "0 10px 22px 0px rgba(128, 107, 255, 0.25)",
        position: "relative",
        '&::after': {
            position: "absolute",
            content: '""',
            borderRadius: "10px",
            background: "linear-gradient(115.46deg, #4E34EE 0%, #B235ED 102.89%)",
            height: "100%",
            width: "100%",
            inset: 0,
            zIndex: 1
        },
        '&::before': {
            position: "absolute",
            content: '""',
            borderRadius: "10px",
            border: "2px solid transparent",
            background: "linear-gradient(to right, #4E34EE 0%, #B235ED 100%) border-box",
            WebkitMask:  "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            height: 52,
            width: "calc(100% - 4px)",
            inset: "11px 0 0 12px",
            transition: "0.15s ease-in-out all",
            zIndex: 0
        },
        '&:hover': {
            boxShadow: "0 10px 22px 0px rgba(128, 107, 255, 0.25)"
        },
    }));


export default CustomButton;