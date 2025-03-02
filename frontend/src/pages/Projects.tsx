import React, { useEffect, useState } from "react";
import axios from "axios";

interface Project {
  name: string;
  description: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/projects/")
      .then((response) => {
        setProjects(response.data); // Set projects from backend response
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Projects Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;
