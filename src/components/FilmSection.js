import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

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

const Thumbnail = styled.img`
  width: 400px;
  height: 250px;
  object-fit: cover;
  border-radius: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  background: #eee;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: ${(props) => (props.ishovered ? 1 : 0)};
  transition: opacity 0.4s;
  background: radial-gradient(
    circle,
    rgba(0,0,0,0.18) 0%,
    rgba(0,0,0,0.28) 55%,
    rgba(0,0,0,0.55) 100%
  );
  z-index: 1;
`;

const FadeButton = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  padding: 8px 20px;
  font-size: 0.9rem;
  font-weight: 200;
  font-family: inherit;
  border: none;
  border-radius: 999px;
  background: rgba(255,255,255,0.92);
  color: #222;
  letter-spacing: 0.02em;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  cursor: pointer;
  pointer-events: none;
  transition: opacity 0.4s, transform 0.4s, box-shadow 0.2s;
  z-index: 2;
  ${(props) =>
    props.ishovered &&
    `
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.04);
      pointer-events: auto;
      box-shadow: 0 4px 16px rgba(0,0,0,0.10);
    `}
`;

const FILM_WIDTH = (400 + 20) * images.length; // 한 세트의 전체 너비
const NORMAL_SPEED = 60; // px per second
const SLOW_SPEED = 30; // px per second

const FilmSection = () => {
  const [slow, setSlow] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
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

  // 버튼 클릭 시 새 창으로 이동
  const handleButtonClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Section
      onMouseEnter={() => setSlow(true)}
      onMouseLeave={() => { setSlow(false); setHoveredIdx(null); }}
    >
      <FilmTrack style={{ transform: `translateX(-${offset}px)` }}>
        {filmImages.map((img, idx) => (
          <ThumbnailWrapper
            key={idx}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <Thumbnail src={img.src} alt={`thumbnail-${idx}`} />
            <Overlay ishovered={hoveredIdx === idx} />
            <FadeButton
              ishovered={hoveredIdx === idx}
              onClick={() => handleButtonClick(img.link)}
              tabIndex={-1}
            >
              More
            </FadeButton>
          </ThumbnailWrapper>
        ))}
      </FilmTrack>
    </Section>
  );
};

export default FilmSection; 