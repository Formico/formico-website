import React from 'react'

import FancyBackground from '../components/FancyBackground';
import Header from '../components/Header';
import Splash from '../components/Splash';
import Team from '../components/Team';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import TechLove from '../components/TechLove';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Layout from '../layouts';

const IndexPage = ({ ctaUrl }) => (
  <Layout>
    <div style={{ position: 'relative', background: '#141433' }}>
      <FancyBackground />
      <Header />
      <Splash ctaUrl={ ctaUrl }/>
      <Team />
      <Process />
      <Pricing />
      <TechLove />
      <Contact />
      <Footer />
    </div>
  </Layout>
)

export default IndexPage
