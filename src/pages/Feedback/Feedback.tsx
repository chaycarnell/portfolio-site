import { ExternalLinks } from '@config/links';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { client } from '@services/contentful/contentful';
import { Entry, TypeFeedback } from '@sharedTypes/contenful';
import { PageRoutes } from '@sharedTypes/enums';
import { runReveals } from '@utils/reveals';
import { inlineRichTextOptions } from '@utils/richTextOptions';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

const Feedback = () => {
  const [items, setItems] = useState<Entry<TypeFeedback>[] | null>(null);

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: PageRoutes.FEEDBACK,
      title: 'feedback',
    });
    client
      .getEntries<TypeFeedback>({
        content_type: 'feedback',
        order: ['sys.updatedAt'],
      })
      .then(res => setItems(res.items))
      .catch(() => window.location.replace(ExternalLinks.LINKEDIN));
  }, []);

  useEffect(() => {
    if (!items) return;
    const cleanup = runReveals();
    return cleanup;
  }, [items]);

  return (
    <div className="view">
      <div className="topbar">
        <div className="crumb">
          <span>Chay Carnell</span>
          <span className="sep">/</span>
          <span className="cur">Feedback</span>
        </div>
        <div className="crumb">{items?.length ?? 0} quotes</div>
      </div>

      <div className="page-head reveal">
        <div className="eyebrow">Feedback</div>
        <h1>
          What colleagues and clients have <em>said about working</em> with me.
        </h1>
        <p className="lede">
          Samples below are from formal performance reviews and colleague
          recognition. All feedback sources can be verified on request.
        </p>
      </div>

      {items && items.length > 0 && (
        <div className="feedback-meta reveal">
          <span className="count">{items.length}</span>
          <span className="count-unit">Testimonials</span>
        </div>
      )}

      <div className="masonry">
        {items?.map(item => (
          <div className="quote-card reveal" key={item.sys.id}>
            <div className="mark">&ldquo;</div>
            <p className="body">
              {item.fields.feedback &&
                documentToReactComponents(
                  item.fields.feedback,
                  inlineRichTextOptions,
                )}
            </p>
            <div className="by">
              <div className="role-name">{item.fields.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
