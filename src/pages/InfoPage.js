import About from '@components/About';
import Contact from '@components/Contact';
import Footer from '@components/Footer';
import Header from '@components/Header';
import History from '@components/History';
import Projects from '@components/Projects';
import FilmSection from '@components/section/FilmSection';
import TechStack from '@components/TechStack';
import { WhiteSpace } from '@styles/CommonStyles';
import React from 'react';

export default function InfoPage() {
  return (
    <>
      <Header />
      <About />
      <WhiteSpace />
      <History />
      <FilmSection />
      <TechStack />
      <WhiteSpace />
      <Projects />
      <WhiteSpace />
      <Contact />
      <Footer />
    </>
  );
}
