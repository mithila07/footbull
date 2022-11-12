import { Container, ThemeProvider } from '@mui/material';
import React, { useEffect } from 'react';
import './App.scss';
import AbountSection from './layouts/AboutSection';
import AppStoreSection from './layouts/AppStoreSection';
import CtaSection from './layouts/CtaSection';
import EcosystemSection from './layouts/EcosystemSection';
import Footer from './layouts/Footer';
import ImageGallery from './layouts/ImageGallery';
import MainHeader from './layouts/MainHeader';
import Navbar from './layouts/Navbar';
import PartnerSection from './layouts/PartnersSection';
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
        {/* <ImageGallery /> */}
        <TokenomicsSection />
        <AppStoreSection />
        <RoadmapSection />
        <TeamSection />
        <PartnerSection />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
