import React from 'react';
import ScrollAnimation from './common/ScrollAnimation';
import {
  AboutSection,
  AboutContent,
  ProfileImage,
  TextContent,
} from './AboutStyles';
import ProfilePic from '../assets/profile.png'; // 프로필 사진 추가

function About() {
  return (
    <AboutSection id="about">
      <AboutContent>
        <ScrollAnimation delay={0.2}>
          <ProfileImage src={ProfilePic} alt="Profile" />
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.4}>
          <TextContent>
            <p>
              조형준
            </p>
          </TextContent>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.6}>
          <TextContent>
            <small>Backend Engineer</small>
          </TextContent>
        </ScrollAnimation>
      </AboutContent>
    </AboutSection>
  );
}

export default About;