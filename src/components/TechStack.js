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
    { name: 'Java', icon: <FaJava />, url: 'https://www.notion.so/xiyoon/Java-51bd9080920a4cb2a7f4165a9c419567?pvs=4' },
    { name: 'Hibernate', icon: <SiHibernate />, url: 'https://www.notion.so/xiyoon/Hibernate-db378f588acd4812a4708881b8fa04e7?pvs=4' },
    { name: 'Spring', icon: <SiSpring />, url: 'https://www.notion.so/xiyoon/Spring-Framework-c1a94d43afeb49a39a9c045f8e92d430?pvs=4' },
    { name: 'MySQL', icon: <SiMysql />, url: 'https://www.notion.so/xiyoon/MySQL-7ea9601908d443be87833f95302ebf83?pvs=4' },
    { name: 'Redis', icon: <SiRedis />, url: 'https://www.notion.so/xiyoon/Redis-807da33715a64f249e922990850afa58?pvs=4' },
    { name: 'MongoDB', icon: <SiMongodb />, url: 'https://www.notion.so/xiyoon/MongoDB-de6fbe14e01b498eae0d29dcbbd83528?pvs=4' },
    { name: 'Kafka', icon: <SiApachekafka />, url: 'https://www.notion.so/xiyoon/Kafka-5e08bab26db445128e92b24e8eedfa07?pvs=4' },
    { name: 'Hadoop', icon: <SiApachehadoop />, url: 'https://www.notion.so/xiyoon/Hadoop-4b5a67ffa18f493eb31c197e82c5a766?pvs=4' },
    { name: 'Spark', icon: <SiApachespark />, url: 'https://www.notion.so/xiyoon/Spark-6a28a6726a91493eb03305d9e48bccd5?pvs=4' },
    { name: 'Docker', icon: <SiDocker />, url: 'https://www.notion.so/xiyoon/Docker-9564fe714d1b465fb139dc1ddf668a93?pvs=4' },
    { name: 'AWS', icon: <SiAmazonwebservices />, url: 'https://www.notion.so/xiyoon/AWS-8da062489d9d42d187f4277da7d84379?pvs=4' },
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