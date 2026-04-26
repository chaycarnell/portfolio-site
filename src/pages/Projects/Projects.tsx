import { ExternalLinks } from '@config/links';
import { client } from '@services/contentful/contentful';
import { Entry, TypeProject } from '@sharedTypes/contenful';
import { PageRoutes } from '@sharedTypes/enums';
import { runReveals } from '@utils/reveals';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

import ProjectDetail from './ProjectDetail';

const ProjectList = ({
  projects,
  onSelect,
}: {
  projects: Entry<TypeProject>[];
  onSelect: (project: Entry<TypeProject>) => void;
}) => {
  useEffect(() => {
    const cleanup = runReveals();
    return cleanup;
  }, []);

  return (
    <div className="view">
      <div className="topbar">
        <div className="crumb">
          <span>Chay Carnell</span>
          <span className="sep">/</span>
          <span className="cur">Portfolio</span>
        </div>
        <div className="crumb">{projects.length} projects</div>
      </div>

      <div className="page-head reveal">
        <div className="eyebrow">Selected work</div>
        <h1>
          Projects I&rsquo;ve built, led, and <em>delivered</em>.
        </h1>
      </div>

      <div className="projects">
        {projects.map(p => (
          <div
            className="project-row reveal"
            key={p.sys.id}
            onClick={() => onSelect(p)}>
            <div className="title">{p.fields.title}</div>
            <div className="meta">
              {p.fields.technologies?.map(t => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            {p.fields.projectImage?.[0]?.fields.file?.url && (
              <div className="thumb">
                <img
                  src={p.fields.projectImage[0].fields.file.url}
                  alt={p.fields.title || 'Project thumbnail'}
                  loading="lazy"
                />
              </div>
            )}
            <span className="cta-arrow">&rarr;</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState<Entry<TypeProject>[] | null>(null);
  const [selected, setSelected] = useState<Entry<TypeProject> | null>(null);

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: PageRoutes.PORTFOLIO,
      title: 'portfolio',
    });
    client
      .getEntries<TypeProject>({
        content_type: 'project',
        order: 'fields.position',
      })
      .then(res => setProjects(res.items))
      .catch(() => window.location.replace(ExternalLinks.LINKEDIN));
  }, []);

  if (!projects) return null;

  if (selected) {
    return (
      <ProjectDetail project={selected} onBack={() => setSelected(null)} />
    );
  }

  return <ProjectList projects={projects} onSelect={setSelected} />;
};

export default Projects;
