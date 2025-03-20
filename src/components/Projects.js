// src/components/Projects.js
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
  ProjectLink,
  ProjectLinksContainer,
  ProjectTag,
  ProjectTagsContainer,
  ProjectTitle,
} from './ProjectsStyles';
import { FaGithub } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import neonLogo from '../assets/neon-logo.png';
import kkomaLogo from '../assets/kkoma-logo.png';

// 프로젝트 데이터
const projects = [
  {
    title: '네온',
    description: '온라인 이벤트 플랫폼',
    imageUrl: neonLogo,
    githubUrl: 'https://github.com/buffthis',
    notionUrl: 'https://www.notion.so/hyeongjun-dev/1a09683271d081a2ab96d306ca0af8c9?pvs=4',
    domainUrl: 'https://www.notion.so/hyeongjun-dev/1a09683271d081a2ab96d306ca0af8c9?pvs=4',
    tags: [
      { name: '채팅', url: 'https://www.notion.so/hyeongjun-dev/1b79683271d0805da931f7860644da82?pvs=4' },
      { name: '예매', url: 'https://www.notion.so/hyeongjun-dev/1a09683271d080e1ba81f9aed75e25f4?pvs=4' },
    ],
  },
  {
    title: '꼬마',
    description: '맞춤형 육아용품 중고거래 플랫폼',
    imageUrl: kkomaLogo,
    githubUrl: 'https://github.com/samsungacademy/kkoma',
    notionUrl: 'https://www.notion.so/hyeongjun-dev/1ab9683271d08060b163c4916d696f17?pvs=4',
    domainUrl: 'https://www.notion.so/hyeongjun-dev/1ab9683271d08060b163c4916d696f17?pvs=4',
    tags: [
      { name: '빅데이터', url: 'https://www.notion.so/hyeongjun-dev/1bb9683271d080b38097d28e6bd9863d?pvs=4' },
      { name: '추천', url: 'https://www.notion.so/hyeongjun-dev/1bb9683271d080959b45f2023f1dbf31?pvs=4' },
    ],
  },
  // 추가 프로젝트 데이터...
];

function Projects() {
  return (
    <ProjectsSection id="projects">
      <ScrollAnimation>
        <SectionTitle>Products</SectionTitle>
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <TextContent>
          다양한 제품을 만들면서 새로운 문제에 도전합니다.
        </TextContent>
      </ScrollAnimation>
      <ProjectList>
        {projects.map((project, index) => (
          <ScrollAnimation key={index} delay={0.2 + index * 0.1}>
            <ProjectCard>
              <ProjectImageContainer>
                <a href={project.domainUrl} target="_blank" rel="noopener noreferrer">
                  <ProjectImage src={project.imageUrl} alt={project.title} />
                </a>
              </ProjectImageContainer>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectTagsContainer>
                  {project.tags.map((tag, i) => (
                    <ProjectTag key={i} href={tag.url} target="_blank" rel="noopener noreferrer">
                      {tag.name}
                    </ProjectTag>
                  ))}
                </ProjectTagsContainer>
                
                <ProjectLinksContainer>
                    <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                    </ProjectLink>
                    <ProjectLink href={project.notionUrl} target="_blank" rel="noopener noreferrer">
                    <SiNotion size={24} />
                    </ProjectLink>
                </ProjectLinksContainer>
              </ProjectContent>
            </ProjectCard>
          </ScrollAnimation>
        ))}
      </ProjectList>
    </ProjectsSection>
  );
}

export default Projects;