import React from 'react';
import {
  TechStackSection,
  SectionTitle,
  TechList,
  TechCard,
  TechIcon,
  TechName,
  TextContent
} from './TechStackStyles';
import { FaJava } from 'react-icons/fa';
import { SiSpring, SiMysql, SiRedis, SiMongodb, SiApachehadoop, SiApachespark } from 'react-icons/si';

function TechStack() {
  const techs = [
    { name: 'Java', icon: <FaJava />, url: 'https://www.notion.so/xiyoon/Java-51bd9080920a4cb2a7f4165a9c419567?pvs=4' },
    { name: 'Spring', icon: <SiSpring />, url: 'https://www.notion.so/xiyoon/Spring-Framework-c1a94d43afeb49a39a9c045f8e92d430?pvs=4' },
    { name: 'MySQL', icon: <SiMysql />, url: 'https://www.notion.so/xiyoon/MySQL-7ea9601908d443be87833f95302ebf83?pvs=4' },
    { name: 'Redis', icon: <SiRedis />, url: 'https://www.notion.so/xiyoon/Redis-807da33715a64f249e922990850afa58?pvs=4' },
    { name: 'MongoDB', icon: <SiMongodb />, url: 'https://www.notion.so/xiyoon/MongoDB-de6fbe14e01b498eae0d29dcbbd83528?pvs=4' },
    { name: 'Hadoop', icon: <SiApachehadoop />, url: 'https://www.notion.so/xiyoon/Hadoop-4b5a67ffa18f493eb31c197e82c5a766?pvs=4' },
    { name: 'Spark', icon: <SiApachespark />, url: 'https://www.notion.so/xiyoon/Spark-6a28a6726a91493eb03305d9e48bccd5?pvs=4' },
  ];

  return (
    <TechStackSection id="tech-stack">
      <SectionTitle>Tech Stack</SectionTitle>
        <TextContent>
            더 적합한 기술을 찾고 적극적으로 도입합니다.
        </TextContent>
      <TechList>
        {techs.map((tech, index) => (
          <a href={tech.url} target="_blank" rel="noopener noreferrer">
            <TechCard key={index}>
              <TechIcon>{tech.icon}</TechIcon>
              <TechName>{tech.name}</TechName>
            </TechCard>
          </a>
        ))}
      </TechList>
    </TechStackSection>
  );
}

export default TechStack;