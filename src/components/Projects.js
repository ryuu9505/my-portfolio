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
  Period,
} from './ProjectsStyles';
import kkomaThumbnail from '../assets/kkoma-thumbnail.png';
import neubieorderThumbnail from '../assets/neubieorder-thumbnail.png';
import rateloThumbnail from '../assets/ratelo-thumbnail.png';
import ticketImage from '../assets/ticket.png';
import chatImage from '../assets/chat.png';
import ticketWebImage from '../assets/ticket-web.png';
import neubieImage from '../assets/neubie.jpg';
import chatWebImage from '../assets/chat-web.png';
import kkomaDataImage from '../assets/kkoma-data.png';
import developingImage from '../assets/developing.png';

// 프로젝트 데이터
const projects = [
  {
    title: '간편 결제 서비스',
    description: '개발',
    period: '2024.04 ~ 진행 중',
    imageUrl: rateloThumbnail,
    hoverImage: developingImage,
    githubUrl: 'https://github.com/buffthis/payments',
    notionUrl: 'https://www.notion.so/hyeongjun-dev/Ratelo-1e19683271d08052a279e361d3bdbc28?pvs=4',
    domainUrl: 'https://www.notion.so/hyeongjun-dev/Ratelo-1e19683271d08052a279e361d3bdbc28?pvs=4',
    tags: [
      { name: '빅데이터', url: 'https://www.notion.so/hyeongjun-dev/1bb9683271d080b38097d28e6bd9863d?pvs=4' },
      { name: '추천', url: 'https://www.notion.so/hyeongjun-dev/1bb9683271d080959b45f2023f1dbf31?pvs=4' },
    ],
  },
  {
    title: '자율주행 로봇 운용 플랫폼',
    description: '기능 개발',
    period: '2025.02 ~ 진행 중',
    imageUrl: neubieorderThumbnail,
    hoverImage: neubieImage,
    githubUrl: 'https://github.com/',
    notionUrl: 'https://www.notion.so/hyeongjun-dev/1a39683271d08049b1c8d53f1e0ef7c5?pvs=4',
    domainUrl: 'https://www.notion.so/hyeongjun-dev/1a39683271d08049b1c8d53f1e0ef7c5?pvs=4',
    tags: [
      { name: '기술 전환', url: 'https://www.notion.so/hyeongjun-dev/1b79683271d080e38e8ef91f186574c6?pvs=4' },
    ],
  },
  /*
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
  */
  {
    title: '티켓 예매 시스템',
    description: '개발 / 성능 개선',
    period: '2024.09 ~ 2024.10',
    imageUrl: ticketImage,
    hoverImage: ticketWebImage,
    githubUrl: 'https://github.com/buffthis',
    notionUrl: 'https://www.notion.so/hyeongjun-dev/1a09683271d080e1ba81f9aed75e25f4?pvs=4',
    domainUrl: 'https://www.notion.so/hyeongjun-dev/1a09683271d080e1ba81f9aed75e25f4?pvs=4',
    tags: [
      { name: '채팅', url: 'https://www.notion.so/hyeongjun-dev/1b79683271d0805da931f7860644da82?pvs=4' },
      { name: '예매', url: 'https://www.notion.so/hyeongjun-dev/1a09683271d080e1ba81f9aed75e25f4?pvs=4' },
    ],
  },
  {
    title: '그룹 채팅 시스템',
    description: '개발 / 성능 개선',
    period: '2024.08 ~ 2024.09',
    imageUrl: chatImage,
    hoverImage: chatWebImage,
    githubUrl: 'https://github.com/buffthis',
    notionUrl: 'https://www.notion.so/hyeongjun-dev/1b79683271d0805da931f7860644da82?pvs=4',
    domainUrl: 'https://www.notion.so/hyeongjun-dev/1b79683271d0805da931f7860644da82?pvs=4',
    tags: [
      { name: '채팅', url: 'https://www.notion.so/hyeongjun-dev/1b79683271d0805da931f7860644da82?pvs=4' },
      { name: '예매', url: 'https://www.notion.so/hyeongjun-dev/1a09683271d080e1ba81f9aed75e25f4?pvs=4' },
    ],
  },
  {
    title: '상품 추천 시스템 (육아용품)',
    description: '개발 / 성능 개선',
    period: '2024.02 ~ 2024.04',
    imageUrl: kkomaThumbnail,
    hoverImage: kkomaDataImage,
    githubUrl: 'https://github.com/samsungacademy/kkoma',
    notionUrl: 'https://www.notion.so/hyeongjun-dev/1e19683271d080acb379fe9d4fa25177?pvs=4',
    domainUrl: 'https://www.notion.so/hyeongjun-dev/1e19683271d080acb379fe9d4fa25177?pvs=4',
    tags: [
      { name: '빅데이터', url: 'https://www.notion.so/hyeongjun-dev/1bb9683271d080b38097d28e6bd9863d?pvs=4' },
      { name: '추천', url: 'https://www.notion.so/hyeongjun-dev/1bb9683271d080959b45f2023f1dbf31?pvs=4' },
    ],
  },
];

function Projects() {
  const [hoveredIdx, setHoveredIdx] = React.useState(null);
  return (
    <ProjectsSection id="projects">
      <ScrollAnimation>
        <SectionTitle>Projects</SectionTitle>
      </ScrollAnimation>
      <ScrollAnimation delay={0.15}>
        <TextContent>
          실제 제품을 만들면서 학습합니다.
        </TextContent>
      </ScrollAnimation>
      <ProjectList>
        {projects.map((project, index) => (
          <ScrollAnimation key={index} delay={0.3}>
            <ProjectImageContainer
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{ position: 'relative' }}
            >
              <a href={project.domainUrl} target="_blank" rel="noopener noreferrer">
                <ProjectImage src={project.imageUrl} alt={project.title} />
                <img
                  src={project.hoverImage}
                  alt="hover"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: hoveredIdx === index ? 1 : 0,
                    transition: 'opacity 0.4s',
                    pointerEvents: 'none',
                    zIndex: 2,
                    borderRadius: 0,
                  }}
                />
              </a>
            </ProjectImageContainer>
            <ProjectCard>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <Period>{project.period}</Period>
              </ProjectContent>
            </ProjectCard>
          </ScrollAnimation>
        ))}
      </ProjectList>
    </ProjectsSection>
  );
}

export default Projects;