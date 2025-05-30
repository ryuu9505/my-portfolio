import { FaJava } from 'react-icons/fa';
import {
  SiAmazonwebservices,
  SiApachehadoop,
  SiApachekafka,
  SiApachespark,
  SiDjango,
  SiDocker,
  SiHibernate,
  SiInfluxdb,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiRedis,
  SiSpring,
} from 'react-icons/si';

import {
  awsCloudComputing101Badge,
  awsCloudEssentialsBadge,
  githubBadge,
  hsatBadge,
} from './certs';
import {
  post50,
  post67,
  prismBabyBottle,
  prismDeliveryRobot,
  prismSpeechBubble,
  prismTicket,
} from './images';

const projects = [
  {
    title: '자율주행 로봇 운용 플랫폼',
    description: '기능 개발',
    period: '2025.02 ~ 진행 중',
    imageUrl: prismDeliveryRobot,
    githubUrl: 'https://github.com/',
    notionUrl:
      'https://www.notion.so/hyeongjun-dev/1a39683271d08049b1c8d53f1e0ef7c5?pvs=4',
    domainUrl:
      'https://www.notion.so/hyeongjun-dev/1a39683271d08049b1c8d53f1e0ef7c5?pvs=4',
  },
  {
    title: '티켓 예매 시스템',
    description: '개발 / 성능 개선',
    period: '2024.09 ~ 2024.10',
    imageUrl: prismTicket,
    githubUrl: 'https://github.com/buffthis',
    notionUrl:
      'https://www.notion.so/hyeongjun-dev/1a09683271d080e1ba81f9aed75e25f4?pvs=4',
    domainUrl:
      'https://www.notion.so/hyeongjun-dev/1a09683271d080e1ba81f9aed75e25f4?pvs=4',
  },
  {
    title: '그룹 채팅 시스템',
    description: '개발 / 성능 개선',
    period: '2024.08 ~ 2024.09',
    imageUrl: prismSpeechBubble,
    githubUrl: 'https://github.com/buffthis',
    notionUrl:
      'https://www.notion.so/hyeongjun-dev/1b79683271d0805da931f7860644da82?pvs=4',
    domainUrl:
      'https://www.notion.so/hyeongjun-dev/1b79683271d0805da931f7860644da82?pvs=4',
  },
  {
    title: '상품 추천 시스템 (육아용품)',
    description: '개발 / 성능 개선',
    period: '2024.02 ~ 2024.04',
    imageUrl: prismBabyBottle,
    githubUrl: 'https://github.com/samsungacademy/kkoma',
    notionUrl:
      'https://www.notion.so/hyeongjun-dev/1e19683271d080acb379fe9d4fa25177?pvs=4',
    domainUrl:
      'https://www.notion.so/hyeongjun-dev/1e19683271d080acb379fe9d4fa25177?pvs=4',
  },
];

const basicTechs = [
  {
    name: 'Java',
    icon: <FaJava />,
    color: '#007396',
    url: 'https://www.notion.so/hyeongjun-dev/Java-1a09683271d080f58e5cd8abcf99d216?pvs=4',
    level: 5,
  },
  {
    name: 'Hibernate',
    icon: <SiHibernate />,
    color: '#59666C',
    url: 'https://www.notion.so/hyeongjun-dev/Hibernate-1a39683271d081c3892fff41a01ca115?pvs=4',
    level: 5,
  },
  {
    name: 'Spring',
    icon: <SiSpring />,
    color: '#6DB33F',
    url: 'https://www.notion.so/hyeongjun-dev/Spring-Framework-1a29683271d08195b194d2f0e0e2480e?pvs=4',
    level: 5,
  },
  {
    name: 'Python',
    icon: <SiPython />,
    color: '#3776AB',
    url: 'https://www.notion.so/hyeongjun-dev/Python-1a09683271d0818b84c3c1e279d6f1cb?pvs=4',
    level: 3,
  },
  {
    name: 'Django',
    icon: <SiDjango />,
    color: '#092E20',
    url: 'https://www.notion.so/hyeongjun-dev/Django-1a39683271d081f49c00e66ff9ab724a?pvs=4',
    level: 2,
  },
];

const dbTechs = [
  {
    name: 'MySQL',
    icon: <SiMysql />,
    color: '#4479A1',
    url: 'https://www.notion.so/hyeongjun-dev/MySQL-1a29683271d08196862ac54643a547b2?pvs=4',
    level: 5,
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql />,
    color: '#336791',
    url: 'https://www.notion.so/hyeongjun-dev/PostgreSQL-1a29683271d081c8a47ed972311ef0c6?pvs=4',
    level: 4,
  },
  {
    name: 'Redis',
    icon: <SiRedis />,
    color: '#DC382D',
    url: 'https://www.notion.so/hyeongjun-dev/Redis-1a29683271d08107a142f1241521aae6?pvs=4',
    level: 4,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
    color: '#47A248',
    url: 'https://www.notion.so/hyeongjun-dev/MongoDB-1a29683271d08141a44ae86ad5106d7f?pvs=4',
    level: 4,
  },
  {
    name: 'InfluxDB',
    icon: <SiInfluxdb />,
    color: '#22ADF6',
    url: 'https://www.notion.so/hyeongjun-dev/InfluxDB-1eb9683271d0805184e5c3f827e5b0f3?pvs=4',
    level: 2,
  },
];

const bigDataTechs = [
  {
    name: 'RabbitMQ',
    icon: <SiRabbitmq />,
    color: '#FF6600',
    url: 'https://www.notion.so/hyeongjun-dev/RabbitMQ-1a29683271d081fba9b3fcf7e2670a7d?pvs=4',
    level: 3,
  },
  {
    name: 'Kafka',
    icon: <SiApachekafka />,
    color: '#231F20',
    url: 'https://www.notion.so/hyeongjun-dev/Kafka-1a29683271d081b2811dcbb3fb0a4278?pvs=4',
    level: 2,
  },
  {
    name: 'Hadoop',
    icon: <SiApachehadoop />,
    color: '#FF652F',
    url: 'https://www.notion.so/hyeongjun-dev/Hadoop-1a39683271d0812ca104c72dcd502734?pvs=4',
    level: 2,
  },
  {
    name: 'Spark',
    icon: <SiApachespark />,
    color: '#E25A1C',
    url: 'https://www.notion.so/hyeongjun-dev/Spark-1a39683271d081febe69c27936df777e?pvs=4',
    level: 2,
  },
];

const infraTechs = [
  {
    name: 'Docker',
    icon: <SiDocker />,
    color: '#2496ED',
    url: 'https://www.notion.so/hyeongjun-dev/Docker-1a29683271d0810ba14bde0a9c3e04e5?pvs=4',
    level: 3,
  },
  {
    name: 'AWS',
    icon: <SiAmazonwebservices />,
    color: '#FF9900',
    url: 'https://www.notion.so/hyeongjun-dev/AWS-1a39683271d081d48736d004732c9c3e?pvs=4',
    level: 3,
  },
];

const certBadges = [
  awsCloudComputing101Badge,
  awsCloudEssentialsBadge,
  githubBadge,
  hsatBadge,
];

const socialData = [
  { id: 1, icon: 'github', href: 'https://github.com/ryuu9505' },
  { id: 2, icon: 'linkedin', href: 'https://linkedin.com/in/xiyoon' },
  { id: 3, icon: 'instagram', href: 'https://instagram.com/hxeonxjun' },
  { id: 4, icon: 'tistory', href: 'https://shady-dev.tistory.com/' },
];

const posts = [
  {
    title: '오늘도 QA가 안된다고 말했다',
    description: '테스트 코드를 작성하는 방법',
    imageUrl: post50,
    domainUrl: 'https://shady-dev.tistory.com/50',
    createdAt: '2024.08.24',
  },
  {
    title: '서버, 폭삭 터졌수다',
    description: '시스템 성능을 개선하는 방법',
    imageUrl: post67,
    domainUrl: 'https://shady-dev.tistory.com/67',
    createdAt: '2025.05.18',
  },
];

const allTechGroups = [basicTechs, dbTechs, bigDataTechs, infraTechs];

export {
  allTechGroups,
  basicTechs,
  bigDataTechs,
  certBadges,
  dbTechs,
  infraTechs,
  posts,
  projects,
  socialData,
};
