import { ScrollAnimation } from '@styles/AnimationStyles';
import {
  ContactSection,
  SectionTitle,
  SocialIcon,
  SocialLinks,
} from '@styles/ContactStyles';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiTistory } from 'react-icons/si';

function Contact() {
  return (
    <ContactSection id="contact">
      <ScrollAnimation>
        <SectionTitle>Contact</SectionTitle>
      </ScrollAnimation>

      {/* 소셜 링크 */}
      <ScrollAnimation delay={0.2}>
        <SocialLinks>
          <ScrollAnimation delay={0.3}>
            <SocialIcon
              href="https://github.com/ryuu9505"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </SocialIcon>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <SocialIcon
              href="https://linkedin.com/in/xiyoon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialIcon>
          </ScrollAnimation>
          <ScrollAnimation delay={0.5}>
            <SocialIcon
              href="https://instagram.com/xiyoonl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialIcon>
          </ScrollAnimation>
          <ScrollAnimation delay={0.6}>
            <SocialIcon
              href="https://shady-dev.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTistory />
            </SocialIcon>
          </ScrollAnimation>
        </SocialLinks>
      </ScrollAnimation>
    </ContactSection>
  );
}

export default Contact;
