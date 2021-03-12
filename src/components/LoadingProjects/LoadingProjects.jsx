import React from "react";
import Skeleton from "react-loading-skeleton";
import ContentCard from "../ContentCard/ContentCard";

const Render = () => (
  <ContentCard margin="12px" padding="12px" center>
    <Skeleton />
    <br />
    <Skeleton height={250} />
    <br />
    <Skeleton />
    <br />
    <Skeleton height={250} />
    <br />
    <Skeleton />
    <br />
    <Skeleton height={250} />
  </ContentCard>
);

export default Render;
