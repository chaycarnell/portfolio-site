import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Entry, TypeProject } from '@sharedTypes/contenful';
import { runReveals } from '@utils/reveals';
import { richTextOptions } from '@utils/richTextOptions';
import { useCallback, useEffect, useRef, useState } from 'react';

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
  const [slide, setSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (track) {
      track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const idx = Math.round(track.scrollLeft / track.clientWidth);
      setSlide(idx);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const cleanup = runReveals();
    return cleanup;
  }, []);

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

        {projectImage.length > 0 && (
          <div className="carousel-wrapper reveal">
            <div className="carousel-track" ref={trackRef}>
              {projectImage.map((image, i) => (
                <div className="carousel-slide" key={image.sys.id}>
                  <img
                    src={image.fields.file?.url as string}
                    alt={
                      (image.fields.description as string) || 'project image'
                    }
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </div>
            {projectImage.length > 1 && (
              <>
                <button
                  className="carousel-arrow carousel-prev"
                  onClick={() =>
                    goTo(
                      (slide - 1 + projectImage.length) % projectImage.length,
                    )
                  }>
                  &#8249;
                </button>
                <button
                  className="carousel-arrow carousel-next"
                  onClick={() => goTo((slide + 1) % projectImage.length)}>
                  &#8250;
                </button>
                <div className="carousel-dots">
                  {projectImage.map((_, i) => (
                    <button
                      key={i}
                      className={
                        'carousel-dot' + (i === slide ? ' active' : '')
                      }
                      onClick={() => goTo(i)}
                    />
                  ))}
                </div>
              </>
            )}
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
