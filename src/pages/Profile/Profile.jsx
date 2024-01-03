import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Skeleton from "react-loading-skeleton";
import { ContentCard, NavLink, Page, RichText, Text } from "../../components";

// Set some rich text options
const textOptions = {
  pSize: "16px",
  bSize: "18px",
};

const Render = ({ profile = {}, profileLoading = true }) => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/profile", title: "profile" });
  }, []);

  return (
    <Page scrollable fullWidth>
      <ContentCard margin="12px" padding="12px" center>
        {(profileLoading && (
          <>
            <Skeleton count={6} />
            <br />
            <Skeleton count={6} />
          </>
        )) || (
          <>
            <RichText document={profile.about} textOptions={textOptions} />
            <ContentCard>
              <Text type="regular" size={textOptions.pSize}>
                Not convinced? Check out{" "}
                <NavLink
                  to="/portfolio"
                  color="#444"
                  weight={"bold"}
                  size={textOptions.bSize}
                >
                  my portfolio
                </NavLink>{" "}
                or{" "}
                <NavLink
                  to="/feedback"
                  color="#444"
                  weight={"bold"}
                  size={textOptions.bSize}
                >
                  see what people say about me!
                </NavLink>
              </Text>
            </ContentCard>
          </>
        )}
      </ContentCard>
    </Page>
  );
};

export default Render;
