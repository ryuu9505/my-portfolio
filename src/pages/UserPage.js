import {
  certBadges,
  posts,
  projects,
  socialData,
} from '@assets/data';
import { profilePic } from '@assets/images';
import { CertBadge, HistoryCardItem, TechCard } from '@components/Card';
import FilmSection from '@components/FilmSection';
import Footer from '@components/Footer';
import Header from '@components/Header';
import HoverImage from '@components/HoverImage';
import { Section, SectionTitle } from '@components/Section';
import { PulseAnimation, ScrollAnimation } from '@styles/AnimationStyles';
import {
  AboutContent,
  CardList,
  Period,
  ProjectCard,
  ProjectContent,
  ProjectDescription,
  ProjectImageContainer,
  ProjectList,
  ProjectTitle,
  TechList,
  TextContent,
  WhiteSpace,
} from '@styles/CommonStyles';
import { IconButton, IconList } from '@styles/IconStyles';
import { RoundedImage } from '@styles/ImageStyles';
import isEmpty from '@utils/isEmpty';
import { sectionConfig } from '@utils/sections';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '@/api';

export default function UserPage() {
  const { username } = useParams();
  const [userInfo, setUserInfo] = useState({
    name: '',
    bio: '',
    profileImage: { url: '', altText: '' },
    careers: [],
    skills: [],
  });

  useEffect(() => {
    if (!username) return;
    (async () => {
      try {
        const res = await api.get(`/users/by-username/${username}`);
        setUserInfo({
          name: res.data.name,
          bio: res.data.bio,
          profileImage: res.data.profileImage 
            ? res.data.profileImage 
            : { url: '', altText: '' },
          careers: Array.isArray(res.data.careers) ? res.data.careers : [],
          skills: Array.isArray(res.data.skills) ? res.data.skills : [],
        });
      } catch (err) {
        setUserInfo({ 
          name: '이름을 불러올 수 없음', 
          bio: '정보를 불러올 수 없음', 
          profileImage: { url: '', altText: '' },
          careers: [],
          skills: [],
        });
      }
    })();
  }, [username]);

  const sectionVisibility = {};
  sectionConfig.forEach(section => {
    if (section.always) {
      sectionVisibility[section.id] = true;
    } else {
      sectionVisibility[section.id] = !isEmpty(userInfo[section.key]);
    }
  });

  return (
    <>
      <Header sectionVisibility={sectionVisibility} />

      <Section id="about" colorScheme="dark">
        <AboutContent>
          <ScrollAnimation delay={0.2}>
            <PulseAnimation>
              <RoundedImage 
                src={userInfo.profileImage?.url || profilePic} 
                alt={userInfo.profileImage?.altText || 'Profile'} 
              />
            </PulseAnimation>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <TextContent>
              <p>{userInfo.name}</p>
            </TextContent>
          </ScrollAnimation>

          <ScrollAnimation delay={0.6}>
            <TextContent>
              <small>{userInfo.bio}</small>
            </TextContent>
          </ScrollAnimation>
        </AboutContent>
      </Section>

      <WhiteSpace />

      <Section 
        id="history"
        visible={!isEmpty(userInfo.careers)}
      >
        <SectionTitle>
          <ScrollAnimation>History</ScrollAnimation>
        </SectionTitle>
        <CardList>
          {userInfo.careers.map((item, index) => (
            <ScrollAnimation key={index} delay={0.3}>
              <HistoryCardItem {...item} />
            </ScrollAnimation>
          ))}
        </CardList>
      </Section>

      <WhiteSpace visible={!isEmpty(userInfo.careers)} />

      <Section
        id="skills"
        visible={!isEmpty(userInfo.skills)}
      >
        <SectionTitle>
          <ScrollAnimation>Skills</ScrollAnimation>
        </SectionTitle>

        <TechList>
          {userInfo.skills.map((skill, idx) => (
            <ScrollAnimation key={skill.id} delay={0.3}>
              <TechCard
                url={skill.tool.logo.url}
                name={skill.tool.name}
                level={skill.level}
              />
            </ScrollAnimation>
          ))}
        </TechList>

        <TechList>
          {certBadges.map((cert, idx) => (
            <ScrollAnimation key={`cert-badge-${idx}`} delay={0.3}>
              <CertBadge img={cert.img} url={cert.url} alt="cert badge" />
            </ScrollAnimation>
          ))}
        </TechList>
      </Section>

      <WhiteSpace visible={!isEmpty(userInfo.skills)} />

      <Section id="projects" visible={!isEmpty(userInfo.projects)}>
        <SectionTitle>
          <ScrollAnimation>Projects</ScrollAnimation>
        </SectionTitle>
        <ProjectList>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ScrollAnimation delay={0.3}>
                <ProjectImageContainer>
                  <HoverImage
                    baseImage={project.imageUrl}
                    alt={project.title}
                    link={project.domainUrl}
                    showButton={false}
                  />
                </ProjectImageContainer>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <Period>{project.period}</Period>
                </ProjectContent>
              </ScrollAnimation>
            </ProjectCard>
          ))}
        </ProjectList>
      </Section>

      <WhiteSpace visible={!isEmpty(userInfo.projects)} />

      <Section id="posts" visible={!isEmpty(userInfo.posts)}>
        <SectionTitle>
          <ScrollAnimation>Posts</ScrollAnimation>
        </SectionTitle>
        <ProjectList>
          {posts.map((post, index) => (
            <ProjectCard key={index} width="200px">
              <ScrollAnimation delay={0.3}>
                <ProjectImageContainer>
                  <HoverImage
                    baseImage={post.imageUrl}
                    alt={post.title}
                    link={post.domainUrl}
                    showButton={false}
                  />
                </ProjectImageContainer>
                <ProjectContent>
                  <ProjectTitle fontSize="1.0rem">{post.title}</ProjectTitle>
                  <Period>{post.createdAt}</Period>
                </ProjectContent>
              </ScrollAnimation>
            </ProjectCard>
          ))}
        </ProjectList>
      </Section>

      <FilmSection />

      <Section id="contact" colorScheme="dark">
        <SectionTitle colorScheme="dark">
          <ScrollAnimation>Contact</ScrollAnimation>
        </SectionTitle>
        <IconList>
          {socialData.map(({ id, icon, href }, idx) => (
            <ScrollAnimation key={id} delay={0.3 + 0.1 * idx}>
              <IconButton icon={icon} href={href} />
            </ScrollAnimation>
          ))}
        </IconList>
      </Section>

      <Footer />
    </>
  );
}
