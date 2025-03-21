import React from 'react';
import ScrollAnimation from './common/ScrollAnimation';
import {
  ProjectsSection,
  SectionTitle,
  TextContent,
  ProjectList,
  ProjectCard,
  ProjectImageContainer,
  ProjectImage,
  ProjectContent,
  ProjectDescription,
  ProjectTitle,
} from './ProjectsStyles';
import neonThumbnail from '../assets/neon-thumbnail.png';
import kkomaThumbnail from '../assets/kkoma-thumbnail.png';
import neubiegoThumbnail from '../assets/neubiego-thumbnail.png';
import neubieorderThumbnail from '../assets/neubieorder-thumbnail.png';

// 프로젝트 데이터
const projects = [
  {
    title: 'NEON',
    description: '온라인 이벤트 플랫폼',
    imageUrl: neonThumbnail,
    githubUrl: 'https://github.com/buffthis',
    notionUrl: 'https://www.notion.so/hyeongjun-dev/1a09683271d081a2ab96d306ca0af8c9?pvs=4',
    domainUrl: 'https://www.notion.so/hyeongjun-dev/1a09683271d081a2ab96d306ca0af8c9?pvs=4',
    tags: [
      { name: '채팅', url: 'https://www.notion.so/hyeongjun-dev/1b79683271d0805da931f7860644da82?pvs=4' },
      { name: '예매', url: 'https://www.notion.so/hyeongjun-dev/1a09683271d080e1ba81f9aed75e25f4?pvs=4' },
    ],
  },
  {
    title: 'KKOMA',
    description: '육아용품 중고거래 플랫폼',
    imageUrl: kkomaThumbnail,
    githubUrl: 'https://github.com/samsungacademy/kkoma',
    notionUrl: 'https://www.notion.so/hyeongjun-dev/1ab9683271d08060b163c4916d696f17?pvs=4',
    domainUrl: 'https://www.notion.so/hyeongjun-dev/1ab9683271d08060b163c4916d696f17?pvs=4',
    tags: [
      { name: '빅데이터', url: 'https://www.notion.so/hyeongjun-dev/1bb9683271d080b38097d28e6bd9863d?pvs=4' },
      { name: '추천', url: 'https://www.notion.so/hyeongjun-dev/1bb9683271d080959b45f2023f1dbf31?pvs=4' },
    ],
  },
  {
    title: 'NEUBIE-GO',
    description: '자율주행 로봇 운용 플랫폼',
    imageUrl: neubiegoThumbnail,
    githubUrl: 'https://github.com/',
    notionUrl: 'https://www.notion.so/hyeongjun-dev/1a39683271d08049b1c8d53f1e0ef7c5?pvs=4',
    domainUrl: 'https://www.notion.so/hyeongjun-dev/1a39683271d08049b1c8d53f1e0ef7c5?pvs=4',
    tags: [
      { name: '기술 전환', url: 'https://www.notion.so/hyeongjun-dev/1b79683271d080e38e8ef91f186574c6?pvs=4' },
    ],
  },
  {
    title: 'NEUBIE-ORDER',
    description: '자율주행 로봇 배달 플랫폼',
    imageUrl: neubieorderThumbnail,
    githubUrl: 'https://github.com/',
    notionUrl: 'https://www.notion.so/hyeongjun-dev/1a39683271d080ceb0fae753db8deccb?pvs=4',
    domainUrl: 'https://www.notion.so/hyeongjun-dev/1a39683271d080ceb0fae753db8deccb?pvs=4',
    tags: [
      { name: '배달', url: 'https://www.notion.so/hyeongjun-dev/1a39683271d080ceb0fae753db8deccb?pvs=4' },
    ],
  },
];

function Projects() {
  return (
    <ProjectsSection id="projects">
      <ScrollAnimation>
        <SectionTitle>Products</SectionTitle>
      </ScrollAnimation>
      <ScrollAnimation delay={0.15}>
        <TextContent>
          Taking on new challenges.
        </TextContent>
      </ScrollAnimation>
      <ProjectList>
        {projects.map((project, index) => (
          <ScrollAnimation key={index} delay={0.3}>
            <ProjectCard>
              <ProjectImageContainer>
                <a href={project.domainUrl} target="_blank" rel="noopener noreferrer">
                  <ProjectImage src={project.imageUrl} alt={project.title} />
                </a>
              </ProjectImageContainer>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectContent>
            </ProjectCard>
          </ScrollAnimation>
        ))}
      </ProjectList>
    </ProjectsSection>
  );
}

export default Projects;