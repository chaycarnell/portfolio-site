import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export const ProjectWrapper = styled.div`
  display: grid;
  justify-self: center;
  padding: 8px;
  margin: 0px 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  max-width: 1024px;
`;

export const ChipWrapper = styled.div`
  margin-top: 5px;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
`;

export const ReferenceWrapper = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin: 4px 0px;
  > a {
    margin-right: 8px;
  }
`;

export const DesktopCarousel = styled(Carousel)`
  margin: 10px;
  min-width: 260px;
  > * .slide {
    background-color: rgba(0, 0, 0, 0.05);
  }
  > * img {
    object-fit: scale-down;
    max-height: 700px;
  }
`;
