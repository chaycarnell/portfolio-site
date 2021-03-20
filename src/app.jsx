import React, { useEffect, useState } from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";
import { Profile, Projects, Feedback } from "./pages";
import { Shell, SideBar } from "./components";
import { getEntry } from "./services/contentful";

const Render = () => {
  const [profile, setProfile] = useState({});
  const [profileLoading, setProfileLoading] = useState(true);
  const [viewport, setViewport] = useState(null);

  const getProfile = () =>
    getEntry("1AjG0SYrUE0XHSaqNxFlIv")
      .then((res) => {
        setProfile(res.item);
        setProfileLoading(false);
      })
      .catch(
        () => console.log()
        // I mean... if this errors may as well just send people to Linkedin ... yikes
        // window.location.replace("https://www.linkedin.com/in/chaycarnell/")
      );

  const handleWindowResize = () => {
    window.innerWidth >= 860 ? setViewport("desktop") : setViewport("mobile");
  };

  useEffect(() => {
    getProfile();
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  if (!viewport) return <></>;

  // NOTE
  // Using has router here simply because of how Github pages responds to browser router page refereshes with 404
  return (
    <HashRouter>
      <Shell viewport={viewport}>
        <SideBar
          profile={profile}
          profileLoading={profileLoading}
          viewport={viewport}
        />
        <Route exact path="/">
          <Profile
            profile={profile}
            profileLoading={profileLoading}
          />
        </Route>
        <Route path="/portfolio">
          <Projects />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
        <Redirect to="/" />
      </Shell>
    </HashRouter>
  );
};

export default Render;
