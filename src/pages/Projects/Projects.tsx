import { Entry } from 'contentful';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

import { LoadingProjects, Page, Project, Spacer } from '../../components';
import { client } from '../../services/contentful';
import { TypeProject } from '../../types/contenful';

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
      .catch(() =>
        // I mean... if this errors may as well just send people to Linkedin ... yikes
        window.location.replace('https://www.linkedin.com/in/chaycarnell/'),
      );

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '/portfolio',
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
