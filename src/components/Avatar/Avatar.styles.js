import styled from "styled-components";
import Skeleton from 'react-loading-skeleton';

export const Avatar = styled.img`
  @media (max-width: 400px) {
    width: 80px;
    height: 80px;
    box-shadow: 0 0 4px 1px #b8b8b8;
    margin: 4px;
  }
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border-style: solid;
  border-color:  var(--white);
  margin: 8px;
  box-shadow: 0 0 8px 1px #b8b8b8;
`;

export const AvatarSkeleton = styled(Skeleton)`
  @media (max-width: 400px) {
    width: 80px  !important;
    height: 80px !important;
    box-shadow: 0 0 4px 1px #b8b8b8;
    margin: 4px;
  }
  width: 140px !important;
  height: 140px !important;
  border-radius: 50% !important;
  border-style: solid;
  border-color:  var(--white);
  margin: 8px;
  box-shadow: 0 0 8px 1px #b8b8b8;
  opacity: 0.7;
`;
