import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Entry, TypeProject } from '@sharedTypes/contenful';
import { runReveals } from '@utils/reveals';
import { richTextOptions } from '@utils/richTextOptions';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

const ProjectDetail = ({
  project,
  onBack,
}: {
  project: Entry<TypeProject>;
  onBack: () => void;
}) => {
  const {
    title,
    summary,
    projectImage = [],
    references = [],
    technologies = [],
  } = project.fields;
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      projectImage.map(
        image =>
          new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => reject();
            img.src = image.fields.file?.url as string;
          }),
      ),
    )
      .then(() => {
        if (!cancelled) setImagesLoaded(true);
      })
      .catch(() => {
        if (!cancelled) setImagesLoaded(true);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.sys.id]);

  useEffect(() => {
    const cleanup = runReveals();
    return cleanup;
  }, [imagesLoaded]);

  return (
    <div className="view">
      <div className="topbar">
        <div className="crumb">
          <span onClick={onBack} style={{ cursor: 'pointer' }}>
            Portfolio
          </span>
          <span className="sep">/</span>
          <span className="cur">{title}</span>
        </div>
      </div>

      <div className="project-detail">
        <button className="back-link" onClick={onBack}>
          &larr; Back to portfolio
        </button>

        <div className="page-head">
          <h1>{title}</h1>
        </div>

        {imagesLoaded && projectImage.length > 0 && (
          <div className="carousel-wrapper reveal">
            <Carousel
              showThumbs={false}
              showStatus={projectImage.length > 1}
              showArrows={projectImage.length > 1}
              showIndicators={projectImage.length > 1}
              infiniteLoop
              swipeable>
              {projectImage.map(image => (
                <div key={image.sys.id}>
                  <img
                    src={image.fields.file?.url as string}
                    alt={
                      (image.fields.description as string) || 'project image'
                    }
                  />
                </div>
              ))}
            </Carousel>
          </div>
        )}

        {summary && (
          <div className="project-summary reveal">
            {documentToReactComponents(summary, richTextOptions)}
          </div>
        )}

        {technologies.length > 0 && (
          <>
            <div className="section-title reveal">Technologies</div>
            <div className="tech-tags reveal">
              {technologies.map(t => (
                <span className="skill" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </>
        )}

        {references.length > 0 && (
          <>
            <div className="section-title reveal">References</div>
            <div className="references reveal">
              {references.map(ref => (
                <a
                  key={ref.title}
                  onClick={() => window.open(ref.link, '_blank')}
                  role="link"
                  tabIndex={0}>
                  {ref.title}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
