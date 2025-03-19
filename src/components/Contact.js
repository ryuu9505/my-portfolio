import React, { useState } from 'react';
import ScrollAnimation from './common/ScrollAnimation';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiTistory } from 'react-icons/si';
import {
  ContactSection,
  SectionTitle,
  ContactForm,
  InputField,
  TextArea,
  SubmitButton,
  SocialLinks,
  SocialIcon,
} from './ContactStyles';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직 (예: 이메일 전송 또는 API 호출)
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' }); // 폼 초기화
  };

  return (
    <ContactSection id="contact">
      <ScrollAnimation>
        <SectionTitle>Contact</SectionTitle>
      </ScrollAnimation>
      {/* <ContactForm onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputField
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm> */}

      {/* 소셜 링크 */}
      <ScrollAnimation delay={0.2}>
        <SocialLinks>
          <ScrollAnimation delay={0.3}>
            <SocialIcon href="https://github.com/ryuu9505" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialIcon>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <SocialIcon href="https://linkedin.com/in/xiyoon" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
          </ScrollAnimation>
          <ScrollAnimation delay={0.5}>
            <SocialIcon href="https://instagram.com/xiyoonl" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
          </ScrollAnimation>
          <ScrollAnimation delay={0.6}>
            <SocialIcon href="https://shady-dev.tistory.com/" target="_blank" rel="noopener noreferrer">
              <SiTistory />
            </SocialIcon>
          </ScrollAnimation>
        </SocialLinks>
      </ScrollAnimation>
    </ContactSection>
  );
}

export default Contact;