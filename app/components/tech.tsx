import { useEffect, useState } from "react";
import Image from "next/image";
import { TechData } from "../model/app-models";

export default function TechStack() {
  const [techData, setTechData] = useState<TechData[] | null>(null);
  //get the data from public/data/tech.json
  useEffect(() => {
    fetch("/data/tech.json")
      .then((res) => res.json())
      .then((data) => {
        setTechData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching tech:", error));
  }, []);
  return (
    <>
      <div className="flex items-center justify-center gap-2 text-2xl font-bold m-4 font-handlee dark:text-white">
        <div className="mr-2 h-px flex-1 translate-y-px bg-gradient-to-l from-gray-200 to-white"></div>
        Technology where I stand out! 💪
        <div className="ml-2 h-px flex-1 translate-y-px bg-gradient-to-r from-gray-200 to-white"></div>
      </div>
      <div className="flex flex-row gap-2">
        {techData?.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 text-lg font-firacode dark:text-white text-app-primary border border-app-primary 
              dark:border-white py-2 m-2 p-2 rounded-md shadow-xl transition-all duration-300 ease-in-out hover:border-white dark:hover:border-app-teal"
          >
            <Image src={tech.icon} width={24} height={24} alt={tech.name} />
            {tech.name}
          </div>
        ))}
      </div>
    </>
  );
}
