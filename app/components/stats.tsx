import { useEffect, useState } from "react";
import { GitHubUser } from "@/app/model/app-models";
import { getProfile } from "../service/app-service";

export default function Stats() {

  const [profile, setProfile] = useState<GitHubUser>();
  const[error, setError] = useState(false)
  useEffect(() => {
      const fetchData = () => {
        try {
          getProfile(setProfile);
        } catch (error) {
          setError(true);
        }
      };
  
      fetchData();
    }, []);

  return (
    <>
      <div className="flex hidden sm:flex stats shadow align-center align-middle mt-10 mb-5 dark:bg-slate-600">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current dark:stroke-app-purple"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title dark:text-slate-300">Total Commits</div>
          <div className="stat-value text-primary dark:text-app-purple">252</div>
          <div className="stat-desc dark:text-slate-300">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current dark:stroke-app-sky"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title dark:text-slate-300">Lines of Code Written</div>
          <div className="stat-value text-secondary dark:text-app-sky">2.6K</div>
          <div className="stat-desc dark:text-slate-300">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full dark:bg-slate-300">
                <img src={profile?.avatar_url}/>
              </div>
            </div>
          </div>
          <div className="stat-value dark:text-app-dark-yellow">86%</div>
          <div className="stat-title dark:text-slate-300">Tasks done</div>
          <div className="stat-desc text-secondary dark:text-app-dark-yellow">31 tasks remaining</div>
        </div>
      </div>
    </>
  );
}
