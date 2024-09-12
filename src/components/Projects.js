// src/components/Projects.js
import React from 'react';
import {
  ProjectsSection,
  SectionTitle,
  TextContent,
  ProjectList,
  ProjectCard,
  ProjectImageContainer,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectDomain,
  ProjectLink,
  ProjectLinksContainer,
  ProjectTag,
  ProjectTagsContainer,
} from './ProjectsStyles';
import { FaGithub } from 'react-icons/fa'; // GitHub 아이콘 추가
import { SiNotion } from 'react-icons/si'; // Notion 아이콘 추가
import neonLogo from '../assets/neon-logo.png';
import kkomaLogo from '../assets/kkoma-logo.png';

// 프로젝트 데이터
const projects = [
  {
    title: 'NEON',
    description: '누군가를 본뜬 AI와 채팅해보세요.',
    imageUrl: neonLogo,
    githubUrl: 'https://github.com/SteamedPapaya/neon',
    notionUrl: 'https://www.notion.so/xiyoon/f8777a529adc4ae9997a1ae26fca172c?pvs=4', // Notion URL 추가
    domainUrl: 'https://neon7.site/',
    tags: [
      { name: '채팅', url: 'https://www.notion.so/xiyoon/Trust-8fe4874d011a4710b5359d46471226de?pvs=4' },
      { name: '무중단 배포', url: 'https://www.notion.so/xiyoon/Trust-8fe4874d011a4710b5359d46471226de?pvs=4' },
      { name: 'MSA', url: 'https://www.notion.so/xiyoon/STOC-497555a8dba041b8bf3f79da98a2c15e?pvs=4' }
    ],
  },
  {
    title: 'kkoma',
    description: '쉽고 안전한 육아용품 중고거래 플랫폼',
    imageUrl: kkomaLogo,
    githubUrl: 'https://github.com/kkomas/kkoma',
    notionUrl: 'https://www.notion.so/xiyoon/e90084b722a74426b1527c9e85a322b3?pvs=4', // Notion URL 추가
    domainUrl: 'https://kkoma.shop/',
    tags: [
      { name: '빅데이터', url: 'https://www.notion.so/xiyoon/Layette-ee0734edc21643ec9ea1a85da78c768f?pvs=4' },
      { name: '추천', url: 'https://www.notion.so/xiyoon/Layette-ee0734edc21643ec9ea1a85da78c768f?pvs=4' },
    ],
  },
  // 추가 프로젝트 데이터...
];

function Projects() {
    return (
      <ProjectsSection id="projects">
        <SectionTitle>Products</SectionTitle>
        <TextContent>
            다양한 제품을 만들면서 새로운 문제를 해결합니다.
        </TextContent>
        <ProjectList>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
            {/* 이미지 컨테이너로 감싸서 비율 유지 */}
            <ProjectImageContainer>
                <a href={project.domainUrl} target="_blank" rel="noopener noreferrer">
                    <ProjectImage src={project.imageUrl} alt={project.title} />
                </a>
            </ProjectImageContainer>
              <ProjectContent>
                {/* <ProjectTitle>{project.title}</ProjectTitle> */}
                <ProjectDescription>{project.description}</ProjectDescription>
                
                {/* 태그 추가 */}
                <ProjectTagsContainer>
                  {project.tags.map((tag, i) => (
                    <ProjectTag key={i} href={tag.url} target="_blank" rel="noopener noreferrer">
                      {tag.name}
                    </ProjectTag>
                  ))}
                </ProjectTagsContainer>

                {/* 도메인 주소 표시 */}
                {/* <ProjectDomain href={project.domainUrl} target="_blank" rel="noopener noreferrer">
                {new URL(project.domainUrl).hostname}
                </ProjectDomain> */}
                
                <ProjectLinksContainer>
                    {/* GitHub 및 Notion 아이콘 링크 설정 */}
                    <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} /> {/* GitHub 아이콘 */}
                    </ProjectLink>
                    <ProjectLink href={project.notionUrl} target="_blank" rel="noopener noreferrer">
                    <SiNotion size={24} /> {/* Notion 아이콘 */}
                    </ProjectLink>
                </ProjectLinksContainer>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectList>
      </ProjectsSection>
    );
  }

export default Projects;