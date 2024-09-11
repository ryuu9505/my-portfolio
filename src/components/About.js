import React from 'react';
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
        {/* 프로필 이미지 */}
        <ProfileImage src={ProfilePic} alt="Profile" />
    </AboutSection>
  );
}

export default About;