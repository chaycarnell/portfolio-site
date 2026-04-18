import { LoadingProjects, Page, Project, Spacer } from '@components';
import { ExternalLinks } from '@config/links';
import { client } from '@services/contentful/contentful';
import { Entry, TypeProject } from '@sharedTypes/contenful';
import { PageRoutes } from '@sharedTypes/enums';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

const Render = () => {
  const [projects, setProjects] = useState<Entry<TypeProject>[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(true);

  const getProjects = () =>
    client
      .getEntries<TypeProject>({
        content_type: 'project',
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
    <>
      <title>Portfolio | Chay Carnell</title>
      <meta
        name="description"
        content="Professional project portfolio Chay Carnell has delivered for clients"
      />
      <Page scrollable fullWidth>
        {(projectsLoading && <LoadingProjects />) ||
          projects.map(project => (
            <Project key={project.sys.id} project={project.fields} />
          ))}
        <Spacer $space={'12px'} />
      </Page>
    </>
  );
};

export default Render;
