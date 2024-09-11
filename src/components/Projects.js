// src/components/Projects.js
import React from 'react';
import {
  ProjectsSection,
  SectionTitle,
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
} from './ProjectsStyles';
import { FaGithub } from 'react-icons/fa'; // GitHub 아이콘 추가
import { SiNotion } from 'react-icons/si'; // Notion 아이콘 추가

// 프로젝트 데이터
const projects = [
  {
    title: 'NEON',
    description: '믿을 수 있는 그룹 스터디 플랫폼',
    imageUrl: 'https://file.notion.so/f/f/77f2e150-05f9-42c4-8a23-b656b39df0bf/67c28ccb-7062-42ad-b757-c72675cf2fea/neon-logo-sky-lg.png?table=block&id=f8777a52-9adc-4ae9-997a-1ae26fca172c&spaceId=77f2e150-05f9-42c4-8a23-b656b39df0bf&expirationTimestamp=1726149600000&signature=D2HjBonrd7k8JqWqetXUfqBd41zw5tjkBdNMAWA9o88&downloadName=neon-logo-sky-lg.png',
    githubUrl: 'https://github.com/SteamedPapaya/neon',
    notionUrl: 'https://www.notion.so/xiyoon/f8777a529adc4ae9997a1ae26fca172c?pvs=4', // Notion URL 추가
    domainUrl: 'https://neon7.site/',
  },
  {
    title: 'kkoma',
    description: '쉽고 안전한 육아용품 중고거래 플랫폼',
    imageUrl: 'https://file.notion.so/f/f/77f2e150-05f9-42c4-8a23-b656b39df0bf/2c6d10b2-fc5d-4538-a1e6-4848e4a2e66e/kkoma-logo-1x3-letter-2.png?table=block&id=e90084b7-22a7-4426-b152-7c9e85a322b3&spaceId=77f2e150-05f9-42c4-8a23-b656b39df0bf&expirationTimestamp=1726149600000&signature=mSPgj-z1RlLA1JYXna2HS_iBDMYWOBSp0RlbH569We4&downloadName=kkoma-logo-1x3-letter-2.png',
    githubUrl: 'https://github.com/kkomas/kkoma',
    notionUrl: 'https://www.notion.so/xiyoon/e90084b722a74426b1527c9e85a322b3?pvs=4', // Notion URL 추가
    domainUrl: 'https://kkoma.shop/',
  },
  // 추가 프로젝트 데이터...
];

function Projects() {
    return (
      <ProjectsSection id="projects">
        <SectionTitle>Projects</SectionTitle>
        <ProjectList>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
                          {/* 이미지 컨테이너로 감싸서 비율 유지 */}
            <ProjectImageContainer>
              <ProjectImage src={project.imageUrl} alt={project.title} />
            </ProjectImageContainer>
              <ProjectContent>
                {/* <ProjectTitle>{project.title}</ProjectTitle> */}
                <ProjectDescription>{project.description}</ProjectDescription>
                
                {/* 도메인 주소 표시 */}
                <ProjectDomain href={project.domainUrl} target="_blank" rel="noopener noreferrer">
                {new URL(project.domainUrl).hostname} {/* 도메인 주소만 추출하여 표시 */}
                </ProjectDomain>
                
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