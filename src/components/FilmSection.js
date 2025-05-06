import HoverImage from '@components/HoverImage';
import { Section } from '@components/Section';
import { useFilmAnimation } from '@styles/AnimationStyles';
import { FilmTrack, ThumbnailWrapper } from '@styles/CommonStyles';
import React, { useState } from 'react';

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
];

const FilmSection = () => {
  const [slow, setSlow] = useState(false);
  const { offset } = useFilmAnimation(images.length, 400, 20, 60, 30, slow);

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
