import React, { useState } from "react";
import * as S from "./Avatar.styles";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Render = ({ src }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const image = new Image();
  image.onload = () => {
    setImageLoaded(true);
  };
  // Start request to get image file
  image.src = src;
  if (!imageLoaded)
    return (
      <SkeletonTheme color="#9b9b9b" highlightColor="#FFF">
        <S.AvatarSkeleton circle={true} />
      </SkeletonTheme>
    );
  return <S.Avatar src={src} />;
};

export default Render;
