import { Container, ThemeProvider } from '@mui/material';
import React, { useEffect } from 'react';
import './App.scss';
import AbountSection from './layouts/AboutSection';
import CtaSection from './layouts/CtaSection';
import EcosystemSection from './layouts/EcosystemSection';
import MainHeader from './layouts/MainHeader';
import Navbar from './layouts/Navbar';
import RoadmapSection from './layouts/RoadmapSection';
import TeamSection from './layouts/TeamSection';
import TokenomicsSection from './layouts/TokenomicsSection';
import footbullTheme from './styles/theme/index'

function App() {

  useEffect(() => {
    document.title = "Footbull landing page"
  }, []);


  return (
    <ThemeProvider theme={footbullTheme}>
      <Container maxWidth="xl">
        <Navbar />
        <MainHeader />
        <AbountSection />
        <EcosystemSection />
        <CtaSection />
        <TokenomicsSection />
        <RoadmapSection />
        <TeamSection />
      </Container>
    </ThemeProvider>
  );
}

export default App;
