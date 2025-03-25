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
      <div className="mb-2 mt-10 flex items-center justify-center gap-2 text-2xl font-bold sm:mb-14 font-handlee dark:text-white">
        <div className="mr-2 h-px flex-1 translate-y-px bg-gradient-to-l from-gray-200 to-white"></div>
        Technology where I stand out! 💪
        <div className="ml-2 h-px flex-1 translate-y-px bg-gradient-to-r from-gray-200 to-white"></div>
      </div>
      {techData?.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center justify-center gap-2 text-lg font-firacode dark:text-white text-app-primary"
        >
          <Image
            src={tech.icon}
            width={24}
            height={24}
            alt={tech.name}
            />
            {tech.name}
          <div className="w-6 h-6"></div>
        </div>
      ))}
    </>
  );
}

