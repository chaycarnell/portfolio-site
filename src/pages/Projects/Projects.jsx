import React, { useEffect, useState } from "react";
import ReactGA from 'react-ga4';

import { LoadingProjects, Page, Project, Spacer } from "../../components";
import { getEntries } from "../../services/contentful";

const Render = () => {
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);

  const getProjects = () =>
    getEntries({
      content_type: "project",
      order: "fields.position",
    })
      .then((res) => {
        setProjects(res.items);
        setProjectsLoading(false);
      })
      .catch(() =>
        // I mean... if this errors may as well just send people to Linkedin ... yikes
        window.location.replace("https://www.linkedin.com/in/chaycarnell/")
      );

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/portfolio", title: "portfolio" });
    getProjects();
  }, []);

  return (
    <Page scrollable fullWidth>
      {(projectsLoading && <LoadingProjects />) ||
        projects.map((project) => (
          <Project key={project.sys.id} project={project} />
        ))}
      <Spacer space={"12px"} />
    </Page>
  );
};

export default Render;
