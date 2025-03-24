import profileImage from "../asset/profile.jpg";
import Image from "next/image";
import { ProfileData } from "../model/app-models";
import { useEffect, useState } from "react";
export default function Profile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  //get the data from public/data/profile.json
  useEffect(() => {
    fetch("/data/profile.json")
      .then((res) => res.json())
      .then((data) => {
        setProfile({
          name: data.name,
          bio: data.bio,
        });
        console.log(data);
      })
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);
  return (
    <>
      {/* <Quotes /> */}
      {/* <Stats/> */}
      <div className="hero mt-10 font-handlee">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={profileImage}
            width={200}
            height={200}
            alt="Picture of the author"
            className="rounded-full w-[200px] h-[200px]"
          />
          <div className="mx-4">
            <p className="py-6 dark:text-slate-300 font-firacode">
              I am a software engineer passionate about{" "}
              <span className="font-bold dark:text-app-teal text-app-primary">
                system architecture, backend engineering, and tool building
              </span>
              . I enjoy designing scalable solutions, optimizing performance,
              and exploring new technologies. I am also the creator and
              maintainer of Joker DB, a key-value store designed with encryption
              for secure data storage.
            </p>
            <p className="dark:text-slate-300 font-firacode">
              I started my journey in software development with a strong focus
              on Java and backend engineering, gradually expanding into
              microservices, cloud computing, and automation. Over the years, I
              have worked on building SaaS platforms, high-performance backend
              systems, and efficient cloud-based workflows.
            </p>
            {/* <div className="py-4">
              <button className="btn dark:bg-app-teal bg-app-primary dark:text-app-primary text-app-white">
                Subscribe Email 📩
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
