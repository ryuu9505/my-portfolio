import {
  socialData,
} from '@assets/data';
import { profilePic } from '@assets/images';
import { HistoryCardItem, TechCard } from '@components/Card';
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
  SkillCardList,
  TextContent,
} from '@styles/CommonStyles';
import { IconButton, IconList } from '@styles/IconStyles';
import { RoundedImage } from '@styles/ImageStyles';
import { formatDate } from '@utils/format';
import isEmpty from '@utils/isEmpty';
import { sectionConfig } from '@utils/sections';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '@/api';
import Divider from '@/components/Divider';

export default function UserPage() {
  const { username } = useParams();
  const [userInfo, setUserInfo] = useState({
    id: '',
    name: '',
    bio: '',
    profileImage: { url: '', altText: '' },
    skills: [],
    projects: [],
    posts: [],
  });
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    if (!username) return;
    (async () => {
      try {
        const res = await api.get(`/users/by-username/${username}`);
        setUserInfo({
          id: res.data.id,
          name: res.data.name,
          bio: res.data.bio,
          profileImage: res.data.profileImage 
            ? res.data.profileImage 
            : { url: '', altText: '' },
          skills: Array.isArray(res.data.skills) ? res.data.skills : [],
          projects: Array.isArray(res.data.projectSummaries) ? res.data.projectSummaries : [],
          posts: Array.isArray(res.data.postSummaries) ? res.data.postSummaries : [],
        });
      } catch (err) {
        setUserInfo({ 
          id: '',
          name: '이름을 불러올 수 없음', 
          bio: '정보를 불러올 수 없음', 
          profileImage: { url: '', altText: '' },
          skills: [],
          projects: [],
          posts: [],
        });
      }
    })();
  }, [username]);

  useEffect(() => {
    if (!userInfo.id) return;
    (async () => {
      try {
        const res = await api.get(`/careers?userId=${userInfo.id}`);
        setCareers(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        setCareers([]);
      }
    })();
  }, [userInfo.id]);

  const sectionVisibility = {};
  sectionConfig.forEach(section => {
    if (section.always) {
      sectionVisibility[section.id] = true;
    } else if (section.id === 'history') {
      sectionVisibility[section.id] = !isEmpty(careers);
    } else {
      sectionVisibility[section.id] = !isEmpty(userInfo[section.key]);
    }
  });

  return (
    <>
      <Header sectionVisibility={sectionVisibility} />

      <Section 
        id="about" 
        colorScheme="light"
      >
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

      <Divider visible={!isEmpty(careers)} />
      <Section 
        id="history"
        visible={!isEmpty(careers)}
      >
        <SectionTitle>
          <ScrollAnimation>History</ScrollAnimation>
        </SectionTitle>

        <CardList>
          {careers.map((item, index) => (
            <ScrollAnimation key={index} delay={0.3}>
              <HistoryCardItem {...item} />
            </ScrollAnimation>
          ))}
        </CardList>
      </Section>

      <Divider visible={!isEmpty(userInfo.skills)} />
      <Section 
        id="skills" 
        visible={!isEmpty(userInfo.skills)}
      >
        <SectionTitle>
          <ScrollAnimation>Skills</ScrollAnimation>
        </SectionTitle>

        <SkillCardList>
          {userInfo.skills.map((skill, idx) => (
            <ScrollAnimation key={skill.id} delay={0.3}>
              <TechCard
                url={skill.tool.logo.url}
                name={skill.tool.name}
                level={skill.level}
              />
            </ScrollAnimation>
          ))}
        </SkillCardList>
      </Section>

      <Divider visible={!isEmpty(userInfo.projects)} />
      <Section 
        id="projects" 
        visible={!isEmpty(userInfo.projects)}
      >
        <SectionTitle>
          <ScrollAnimation>Projects</ScrollAnimation>
        </SectionTitle>

        <ProjectList>
          {userInfo.projects.map((project, index) => (
            <ProjectCard key={index}>
              <ScrollAnimation delay={0.3}>
                <ProjectImageContainer>
                  <HoverImage
                    baseImage={project.thumbnail?.url}
                    alt={project.title}
                    link={project.externalUrl}
                    showButton={false}
                  />
                </ProjectImageContainer>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.subtitle}</ProjectDescription>
                  <Period>{project.startDate}</Period>
                </ProjectContent>
              </ScrollAnimation>
            </ProjectCard>
          ))}
        </ProjectList>
      </Section>

      <Divider visible={!isEmpty(userInfo.posts)} />
      <Section 
        id="posts" 
        visible={!isEmpty(userInfo.posts)}
      >
        <SectionTitle>
          <ScrollAnimation>Posts</ScrollAnimation>
        </SectionTitle>

        <ProjectList>
          {userInfo.posts.map((post, index) => (
            <ProjectCard key={index} width="256px">
              <ScrollAnimation delay={0.3}>
                <ProjectImageContainer>
                  <HoverImage
                    baseImage={post.thumbnail?.url}
                    alt={post.title}
                    link={post.externalUrl}
                    showButton={false}
                  />
                </ProjectImageContainer>
                <ProjectContent>
                  <ProjectTitle fontSize="1.0rem">{post.title}</ProjectTitle>
                  <ProjectDescription fontSize="0.8rem">{post.subtitle}</ProjectDescription>
                  <Period fontSize="0.8rem" fontWeight="100">{formatDate(post.createdAt)}</Period>
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
