import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Entry, TypeProfile } from '@sharedTypes/contenful';
import { PageRoutes } from '@sharedTypes/enums';
import { runReveals } from '@utils/reveals';
import { richTextOptions } from '@utils/richTextOptions';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useNavigate } from 'react-router-dom';

const Profile = ({ profile }: { profile: Entry<TypeProfile> | undefined }) => {
  const navigate = useNavigate();
  const fields = profile?.fields;

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: PageRoutes.ROOT,
      title: 'profile',
    });
    const cleanup = runReveals();
    return cleanup;
  }, []);

  return (
    <div className="view">
      <div className="topbar">
        <div className="crumb">
          <span>Chay Carnell</span>
          <span className="sep">/</span>
          <span className="cur">Profile</span>
        </div>
      </div>

      <div className="page-head reveal">
        <div className="eyebrow">About</div>
        <h1>
          Building product-driven software from{' '}
          <em>startups to global brands</em>.
        </h1>
      </div>

      {fields?.about && (
        <div className="bio reveal">
          {documentToReactComponents(fields.about, richTextOptions)}
        </div>
      )}

      {(fields?.skills || fields?.technologies) && (
        <>
          <div className="section-title reveal">Skills</div>
          <div className="skills reveal">
            {fields?.skills?.map(s => (
              <span className="skill primary" key={s}>
                {s}
              </span>
            ))}
            {fields?.technologies?.map(s => (
              <span className="skill" key={s}>
                {s}
              </span>
            ))}
          </div>
        </>
      )}

      <div className="cta-strip reveal">
        <h3>
          Not convinced? <em>See what people say about working with me</em>, or
          take a look at my portfolio.
        </h3>
        <div className="cta-actions">
          <button
            className="cta-primary"
            onClick={() => navigate(PageRoutes.PORTFOLIO)}>
            View portfolio &rarr;
          </button>
          <button
            className="cta-ghost"
            onClick={() => navigate(PageRoutes.FEEDBACK)}>
            Read feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
