import React from "react";
import TitleText from "../../styles/components/TitleText";
import MapAndData from "./mapAndData";
import Wrapper from "../../styles/components/Wrapper";

export default function TokenomicsSection() {

    return (
        <>
            <Wrapper mt="10rem">
                <TitleText variant="h1" align="center" mb="30px">Tokenomics</TitleText>

                <MapAndData />
            </Wrapper>
        </>
    );
}