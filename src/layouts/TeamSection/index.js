import React from "react";
import TitleText from "../../styles/components/TitleText";
import TeamMembersCarousel from "./teamMembersCarousel";
import Wrapper from "../../styles/components/Wrapper";

export default function TeamSection() {

    return (
        <>
            <Wrapper mt="10rem">
                <TitleText variant="h1" align="center" mb="30px">About Team</TitleText>
                
                <TeamMembersCarousel />
            </Wrapper>
        </>
    );
}