import { profilePic } from '@assets/images'; // 프로필 사진 추가
import ScrollAnimation from '@components/common/ScrollAnimation';
import {
  AboutContent,
  AboutSection,
  ProfileImage,
  TextContent,
} from '@styles/AboutStyles';
import React from 'react';

function About() {
  return (
    <AboutSection id="about">
      <AboutContent>
        <ScrollAnimation delay={0.2}>
          <ProfileImage src={profilePic} alt="Profile" />
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
