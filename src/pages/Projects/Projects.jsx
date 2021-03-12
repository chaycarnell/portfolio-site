import React, { useEffect, useState } from "react";
import { ContentCard, Text, LoadingProjects, Project } from "../../components";
import { getEntries } from "../../services/contentful";

const Render = () => {
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);

  const getProjects = () =>
    getEntries({
      content_type: "project",
      order: "sys.updatedAt",
    })
      .then((res) => {
        console.log("Projects: ", res.items);
        setProjects(res.items);
        setProjectsLoading(false);
      })
      .catch(() =>
        // I mean... if this errors may as well just send people to Linkedin ... yikes
        // window.location.replace("https://www.linkedin.com/in/chaycarnell/")
        console.log()
      );

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {projectsLoading && <LoadingProjects />}
      {!projectsLoading &&
        projects.map((project) => (
          <Project key={project.sys.id} project={project} />
        ))}
    </>
  );
};

export default Render;
