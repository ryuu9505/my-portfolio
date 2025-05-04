import React from 'react';
import ScrollAnimation from './common/ScrollAnimation';
import {
  TechStackSection,
  SectionTitle,
  TechList,
  TechCard,
  TechIcon,
  TechName,
  TextContent,
} from '../styles/TechStackStyles';
import { FaJava } from 'react-icons/fa';
import { SiSpring, SiMysql, SiRedis, SiMongodb, SiApachehadoop, SiApachespark, SiApachekafka, SiHibernate, SiDocker, SiAmazonwebservices, SiPython, SiDjango, SiInfluxdb, SiPostgresql } from 'react-icons/si';
function TechStack() {
  const techs = [
    { name: 'Java', icon: <FaJava />, color: '#007396', url: 'https://www.notion.so/hyeongjun-dev/Java-1a09683271d080f58e5cd8abcf99d216?pvs=4' },
    { name: 'Hibernate', icon: <SiHibernate />, color: '#59666C', url: 'https://www.notion.so/hyeongjun-dev/Hibernate-1a39683271d081c3892fff41a01ca115?pvs=4' },
    { name: 'Spring', icon: <SiSpring />, color: '#6DB33F', url: 'https://www.notion.so/hyeongjun-dev/Spring-Framework-1a29683271d08195b194d2f0e0e2480e?pvs=4' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1', url: 'https://www.notion.so/hyeongjun-dev/MySQL-1a29683271d08196862ac54643a547b2?pvs=4' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791', url: 'https://www.notion.so/hyeongjun-dev/PostgreSQL-1a29683271d081c8a47ed972311ef0c6?pvs=4' },
    { name: 'Redis', icon: <SiRedis />, color: '#DC382D', url: 'https://www.notion.so/hyeongjun-dev/Redis-1a29683271d08107a142f1241521aae6?pvs=4' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', url: 'https://www.notion.so/hyeongjun-dev/MongoDB-1a29683271d08141a44ae86ad5106d7f?pvs=4' },
    { name: 'Kafka', icon: <SiApachekafka />, color: '#231F20', url: 'https://www.notion.so/hyeongjun-dev/Kafka-1a29683271d081b2811dcbb3fb0a4278?pvs=4' },
    { name: 'Hadoop', icon: <SiApachehadoop />, color: '#FF652F', url: 'https://www.notion.so/hyeongjun-dev/Hadoop-1a39683271d0812ca104c72dcd502734?pvs=4' },
    { name: 'Spark', icon: <SiApachespark />, color: '#E25A1C', url: 'https://www.notion.so/hyeongjun-dev/Spark-1a39683271d081febe69c27936df777e?pvs=4' },
    { name: 'Docker', icon: <SiDocker />, color: '#2496ED', url: 'https://www.notion.so/hyeongjun-dev/Docker-1a29683271d0810ba14bde0a9c3e04e5?pvs=4' },
    { name: 'AWS', icon: <SiAmazonwebservices />, color: '#FF9900', url: 'https://www.notion.so/hyeongjun-dev/AWS-1a39683271d081d48736d004732c9c3e?pvs=4' },
    { name: 'Python', icon: <SiPython />, color: '#3776AB', url: 'https://www.notion.so/hyeongjun-dev/Python-1a09683271d0818b84c3c1e279d6f1cb?pvs=4' },
    { name: 'Django', icon: <SiDjango />, color: '#092E20', url: 'https://www.notion.so/hyeongjun-dev/Django-1a39683271d081f49c00e66ff9ab724a?pvs=4' },
    { name: 'InfluxDB', icon: <SiInfluxdb />, color: '#22ADF6', url: ''},
  ];

  return (
    <TechStackSection id="tech-stack">
      <ScrollAnimation>
        <SectionTitle>Skills</SectionTitle>
      </ScrollAnimation>
      <ScrollAnimation delay={0.15}>
        <TextContent>
          각 상황에 가장 적합한 기술을 찾고 사용합니다.
        </TextContent>
      </ScrollAnimation>
      <ScrollAnimation>
        <TechList>
          {techs.map((tech, index) => (
            <ScrollAnimation 
              key={index}
              delay={0.3}
              margin="0px"
            >
              <a href={tech.url} target="_blank" rel="noopener noreferrer">
                <TechCard>
                  <TechIcon style={{ color: tech.color }}>{tech.icon}</TechIcon>
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