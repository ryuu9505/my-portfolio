import {
  allTechGroups,
  certBadges,
  historyData,
  projects,
  socialData,
} from '@assets/data';
import { profilePic } from '@assets/images';
import { CertBadge, HistoryCardItem, TechCard } from '@components/Card';
import FilmSection from '@components/FilmSection';
import Footer from '@components/Footer';
import Header from '@components/Header';
import HoverImage from '@components/HoverImage';
import Link from '@components/Link';
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
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '@/api';

export default function InfoPage() {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState({ name: '', bio: '' });

  useEffect(() => {
    if (!userId) return;
    (async () => {
      try {
        const res = await api.get(`/users/${userId}`);
        setUserInfo({ name: res.data.name, bio: res.data.bio });
      } catch (err) {
        setUserInfo({ name: '이름을 불러올 수 없음', bio: '정보를 불러올 수 없음' });
      }
    })();
  }, [userId]);

  return (
    <>
      <Header />

      <Section id="about" colorScheme="dark">
        <AboutContent>
          <ScrollAnimation delay={0.2}>
            <PulseAnimation>
              <RoundedImage src={profilePic} alt="Profile" />
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

      <Section id="history">
        <SectionTitle>
          <ScrollAnimation>History</ScrollAnimation>
        </SectionTitle>
        <CardList>
          {historyData.map((item, index) => (
            <ScrollAnimation key={item.id} delay={0.3}>
              <HistoryCardItem {...item} miniCards={item.miniCards} />
            </ScrollAnimation>
          ))}
        </CardList>
      </Section>

      <FilmSection />

      <Section id="skills">
        <SectionTitle>
          <ScrollAnimation>Skills</ScrollAnimation>
        </SectionTitle>

        {allTechGroups.map((group, groupIdx) => (
          <TechList key={groupIdx}>
            {group.map((tech, index) => (
              <ScrollAnimation key={index} delay={0.3}>
                <Link url={tech.url}>
                  <TechCard
                    icon={tech.icon}
                    name={tech.name}
                    level={tech.level}
                  />
                </Link>
              </ScrollAnimation>
            ))}
          </TechList>
        ))}

        <TechList>
          {certBadges.map((cert, idx) => (
            <ScrollAnimation key={`cert-badge-${idx}`} delay={0.3}>
              <CertBadge img={cert.img} url={cert.url} alt="cert badge" />
            </ScrollAnimation>
          ))}
        </TechList>
      </Section>

      <WhiteSpace />

      <Section id="projects">
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

      <WhiteSpace />

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
