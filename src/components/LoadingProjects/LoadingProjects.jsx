import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './LoadingProjects.styles'

const Render = () => (
  <S.Wrapper>
    <Skeleton />
    <Skeleton height={250} />
    <Skeleton />
    <Skeleton height={250} />
    <Skeleton />
    <Skeleton height={250} />
  </S.Wrapper>
);

export default Render;
