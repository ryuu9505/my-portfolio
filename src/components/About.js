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
      <AboutContent>
        {/* 프로필 이미지 */}
        <ProfileImage src={ProfilePic} alt="Profile" /> 
        
        {/* 텍스트 컨텐츠 */}
        <TextContent>
          {/* <h2>About Me</h2> */}
          <p>
            #Web #BigData #AI #Cloud 
          </p>
        </TextContent>
      </AboutContent>
    </AboutSection>
  );
}

export default About;