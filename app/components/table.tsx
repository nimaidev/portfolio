"use client"; // This is a client component 👈🏽
import { BlogRepo, GitHubRepository } from "@/app/model/app-models";
import { getBlogData, getRepoData } from "@/app/service/app-service";
import { formatDate } from "@/app/service/custom-service";

import { useEffect, useState } from "react";

export default function Table() {
  const [repoData, setRepoData] = useState<GitHubRepository[]>([]);
  const [blogData, setBlogData] = useState<BlogRepo[]>([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = () => {
      try {
        getRepoData(setRepoData);
        getBlogData(setBlogData);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="container mx-auto  pt-2 sm:mb-32 mt-5">
        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3 font-handlee">
          <div className="absolute h-full w-2/3"></div>
          <div className="relative col-span-1 flex flex-col items-stretch text-center">
            <h2 className="mb-5 flex items-center justify-center gap-2 text-lg font-semibold 2xl:mb-6 2xl:text-xl dark:text-white">
              Active Github Repo 🏷️
            </h2>
            <div className="mb-3 flex flex-col gap-2.5 rounded-xl bg-white/40 p-3 backdrop-blur-lg sm:mb-7">
              <article className="overview-card-wrapper group white ">
                {repoData.map((repo) => (
                  <>
                    <a className="block p-2" href={repo.html_url}>
                      <header className="flex items-center mb-0.5">
                        <h4 className="text-md truncate font-mono text-black :group-hover:text-yellow-500 group-hover:text-indigo-600 text-smd">
                          0x4E43/{repo.name}
                        </h4>
                      </header>
                      <div className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400 dark:text-slate-300">
                        <span className="truncate">
                          Last Commited on {formatDate(repo.pushed_at)}
                        </span>
                      </div>
                    </a>
                  </>
                ))}
              </article>
            </div>
            <a
              href="https://github.com/0x4E43?tab=repositories"
              className="self-center underline decoration-gray-300 underline-offset-8 transition-all hover:decoration-gray-800 hover:underline-offset-[6px] max-sm:mb-5 dark:text-slate-300"
            >
              Browse 25+ repos
            </a>
          </div>
          <div className="relative col-span-1 flex flex-col items-stretch text-center">
            <h2 className="mb-5 flex items-center justify-center gap-2 text-lg font-semibold 2xl:mb-6 2xl:text-xl dark:text-white">
              Lesser-Known Innovations 🧪
            </h2>
            <div className="mb-3 flex flex-col gap-2.5 rounded-xl bg-white/40 p-3 backdrop-blur-lg sm:mb-7">
              <article className="">
                <a
                  href="/spaces/HuggingFaceH4/open_llm_leaderboard"
                  className="relative z-0 mx-auto flex flex-col items-center justify-center bg-gradient-to-br p-4 filter hover:brightness-110 from-green-600 to-indigo-600 overflow-hidden h-16 rounded-lg"
                >
                  <div className="absolute right-16 flex flex-wrap content-start gap-1.5 overflow-hidden hidden"></div>

                  <div className="absolute flex items-center rounded-xl top-2 right-3.5 text-xs">
                    <svg
                      className="mr-1.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                    >
                      <path d="M22.45,6a5.47,5.47,0,0,1,3.91,1.64,5.7,5.7,0,0,1,0,8L16,26.13,5.64,15.64a5.7,5.7,0,0,1,0-8,5.48,5.48,0,0,1,7.82,0L16,10.24l2.53-2.58A5.44,5.44,0,0,1,22.45,6m0-2a7.47,7.47,0,0,0-5.34,2.24L16,7.36,14.89,6.24a7.49,7.49,0,0,0-10.68,0,7.72,7.72,0,0,0,0,10.82L16,29,27.79,17.06a7.72,7.72,0,0,0,0-10.82A7.49,7.49,0,0,0,22.45,4Z"></path>
                    </svg>
                    <span className="text-white">120</span>
                  </div>
                  <div className="absolute opacity-60 text-4xl">🏆</div>
                  <h4 className="z-40 max-w-full truncate text-center font-bold leading-tight text-blue-50 text-md">
                    Coming Soon
                  </h4>
                </a>
              </article>
            </div>
            <a
              href="/spaces"
              className="self-center underline decoration-gray-300 underline-offset-8 transition-all hover:decoration-gray-800 hover:underline-offset-[6px] max-sm:mb-5 dark:text-slate-300"
            >
              Browse 10+ Projects{" "}
            </a>
          </div>
          <div className="relative col-span-1 flex flex-col items-stretch text-center">
            <h2 className="mb-5 flex items-center justify-center gap-2 text-lg font-semibold 2xl:mb-6 2xl:text-xl dark:text-white">
              Byte-Sized Tech Exploration 🧭
            </h2>
            <div className="mb-3 flex flex-col gap-2.5 rounded-xl bg-white/40 p-3 backdrop-blur-lg sm:mb-7">
              <article className="overview-card-wrapper group white ">
                {blogData.map((blog) => (
                  <>
                    <a className="block p-2" href={blog.url}>
                      <header className="flex items-center mb-0.5">
                        <h4 className="text-md truncate font-mono text-black dark:group-hover:text-yellow-500 group-hover:text-indigo-600 text-smd">
                          {blog.title}
                        </h4>
                      </header>
                      <div className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400">
                        <span className="truncate">
                          Last Posted on {formatDate(blog.published_timestamp)}
                        </span>
                      </div>
                    </a>
                  </>
                ))}
              </article>
            </div>
            <a
              href="https://dev.to/0x4e43"
              className="self-center underline decoration-gray-300 underline-offset-8 transition-all hover:decoration-gray-800 hover:underline-offset-[6px] max-sm:mb-5 dark:text-slate-300"
            >
              See all Blogs
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
