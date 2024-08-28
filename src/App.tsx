import { Entry } from 'contentful';
import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { NavBar, Shell } from './components';
import { useViewport } from './context/LayoutContext/LayoutContext';
import { LayoutBreakPoints } from './context/LayoutContext/LayoutContext.types';
import { LayoutProvider } from './context/LayoutContext/LayoutProvider';
import { Feedback, Profile, Projects } from './pages';
import { client } from './services/contentful';
import { TypeProfile } from './types/contenful';

const Content = () => {
  const [profile, setProfile] = useState<
    Entry<TypeProfile, undefined, string> | undefined
  >();
  const { viewport, isMobile, showHeader } = useViewport();
  const [profileLoading, setProfileLoading] = useState(true);

  const getProfile = () =>
    client
      .getEntry<TypeProfile>('1AjG0SYrUE0XHSaqNxFlIv')
      .then(res => {
        setProfile(res);
        setProfileLoading(false);
      })
      .catch(() =>
        // I mean... if this errors may as well just send people to Linkedin ... yikes
        window.location.replace('https://www.linkedin.com/in/chaycarnell/'),
      );

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Shell $viewport={viewport}>
      <NavBar
        profile={profile?.fields}
        profileLoading={profileLoading}
        isMobile={isMobile}
        showHeader={showHeader}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Profile profile={profile} profileLoading={profileLoading} />
          }
        />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route
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
// NOTE: Using hash router here simply because of how Github pages responds to browser router page refreshes with 404
const Render = () => (
  <LayoutProvider mobileBreakPointPx={LayoutBreakPoints.MOBILE}>
    <HashRouter>
      <Content />
    </HashRouter>
  </LayoutProvider>
);

export default Render;
