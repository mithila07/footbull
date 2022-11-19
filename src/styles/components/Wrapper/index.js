import { Box, styled } from "@mui/material";


const Wrapper = styled(Box)(({theme}) => ({
    paddingInline: '7rem',
    [theme.breakpoints.down('lg')]: {
        paddingInline: '4rem',
    },
    [theme.breakpoints.down('sm')]: {
        paddingInline: '1rem',
    },
}));

export default Wrapper