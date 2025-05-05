import { profilePic } from '@assets/images';
import { AboutContent, AboutSection, TextContent } from '@styles/AboutStyles';
import { PulseAnimation, ScrollAnimation } from '@styles/AnimationStyles';
import { RoundedImage } from '@styles/ImageStyles';
import React from 'react';

function About() {
  return (
    <AboutSection id="about">
      <AboutContent>
        <ScrollAnimation delay={0.2}>
          <PulseAnimation>
            <RoundedImage src={profilePic} alt="Profile" />
          </PulseAnimation>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <TextContent>
            <p>조형준</p>
          </TextContent>
        </ScrollAnimation>

        <ScrollAnimation delay={0.6}>
          <TextContent>
            <small>Backend Engineer | Data Engineer</small>
          </TextContent>
        </ScrollAnimation>
      </AboutContent>
    </AboutSection>
  );
}

export default About;
