import { LoadingProjects, Page, Project, Spacer } from '@components';
import { ExternalLinks } from '@config/links';
import { client } from '@services/contentful/contentful';
import { TypeProject } from '@sharedTypes/contenful';
import { PageRoutes } from '@sharedTypes/enums';
import { Entry } from 'contentful';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

const Render = () => {
  const [projects, setProjects] = useState<
    Entry<TypeProject, undefined, string>[]
  >([]);
  const [projectsLoading, setProjectsLoading] = useState(true);

  const getProjects = () =>
    client
      .getEntries<TypeProject>({
        content_type: 'project',
        // @ts-expect-error custom field
        order: 'fields.position',
      })
      .then(res => {
        setProjects(res.items);
        setProjectsLoading(false);
      })
      .catch(() => window.location.replace(ExternalLinks.LINKEDIN));

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: PageRoutes.PORTFOLIO,
      title: 'portfolio',
    });
    getProjects();
  }, []);

  return (
    <Page scrollable fullWidth>
      {(projectsLoading && <LoadingProjects />) ||
        projects.map(project => (
          <Project key={project.sys.id} project={project.fields} />
        ))}
      <Spacer $space={'12px'} />
    </Page>
  );
};

export default Render;
