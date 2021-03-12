import React from "react";
import Skeleton from "react-loading-skeleton";
import { ContentCard, RichText, Text, NavLink } from "../../components";

// Set some rich text options
const textOptions = {
  pSize: "16px",
  bSize: "18px",
};

const Render = ({ profile = {}, profileLoading = true }) => {

  return (
    <>
      <ContentCard margin="12px" padding="12px" center>
        {profileLoading && (
          <>
            <Skeleton count={6} />
            <br />
            <Skeleton count={6} />
          </>
        )}
        {!profileLoading && (
          <RichText document={profile.about} textOptions={textOptions} />
        )}
      </ContentCard>
      {!profileLoading && (
        <ContentCard center margin={"12px"} padding="12px">
          <Text type="regular" size={textOptions.pSize}>
            Not convinced? Check out{" "}
            <NavLink to="/portfolio" color="#444" weight={'bold'} size={textOptions.bSize}>my portfolio</NavLink> or{" "}
            <NavLink to="/feedback" color="#444" weight={'bold'} size={textOptions.bSize}>see what people say about me!</NavLink>
          </Text>
        </ContentCard>
      )}
    </>
  );
};

export default Render;
