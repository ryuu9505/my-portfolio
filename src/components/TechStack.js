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
import { SiSpring, SiMysql, SiRedis, SiMongodb, SiApachehadoop, SiApachespark, SiApachekafka, SiHibernate, SiDocker, SiAmazonwebservices, SiPython, SiDjango, SiInfluxdb, SiPostgresql } from 'react-icons/si';

function TechStack() {
  const techs = [
    { name: 'Java', icon: <FaJava />, url: 'https://www.notion.so/hyeongjun-dev/Java-1a09683271d080f58e5cd8abcf99d216?pvs=4' },
    { name: 'Hibernate', icon: <SiHibernate />, url: 'https://www.notion.so/hyeongjun-dev/Hibernate-1a39683271d081c3892fff41a01ca115?pvs=4' },
    { name: 'Spring', icon: <SiSpring />, url: 'https://www.notion.so/hyeongjun-dev/Spring-Framework-1a29683271d08195b194d2f0e0e2480e?pvs=4' },
    { name: 'MySQL', icon: <SiMysql />, url: 'https://www.notion.so/hyeongjun-dev/MySQL-1a29683271d08196862ac54643a547b2?pvs=4' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, url: 'https://www.notion.so/hyeongjun-dev/PostgreSQL-1a29683271d081c8a47ed972311ef0c6?pvs=4' },
    { name: 'Redis', icon: <SiRedis />, url: 'https://www.notion.so/hyeongjun-dev/Redis-1a29683271d08107a142f1241521aae6?pvs=4' },
    { name: 'MongoDB', icon: <SiMongodb />, url: 'https://www.notion.so/hyeongjun-dev/MongoDB-1a29683271d08141a44ae86ad5106d7f?pvs=4' },
    { name: 'Kafka', icon: <SiApachekafka />, url: 'https://www.notion.so/hyeongjun-dev/Kafka-1a29683271d081b2811dcbb3fb0a4278?pvs=4' },
    { name: 'Hadoop', icon: <SiApachehadoop />, url: 'https://www.notion.so/hyeongjun-dev/Hadoop-1a39683271d0812ca104c72dcd502734?pvs=4' },
    { name: 'Spark', icon: <SiApachespark />, url: 'https://www.notion.so/hyeongjun-dev/Spark-1a39683271d081febe69c27936df777e?pvs=4' },
    { name: 'Docker', icon: <SiDocker />, url: 'https://www.notion.so/hyeongjun-dev/Docker-1a29683271d0810ba14bde0a9c3e04e5?pvs=4' },
    { name: 'AWS', icon: <SiAmazonwebservices />, url: 'https://www.notion.so/hyeongjun-dev/AWS-1a39683271d081d48736d004732c9c3e?pvs=4' },
    { name: 'Python', icon: <SiPython />, url: 'https://www.notion.so/hyeongjun-dev/Python-1a09683271d0818b84c3c1e279d6f1cb?pvs=4' },
    { name: 'Django', icon: <SiDjango />, url: 'https://www.notion.so/hyeongjun-dev/Django-1a39683271d081f49c00e66ff9ab724a?pvs=4' },
    { name: 'InfluxDB', icon: <SiInfluxdb />, url: ''},
  ];

  return (
    <TechStackSection id="tech-stack">
      <ScrollAnimation>
        <SectionTitle>Skills</SectionTitle>
      </ScrollAnimation>
      <ScrollAnimation delay={0.15}>
        <TextContent>
          Powered by the best tools.
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