import {
  awsCloudComputing101Badge,
  awsCloudEssentialsBadge,
  githubBadge,
  hsatBadge,
} from '@assets/certs';
import {
  prismBabyBottle,
  prismDeliveryRobot,
  prismSpeechBubble,
  prismTicket,
  profilePic,
} from '@assets/images';
import { inhaLogo, neubilityLogo, ssafyLogo } from '@assets/logos';
import { CertBadge, TechCard } from '@components/Card';
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
  ContentWrapper,
  HistoryCard,
  HistoryDescription,
  HistoryPeriod,
  HistoryTitle,
  Period,
  Position,
  ProjectCard,
  ProjectContent,
  ProjectDescription,
  ProjectImageContainer,
  ProjectList,
  ProjectTitle,
  TechList,
  TextContent,
  TitleWrapper,
  WhiteSpace,
} from '@styles/CommonStyles';
import { IconButton, IconList } from '@styles/IconStyles';
import { RoundedImage, SquareImage } from '@styles/ImageStyles';
import React from 'react';
import { FaJava } from 'react-icons/fa';
import {
  SiAmazonwebservices,
  SiApachehadoop,
  SiApachekafka,
  SiApachespark,
  SiDjango,
  SiDocker,
  SiHibernate,
  SiInfluxdb,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiRedis,
  SiSpring,
} from 'react-icons/si';

export default function InfoPage() {
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
              <p>조형준</p>
            </TextContent>
          </ScrollAnimation>

          <ScrollAnimation delay={0.6}>
            <TextContent>
              <small>Backend Engineer | Data Engineer</small>
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
              <HistoryCardItem {...item} />
            </ScrollAnimation>
          ))}
        </CardList>
      </Section>

      <FilmSection />

      <Section id="skills">
        <SectionTitle>
          <ScrollAnimation>Skills</ScrollAnimation>
        </SectionTitle>
        <ScrollAnimation>
          {allTechGroups.map((group, groupIdx) => (
            <TechList key={groupIdx}>
              {group.map((tech, index) => (
                <ScrollAnimation key={index} delay={0.3}>
                  <Link url={tech.url}>
                    <TechCard icon={tech.icon} name={tech.name} />
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
        </ScrollAnimation>
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

function HistoryCardItem({
  logo,
  company,
  position,
  description,
  period,
  url,
}) {
  return (
    <Link url={url}>
      <HistoryCard>
        <SquareImage src={logo} alt={company} />
        <ContentWrapper>
          <TitleWrapper>
            <HistoryTitle>{company}</HistoryTitle>
            <Position>{position}</Position>
          </TitleWrapper>
          <HistoryDescription>{description}</HistoryDescription>
          <HistoryPeriod>{period}</HistoryPeriod>
        </ContentWrapper>
      </HistoryCard>
    </Link>
  );
}

const historyData = [
  {
    id: 1,
    logo: neubilityLogo,
    company: '뉴빌리티',
    position: '백엔드 개발',
    description: '로봇 운용/관리 플랫폼 개발',
    period: '2025.02 - 재직 중',
    url: 'https://www.neubility.co.kr',
  },
  {
    id: 2,
    logo: ssafyLogo,
    company: '삼성 청년 SW 아카데미',
    position: '웹 개발 트랙',
    description: '웹 개발 지식 학습',
    period: '2023.07 - 2024.06 (1,600시간)',
    url: 'https://www.ssafy.com',
  },
  {
    id: 3,
    logo: inhaLogo,
    company: '인하대학교',
    position: '정보통신공학과',
    description: '컴퓨터 공학 및 통신 공학 지식 학습',
    period: '2014.03 - 2021.08',
    url: 'https://ice.inha.ac.kr',
  },
];

const projects = [
  {
    title: '자율주행 로봇 운용 플랫폼',
    description: '기능 개발',
    period: '2025.02 ~ 진행 중',
    imageUrl: prismDeliveryRobot,
    githubUrl: 'https://github.com/',
    notionUrl:
      'https://www.notion.so/hyeongjun-dev/1a39683271d08049b1c8d53f1e0ef7c5?pvs=4',
    domainUrl:
      'https://www.notion.so/hyeongjun-dev/1a39683271d08049b1c8d53f1e0ef7c5?pvs=4',
  },
  {
    title: '티켓 예매 시스템',
    description: '개발 / 성능 개선',
    period: '2024.09 ~ 2024.10',
    imageUrl: prismTicket,
    githubUrl: 'https://github.com/buffthis',
    notionUrl:
      'https://www.notion.so/hyeongjun-dev/1a09683271d080e1ba81f9aed75e25f4?pvs=4',
    domainUrl:
      'https://www.notion.so/hyeongjun-dev/1a09683271d080e1ba81f9aed75e25f4?pvs=4',
  },
  {
    title: '그룹 채팅 시스템',
    description: '개발 / 성능 개선',
    period: '2024.08 ~ 2024.09',
    imageUrl: prismSpeechBubble,
    githubUrl: 'https://github.com/buffthis',
    notionUrl:
      'https://www.notion.so/hyeongjun-dev/1b79683271d0805da931f7860644da82?pvs=4',
    domainUrl:
      'https://www.notion.so/hyeongjun-dev/1b79683271d0805da931f7860644da82?pvs=4',
  },
  {
    title: '상품 추천 시스템 (육아용품)',
    description: '개발 / 성능 개선',
    period: '2024.02 ~ 2024.04',
    imageUrl: prismBabyBottle,
    githubUrl: 'https://github.com/samsungacademy/kkoma',
    notionUrl:
      'https://www.notion.so/hyeongjun-dev/1e19683271d080acb379fe9d4fa25177?pvs=4',
    domainUrl:
      'https://www.notion.so/hyeongjun-dev/1e19683271d080acb379fe9d4fa25177?pvs=4',
  },
];

const javaTechs = [
  {
    name: 'Java',
    icon: <FaJava />,
    color: '#007396',
    url: 'https://www.notion.so/hyeongjun-dev/Java-1a09683271d080f58e5cd8abcf99d216?pvs=4',
  },
  {
    name: 'Hibernate',
    icon: <SiHibernate />,
    color: '#59666C',
    url: 'https://www.notion.so/hyeongjun-dev/Hibernate-1a39683271d081c3892fff41a01ca115?pvs=4',
  },
  {
    name: 'Spring',
    icon: <SiSpring />,
    color: '#6DB33F',
    url: 'https://www.notion.so/hyeongjun-dev/Spring-Framework-1a29683271d08195b194d2f0e0e2480e?pvs=4',
  },
];

const pythonTechs = [
  {
    name: 'Python',
    icon: <SiPython />,
    color: '#3776AB',
    url: 'https://www.notion.so/hyeongjun-dev/Python-1a09683271d0818b84c3c1e279d6f1cb?pvs=4',
  },
  {
    name: 'Django',
    icon: <SiDjango />,
    color: '#092E20',
    url: 'https://www.notion.so/hyeongjun-dev/Django-1a39683271d081f49c00e66ff9ab724a?pvs=4',
  },
];

const rdbTechs = [
  {
    name: 'MySQL',
    icon: <SiMysql />,
    color: '#4479A1',
    url: 'https://www.notion.so/hyeongjun-dev/MySQL-1a29683271d08196862ac54643a547b2?pvs=4',
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql />,
    color: '#336791',
    url: 'https://www.notion.so/hyeongjun-dev/PostgreSQL-1a29683271d081c8a47ed972311ef0c6?pvs=4',
  },
];

const nosqlTechs = [
  {
    name: 'Redis',
    icon: <SiRedis />,
    color: '#DC382D',
    url: 'https://www.notion.so/hyeongjun-dev/Redis-1a29683271d08107a142f1241521aae6?pvs=4',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
    color: '#47A248',
    url: 'https://www.notion.so/hyeongjun-dev/MongoDB-1a29683271d08141a44ae86ad5106d7f?pvs=4',
  },
  {
    name: 'InfluxDB',
    icon: <SiInfluxdb />,
    color: '#22ADF6',
    url: 'https://www.notion.so/hyeongjun-dev/InfluxDB-1eb9683271d0805184e5c3f827e5b0f3?pvs=4',
  },
];

const bigDataTechs = [
  {
    name: 'RabbitMQ',
    icon: <SiRabbitmq />,
    color: '#FF6600',
    url: 'https://www.notion.so/hyeongjun-dev/RabbitMQ-1a29683271d081fba9b3fcf7e2670a7d?pvs=4',
  },
  {
    name: 'Kafka',
    icon: <SiApachekafka />,
    color: '#231F20',
    url: 'https://www.notion.so/hyeongjun-dev/Kafka-1a29683271d081b2811dcbb3fb0a4278?pvs=4',
  },
  {
    name: 'Hadoop',
    icon: <SiApachehadoop />,
    color: '#FF652F',
    url: 'https://www.notion.so/hyeongjun-dev/Hadoop-1a39683271d0812ca104c72dcd502734?pvs=4',
  },
  {
    name: 'Spark',
    icon: <SiApachespark />,
    color: '#E25A1C',
    url: 'https://www.notion.so/hyeongjun-dev/Spark-1a39683271d081febe69c27936df777e?pvs=4',
  },
];

const infraTechs = [
  {
    name: 'Docker',
    icon: <SiDocker />,
    color: '#2496ED',
    url: 'https://www.notion.so/hyeongjun-dev/Docker-1a29683271d0810ba14bde0a9c3e04e5?pvs=4',
  },
  {
    name: 'AWS',
    icon: <SiAmazonwebservices />,
    color: '#FF9900',
    url: 'https://www.notion.so/hyeongjun-dev/AWS-1a39683271d081d48736d004732c9c3e?pvs=4',
  },
];

const certBadges = [
  awsCloudComputing101Badge,
  awsCloudEssentialsBadge,
  githubBadge,
  hsatBadge,
];

const socialData = [
  { id: 1, icon: 'github', href: 'https://github.com/ryuu9505' },
  { id: 2, icon: 'linkedin', href: 'https://linkedin.com/in/xiyoon' },
  { id: 3, icon: 'instagram', href: 'https://instagram.com/xiyoonl' },
  { id: 4, icon: 'tistory', href: 'https://shady-dev.tistory.com/' },
];

const allTechGroups = [
  javaTechs,
  pythonTechs,
  rdbTechs,
  nosqlTechs,
  bigDataTechs,
  infraTechs,
];
