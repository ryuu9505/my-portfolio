import React from 'react';
import Header from '@components/Header';
import About from '@components/About';
import History from '@components/History';
import TechStack from '@components/TechStack';
import Projects from '@components/Projects';
import Contact from '@components/Contact';
import FilmSection from '@components/FilmSection';
import { WhiteSpace } from '@styles/CommonStyles';

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