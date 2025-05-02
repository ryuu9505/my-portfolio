import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import HoverImage from './common/HoverImage';

const images = [
  {
    src: 'https://i.redd.it/k1ac1xpb31wy.png',
    link: 'https://hyeongjun.me/',
  },
  {
    src: 'https://i.redd.it/k1ac1xpb31wy.png',
    link: 'https://hyeongjun.me/',
  },
  {
    src: 'https://i.redd.it/k1ac1xpb31wy.png',
    link: 'https://hyeongjun.me/',
  },
  {
    src: 'https://i.redd.it/k1ac1xpb31wy.png',
    link: 'https://hyeongjun.me/',
  },
  {
    src: 'https://i.redd.it/k1ac1xpb31wy.png',
    link: 'https://hyeongjun.me/',
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

const FILM_WIDTH = (400 + 20) * images.length; // 한 세트의 전체 너비
const NORMAL_SPEED = 60; // px per second
const SLOW_SPEED = 30; // px per second

const FilmSection = () => {
  const [slow, setSlow] = useState(false);
  const [offset, setOffset] = useState(0);
  const reqRef = useRef();
  const lastTimeRef = useRef();

  useEffect(() => {
    const animate = (now) => {
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const delta = (now - lastTimeRef.current) / 1000; // 초 단위
      lastTimeRef.current = now;
      const speed = slow ? SLOW_SPEED : NORMAL_SPEED;
      setOffset(prev => {
        let next = prev + speed * delta;
        if (next >= FILM_WIDTH) next -= FILM_WIDTH;
        return next;
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
          </ThumbnailWrapper>
        ))}
      </FilmTrack>
    </Section>
  );
};

export default FilmSection; 