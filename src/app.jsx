import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { NavBar, Shell } from "./components";
import { LayoutProvider, useViewport } from "./context/LayoutContext";
import { Feedback, Profile, Projects } from "./pages";
import { getEntry } from "./services/contentful";

const Content = () => {
  const [profile, setProfile] = useState({});
  const { viewport, isMobile, showHeader } = useViewport();
  const [profileLoading, setProfileLoading] = useState(true);

  const getProfile = () =>
    getEntry("1AjG0SYrUE0XHSaqNxFlIv")
      .then((res) => {
        setProfile(res.item);
        setProfileLoading(false);
      })
      .catch(() =>
        // I mean... if this errors may as well just send people to Linkedin ... yikes
        window.location.replace("https://www.linkedin.com/in/chaycarnell/")
      );

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Shell viewport={viewport}>
      <NavBar
        profile={profile}
        profileLoading={profileLoading}
        isMobile={isMobile}
        showHeader={showHeader}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Profile profile={profile} profileLoading={profileLoading} />
          }
        />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route
          exact
          path="*"
          element={
            <Profile profile={profile} profileLoading={profileLoading} />
          }
        />
      </Routes>
    </Shell>
  );
};

// Wrap router and contexts
// NOTE: Using hash router here simply because of how Github pages responds to browser router page refereshes with 404
const Render = () => (
  <LayoutProvider breakpointPx={860}>
    <HashRouter>
      <Content />
    </HashRouter>
  </LayoutProvider>
);

export default Render;
