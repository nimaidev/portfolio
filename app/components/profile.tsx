import profileImage from "../asset/profile.jpg";
import Image from "next/image";
import { ProfileData } from "../model/app-models";
import { useEffect, useState } from "react";
import Socials from "./socials";
import Link from "next/link";
import Tippy from "@tippyjs/react"; // Import Tippy from the correct package
import "tippy.js/dist/tippy.css"; // Import default styles

export default function Profile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [repoInfo, setRepoInfo] = useState<any | null>(null); // State for GitHub repo info

  // Fetch profile data
  useEffect(() => {
    fetch("/data/profile.json")
      .then((res) => res.json())
      .then((data) => {
        setProfile({
          name: data.name,
          bio: data.bio,
        });
      })
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  // Fetch GitHub repo data
  useEffect(() => {
    fetch("https://api.github.com/repos/nimaidev/joker")
      .then((res) => res.json())
      .then((data) => {
        setRepoInfo(data);
      })
      .catch((error) => console.error("Error fetching repo info:", error));
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
            <p className=" dark:text-slate-300 font-firacode">
              I am a software engineer passionate about{" "}
              <span className="font-bold dark:text-app-teal text-app-primary">
                system architecture, backend engineering, and tool building
              </span>
              . I enjoy designing scalable solutions, optimizing performance,
              and exploring new technologies. I am also the creator and
              maintainer of{" "}
              <Link className="text-app-primary dark:text-app-teal" href="">
                Joker DB
              </Link>
              , a key-value store designed with encryption for secure data
              storage.
            </p>
            <p className="dark:text-slate-300 font-firacode py-3">
              I started my journey in software development at{" "}
              <Link className="text-app-primary dark:text-app-teal" href="">
                Sears India
              </Link>
              , with a strong focus on Java and backend engineering, gradually
              expanding into microservices, cloud computing, and automation.
              Over the years, I have worked on building SaaS platforms,
              high-performance backend systems, and efficient cloud-based
              workflows.
            </p>

            <p className="dark:text-slate-300 font-firacode">
              I am currently working at{" "}
              <Link
                className="text-app-primary dark:text-app-teal"
                href="https://iqnext.io"
              >
                IQNext
              </Link>
              , where I focus on building a smart building management platform
              that enables organizations to optimize operations through
              data-driven insights and automation. I am also working on an
              AI-driven approach to enhance energy efficiency, leveraging
              intelligent analytics to reduce energy consumption and improve
              sustainability in facility management.
            </p>
            <div className="py-4">
              {/* <button className="btn dark:bg-app-teal bg-app-primary dark:text-app-primary text-app-white">
                Subscribe Email 📩
              </button> */}
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
