import { ExternalLinks } from '@config/links';
import { ContentEntries } from '@services/contentful/config';
import { client } from '@services/contentful/contentful';
import { Entry, TypeProfile } from '@sharedTypes/contenful';
import { PageRoutes } from '@sharedTypes/enums';
import { lazy, Suspense, useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import {
  HashRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import Profile from './pages/Profile/Profile';

const Projects = lazy(() => import('./pages/Projects/Projects'));
const Feedback = lazy(() => import('./pages/Feedback/Feedback'));

const navItems = [
  { id: PageRoutes.ROOT, label: 'Profile', idx: '01' },
  { id: PageRoutes.PORTFOLIO, label: 'Portfolio', idx: '02' },
  { id: PageRoutes.FEEDBACK, label: 'Feedback', idx: '03' },
];

const Sidebar = ({ profile }: { profile: Entry<TypeProfile> | undefined }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const fields = profile?.fields;

  return (
    <aside className="sidebar">
      <div className="sidebar-identity">
        {fields?.portrait?.fields.file?.url && (
          <div className="avatar-frame">
            <img
              src={fields.portrait.fields.file.url}
              alt={fields?.name || 'Portrait'}
            />
          </div>
        )}
        <div>
          <h2 className="name">{fields?.name}</h2>
          <div className="role">{fields?.role}</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(n => (
          <button
            key={n.id}
            className={
              'nav-item' + (location.pathname === n.id ? ' active' : '')
            }
            onClick={() => navigate(n.id)}>
            <span className="idx">{n.idx}</span>
            <span>{n.label}</span>
            <span className="arrow">&rarr;</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-foot">
        <div className="links">
          {Array.isArray(fields?.contacts) &&
            fields.contacts.map(contact => (
              <a
                key={contact.name}
                className="btn"
                href={contact.value}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: 'Interaction',
                    action: `View ${contact.name}`,
                  })
                }>
                {contact.name} &#x2197;
              </a>
            ))}
          {fields?.resume?.fields.file?.url && (
            <a
              className="btn"
              href={`https://${fields.resume.fields.file.url}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                ReactGA.event({
                  category: 'Interaction',
                  action: 'Download Resume',
                })
              }>
              Resume &#x2197;
            </a>
          )}
        </div>
      </div>
    </aside>
  );
};

const Content = () => {
  const [profile, setProfile] = useState<Entry<TypeProfile> | undefined>();
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    client
      .getEntry<TypeProfile>(ContentEntries.PROFILE)
      .then(res => {
        setProfile(res);
        setProfileLoading(false);
      })
      .catch(() => window.location.replace(ExternalLinks.LINKEDIN));
  }, []);

  if (profileLoading) return null;

  return (
    <div className="shell">
      <Sidebar profile={profile} />
      <main className="main">
        <Suspense fallback={null}>
          <Routes>
            <Route
              path={PageRoutes.ROOT}
              element={<Profile profile={profile} />}
            />
            <Route path={PageRoutes.PORTFOLIO} element={<Projects />} />
            <Route path={PageRoutes.FEEDBACK} element={<Feedback />} />
            <Route path="*" element={<Profile profile={profile} />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

const App = () => (
  <HashRouter>
    <Content />
  </HashRouter>
);

export default App;
