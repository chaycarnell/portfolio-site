import { NavBar, Shell } from '@components';
import { ExternalLinks } from '@config/links';
import { useViewport } from '@context/LayoutContext/LayoutContext';
import { LayoutBreakPoints } from '@context/LayoutContext/LayoutContext.types';
import { LayoutProvider } from '@context/LayoutContext/LayoutProvider';
import { Feedback, Profile, Projects } from '@pages';
import { ContentEntries } from '@services/contentful/config';
import { client } from '@services/contentful/contentful';
import { TypeProfile } from '@sharedTypes/contenful';
import { PageRoutes } from '@sharedTypes/enums';
import { Entry } from 'contentful';
import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

const Content = () => {
  const [profile, setProfile] = useState<
    Entry<TypeProfile, undefined, string> | undefined
  >();
  const { viewport, isMobile, showHeader } = useViewport();
  const [profileLoading, setProfileLoading] = useState(true);

  const getProfile = () =>
    client
      .getEntry<TypeProfile>(ContentEntries.PROFILE)
      .then(res => {
        setProfile(res);
        setProfileLoading(false);
      })
      .catch(() => window.location.replace(ExternalLinks.LINKEDIN));

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
          path={PageRoutes.ROOT}
          element={
            <Profile profile={profile} profileLoading={profileLoading} />
          }
        />
        <Route path={PageRoutes.PORTFOLIO} element={<Projects />} />
        <Route path={PageRoutes.FEEDBACK} element={<Feedback />} />
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
// NOTE: Using hash router here because of how Github pages responds to browser router page refreshes with 404
const Render = () => (
  <LayoutProvider mobileBreakPointPx={LayoutBreakPoints.MOBILE}>
    <HashRouter>
      <Content />
    </HashRouter>
  </LayoutProvider>
);

export default Render;
