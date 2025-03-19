import React from 'react';
import ScrollAnimation from './common/ScrollAnimation';
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
import { SiSpring, SiMysql, SiRedis, SiMongodb, SiApachehadoop, SiApachespark, SiApachekafka, SiHibernate, SiDocker, SiAmazonwebservices } from 'react-icons/si';

function TechStack() {
  const techs = [
    { name: 'Java', icon: <FaJava />, url: 'https://www.notion.so/hyeongjun-dev/Java-1a09683271d080f58e5cd8abcf99d216?pvs=4' },
    { name: 'Hibernate', icon: <SiHibernate />, url: 'https://www.notion.so/hyeongjun-dev/Hibernate-1a39683271d081c3892fff41a01ca115?pvs=4' },
    { name: 'Spring', icon: <SiSpring />, url: 'https://www.notion.so/hyeongjun-dev/Spring-Framework-1a29683271d08195b194d2f0e0e2480e?pvs=4' },
    { name: 'MySQL', icon: <SiMysql />, url: 'https://www.notion.so/hyeongjun-dev/MySQL-1a29683271d08196862ac54643a547b2?pvs=4' },
    { name: 'Redis', icon: <SiRedis />, url: 'https://www.notion.so/hyeongjun-dev/Redis-1a29683271d08107a142f1241521aae6?pvs=4' },
    { name: 'MongoDB', icon: <SiMongodb />, url: 'https://www.notion.so/hyeongjun-dev/MongoDB-1a29683271d08141a44ae86ad5106d7f?pvs=4' },
    { name: 'Kafka', icon: <SiApachekafka />, url: 'https://www.notion.so/hyeongjun-dev/Kafka-1a29683271d081b2811dcbb3fb0a4278?pvs=4' },
    { name: 'Hadoop', icon: <SiApachehadoop />, url: 'https://www.notion.so/hyeongjun-dev/Hadoop-1a39683271d0812ca104c72dcd502734?pvs=4' },
    { name: 'Spark', icon: <SiApachespark />, url: 'https://www.notion.so/hyeongjun-dev/Spark-1a39683271d081febe69c27936df777e?pvs=4' },
    { name: 'Docker', icon: <SiDocker />, url: 'https://www.notion.so/hyeongjun-dev/Docker-1a29683271d0810ba14bde0a9c3e04e5?pvs=4' },
    { name: 'AWS', icon: <SiAmazonwebservices />, url: 'https://www.notion.so/hyeongjun-dev/AWS-1a39683271d081d48736d004732c9c3e?pvs=4' },
  ];

  return (
    <TechStackSection id="tech-stack">
      <ScrollAnimation>
        <SectionTitle>Tech Stack</SectionTitle>
      </ScrollAnimation>
      <ScrollAnimation delay={0.1}>
        <TextContent>
          더 적합한 기술을 찾고 적극적으로 도입합니다.
        </TextContent>
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <TechList>
          {techs.map((tech, index) => (
            <ScrollAnimation 
              key={index} 
              delay={0.1 + index * 0.05}
              margin="0px"
            >
              <a href={tech.url} target="_blank" rel="noopener noreferrer">
                <TechCard>
                  <TechIcon>{tech.icon}</TechIcon>
                  <TechName>{tech.name}</TechName>
                </TechCard>
              </a>
            </ScrollAnimation>
          ))}
        </TechList>
      </ScrollAnimation>
    </TechStackSection>
  );
}

export default TechStack;