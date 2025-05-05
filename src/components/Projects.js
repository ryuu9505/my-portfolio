import {
  prismBabyBottle,
  prismDeliveryRobot,
  prismSpeechBubble,
  prismTicket,
} from '@assets/images';
import HoverImage from '@components/common/HoverImage';
import ScrollAnimation from '@components/common/ScrollAnimation';
import {
  Period,
  ProjectCard,
  ProjectContent,
  ProjectDescription,
  ProjectImageContainer,
  ProjectList,
  ProjectsSection,
  ProjectTitle,
  SectionTitle,
  TextContent,
} from '@styles/ProjectsStyles';
import React from 'react';

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
    tags: [
      {
        name: '기술 전환',
        url: 'https://www.notion.so/hyeongjun-dev/1b79683271d080e38e8ef91f186574c6?pvs=4',
      },
    ],
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
    tags: [
      {
        name: '채팅',
        url: 'https://www.notion.so/hyeongjun-dev/1b79683271d0805da931f7860644da82?pvs=4',
      },
      {
        name: '예매',
        url: 'https://www.notion.so/hyeongjun-dev/1a09683271d080e1ba81f9aed75e25f4?pvs=4',
      },
    ],
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
    tags: [
      {
        name: '채팅',
        url: 'https://www.notion.so/hyeongjun-dev/1b79683271d0805da931f7860644da82?pvs=4',
      },
      {
        name: '예매',
        url: 'https://www.notion.so/hyeongjun-dev/1a09683271d080e1ba81f9aed75e25f4?pvs=4',
      },
    ],
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
    tags: [
      {
        name: '빅데이터',
        url: 'https://www.notion.so/hyeongjun-dev/1bb9683271d080b38097d28e6bd9863d?pvs=4',
      },
      {
        name: '추천',
        url: 'https://www.notion.so/hyeongjun-dev/1bb9683271d080959b45f2023f1dbf31?pvs=4',
      },
    ],
  },
];

function Projects() {
  return (
    <ProjectsSection id="projects">
      <ScrollAnimation>
        <SectionTitle>Projects</SectionTitle>
      </ScrollAnimation>
      <ScrollAnimation delay={0.15}>
        <TextContent></TextContent>
      </ScrollAnimation>
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
    </ProjectsSection>
  );
}

export default Projects;
