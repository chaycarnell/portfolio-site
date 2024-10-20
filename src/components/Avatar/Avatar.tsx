import 'react-loading-skeleton/dist/skeleton.css';

import { useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import * as S from './Avatar.styles';

const Render = ({ src }: { src: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!src) return <></>;

  const image = new Image();
  image.onload = () => {
    setImageLoaded(true);
  };
  image.src = src;
  if (!imageLoaded)
    return (
      <SkeletonTheme highlightColor="#FFF">
        <S.AvatarSkeleton circle={true} />
      </SkeletonTheme>
    );
  return <S.Avatar src={src} alt="profile mage" />;
};

export default Render;
