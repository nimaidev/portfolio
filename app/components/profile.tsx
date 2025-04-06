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
    <div>
      <div className="hero mt-10 font-handlee">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={profileImage}
            width={200}
            height={200}
            alt="Profile Image"
            className="rounded-full w-[200px] h-[200px]"
          />
          <div className="mx-4">
            <p className="dark:text-slate-300 font-firacode">
              I am a software engineer passionate about{" "}
              <span className="font-bold dark:text-app-teal text-app-primary">
                system architecture, backend engineering, and tool building
              </span>
              . I enjoy designing scalable solutions, optimizing performance,
              and exploring new technologies. I am also the creator and
              maintainer of {/* Joker DB Link with Tooltip */}
              <Tippy
                content={
                  <div className="text-sm dark:text-slate-300 dark:bg-gray-800 p-3 rounded-md shadow-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <img
                        src={repoInfo?.owner?.avatar_url}
                        alt="Avatar"
                        className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700"
                      />
                      <span className="font-bold text-app-white dark:text-slate-200">
                        {repoInfo?.owner?.login}
                      </span>
                    </div>
                    <p className="font-semibold text-app-white dark:text-slate-300">
                      Joker DB
                    </p>
                    <p className="text-app-white dark:text-slate-400 text-sm">
                      A key-value store designed with encryption for secure data
                      storage.
                    </p>
                    <p className="text-gray-500 dark:text-slate-500 text-xs mt-2">
                      📅 Last Updated:{" "}
                      {repoInfo?.updated_at
                        ? new Date(repoInfo.updated_at).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>
                }
              >
                <Link
                  className="text-app-primary dark:text-app-teal"
                  href="https://github.com/nimaidev/joker"
                  target="_blank"
                >
                  Joker DB
                </Link>
              </Tippy>
              , a key-value store designed with encryption for secure data
              storage.
            </p>
            <p className="dark:text-slate-300 font-firacode py-3">
              I started my journey in software development at{" "}
              <Tippy
                content={
                  <div className="text-sm dark:text-slate-300 dark:bg-gray-800 p-3 rounded-md shadow-lg flex items-center space-x-3">
                    <img
                      src="https://yt3.ggpht.com/-ftHPRLs0pWU/AAAAAAAAAAI/AAAAAAAAAAA/urUNjpUWOZM/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                      alt="Sears India Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-app-white dark:text-slate-300">
                        Sears India
                      </p>
                      <p className="text-app-white dark:text-slate-400 text-sm">
                        A global retailer with a focus on technology and
                        innovation.
                      </p>
                    </div>
                  </div>
                }
              >
                <Link className="text-app-primary dark:text-app-teal" href="">
                  Sears India
                </Link>
              </Tippy>
              , with a strong focus on Java and backend engineering, gradually
              expanding into microservices, cloud computing, and automation.
              Over the years, I have worked on building SaaS platforms,
              high-performance backend systems, and efficient cloud-based
              workflows.
            </p>

            <p className="dark:text-slate-300 font-firacode">
              I am currently working at{" "}
              <Tippy
                content={
                  <div className="text-sm dark:text-slate-300 dark:bg-gray-800 p-3 rounded-md shadow-lg flex items-center space-x-3">
                    <img
                      src="https://cdn.prod.website-files.com/624a8d7d95b99213c2272331/624b1e16e679dbf4627e73b6_iqnext%20logo.svg"
                      alt="IQNext Logo"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-app-white dark:text-slate-300">
                        IQNext
                      </p>
                      <p className="text-app-white dark:text-slate-400 text-sm">
                        A smart building management platform.
                      </p>
                    </div>
                  </div>
                }
              >
                <Link
                  className="text-app-primary dark:text-app-teal"
                  href="https://iqnext.io"
                >
                  IQNext
                </Link>
              </Tippy>
              , where I focus on building a smart building management platform
              that enables organizations to optimize operations through
              data-driven insights and automation. I am also working on an
              AI-driven approach to enhance energy efficiency, leveraging
              intelligent analytics to reduce energy consumption and improve
              sustainability in facility management.
            </p>
            <div className="py-4">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Hello</p>
      </div>
    </div>
  );
}
