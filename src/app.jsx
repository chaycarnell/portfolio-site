import React, { useEffect, useState } from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";
import { Profile, Projects, Feedback } from "./pages";
import { Shell, NavBar } from "./components";
import { useViewport, LayoutProvider } from "./context/LayoutContext";
import { getEntry } from "./services/contentful";

const Content = () => {
  const [profile, setProfile] = useState({});
  const { viewport, isMobile } = useViewport();
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
      />
      <Route exact path="/">
        <Profile profile={profile} profileLoading={profileLoading} />
      </Route>
      <Route path="/portfolio">
        <Projects />
      </Route>
      <Route path="/feedback">
        <Feedback />
      </Route>
      <Redirect to="/" />
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
