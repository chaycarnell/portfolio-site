import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Profile, Projects, Feedback } from "./pages";
import { SideBar } from "./components";
import { getEntry } from "./services/contentful";

const Render = () => {
  const [profile, setProfile] = useState({});
  const [profileLoading, setProfileLoading] = useState(true);

  const getProfile = () =>
    getEntry("1AjG0SYrUE0XHSaqNxFlIv")
      .then((res) => {
        console.log("Profile: ", res.item);
        setProfile(res.item);
        setProfileLoading(false);
      })
      .catch(() =>
        // I mean... if this errors may as well just send people to Linkedin ... yikes
        // window.location.replace("https://www.linkedin.com/in/chaycarnell/")
        console.log()
      );

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Router>
      <SideBar profile={profile} profileLoading={profileLoading} />
      <Switch>
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
      </Switch>
    </Router>
  );
};

export default Render;
