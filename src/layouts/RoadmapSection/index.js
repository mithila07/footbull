import React from "react";
import TitleText from "../../styles/components/TitleText";
import Roadmap from "./roadmap";
import Wrapper from "../../styles/components/Wrapper";

export default function RoadmapSection() {

    return (
        <>
            <Wrapper mt="10rem">
                <TitleText variant="h1" align="center" mb="30px"><span className="gradientText">Roadmap</span> x Expansion Plans</TitleText>
                
                <Roadmap />
            </Wrapper>
        </>
    );
}