import Link from "next/link";
import { useEffect, useState } from "react";
import { ProjectData } from "../model/app-models";

export default function ActiveProject() {
  const [projectData, setProjectData] = useState<ProjectData[]>([]);

  useEffect(() => {
    const getProjectDetails = async () => {
      try {
        const response = await fetch("/data/recent-projects.json");
        const data = await response.json();
        setProjectData(data.slice(0,5));
      } catch (error) {
        console.error(error);
        setProjectData([]);
      }
    };
    getProjectDetails();
  }, []);

  return (
    <div className="w-[50%]">
      <div>
        <p className="text-2xl text-black dark:text-app-white font-firacode">
          Active Projects{" "}
          <Link
            className="text-sm text-app-primary dark:text-app-teal"
            href="/blogs"
          >
            All Projects-{">"}
          </Link>
        </p>
        <p className="text-sm text-gray-500">My part-time experiments.</p>
      </div>
      <div className="mt-3 font-firacode">
      {projectData.map(project => {return(
        <div className="m-2" key={project.name}>
          <li className="text-md font-bold">{project.date}</li>
            <a className="text-[17px] text-app-primary dark:text-app-teal italic underline" href={project.url}>{project.name}</a>
            <p><i>{project.description}</i></p>
        </div>
      )})}
      </div>
    </div>
  );
}
