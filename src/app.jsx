import React, { useEffect, useState } from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";
import { Profile, Projects, Feedback } from "./pages";
import { SideBar } from "./components";
import { getEntry } from "./services/contentful";

const Render = () => {
  const [profile, setProfile] = useState({});
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

  // NOTE
  // Using has router here simply because of how Github pages responds to browser router page refereshes with 404
  return (
    <HashRouter>
      <SideBar profile={profile} profileLoading={profileLoading} />
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
    </HashRouter>
  );
};

export default Render;
