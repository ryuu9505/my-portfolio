import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import HoverImage from './common/HoverImage';
import githubBadge from '../assets/github-foundations-cert.png';
import awsBadge from '../assets/aws-educate-introduction-to-cloud-101.png';
import hsatBadge from '../assets/hsat-cert.png';


const images = [
  {
    src: 'https://i.redd.it/k1ac1xpb31wy.png',
    link: 'https://www.credly.com/badges/76477d73-efad-4c3e-b7e7-56eb8e688798/public_url',
    badge: githubBadge,
  },
  {
    src: 'https://i.redd.it/k1ac1xpb31wy.png',
    link: 'https://www.credly.com/badges/d857e697-2077-47f5-b021-093c6bb46b07/public_url',
    badge: awsBadge,
  },
  {
    src: 'https://i.redd.it/k1ac1xpb31wy.png',
    link: 'https://softeer.ai/certificate/verify?ui=28015&di=4978&bd=mK4LbR%2FA%2FhuYypLsmW0rEw%3D%3D',
    badge: hsatBadge,
  },
];

const Section = styled.section`
  width: 100%;
  background: #fff;
  padding: 0;
  overflow: hidden;
`;

const FilmTrack = styled.div`
  display: flex;
  width: calc(400px * 10);
  will-change: transform;
  transition: none;
`;

const ThumbnailWrapper = styled.div`
  margin-right: 20px;
  display: inline-block;
  position: relative;
  width: 400px;
  height: 250px;
  vertical-align: top;
`;

const Badge = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 150px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 2;
`;

const FILM_WIDTH = (400 + 20) * images.length;
const NORMAL_SPEED = 60;
const SLOW_SPEED = 30;

const CertFilmSection = () => {
  const [slow, setSlow] = useState(false);
  const [offset, setOffset] = useState(0);
  const reqRef = useRef();
  const lastTimeRef = useRef();

  useEffect(() => {
    const animate = (now) => {
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const delta = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;
      const speed = slow ? SLOW_SPEED : NORMAL_SPEED;
      setOffset(prev => {
        let next = prev + speed * delta;
        return next %= FILM_WIDTH;
      });
      reqRef.current = requestAnimationFrame(animate);
    };
    reqRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqRef.current);
  }, [slow]);

  const filmImages = [...images, ...images];

  return (
    <Section
      onMouseEnter={() => setSlow(true)}
      onMouseLeave={() => setSlow(false)}
    >
      <FilmTrack style={{ transform: `translateX(-${offset}px)` }}>
        {filmImages.map((img, idx) => (
          <ThumbnailWrapper key={idx}>
            <HoverImage
              baseImage={img.src}
              alt={`thumbnail-${idx}`}
              link={img.link}
              buttonText="More"
            />
            <Badge src={img.badge} alt="certi badge" />
          </ThumbnailWrapper>
        ))}
      </FilmTrack>
    </Section>
  );
};

export default CertFilmSection; 