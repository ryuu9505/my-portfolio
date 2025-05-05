import About from '@components/About';
import Contact from '@components/Contact';
import FilmSection from '@components/FilmSection';
import Header from '@components/Header';
import History from '@components/History';
import Projects from '@components/Projects';
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
    </>
  );
}
