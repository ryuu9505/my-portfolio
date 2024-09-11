import React, { useState } from 'react';
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
      <SectionTitle>Contact</SectionTitle>
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
      <SocialLinks>
        <SocialIcon href="https://github.com/ryuu9505" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com/in/xiyoon" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://instagram.com/xiyoonl" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="https://shady-dev.tistory.com/" target="_blank" rel="noopener noreferrer">
          <SiTistory />
        </SocialIcon>
      </SocialLinks>
    </ContactSection>
  );
}

export default Contact;