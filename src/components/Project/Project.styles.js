import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ChipWrapper = styled.div`
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
  >* .slide {
    background-color: rgba(0,0,0,0.05);
  }
  >* img {
    object-fit: scale-down;
    max-height: 700px;
  }
`;
