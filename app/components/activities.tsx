import Image from "next/image";
import profileImage from "../asset/avtar.png";
import sunImage from "../asset/sun.png";
import CurveText from "./tech";
export default function Activities() {
  return (
    <>
      <div className="mb-28 flex h-48 w-full flex-col items-stretch rounded-t-[50%] bg-gradient-to-b from-gray-100/60 via-white to-white pt-24 text-center 2xl:mb-32">
        <svg
          className="text-3xl 2xl:text-4xl self-center text-gray-900 mb-2 sm:mb-4 flex-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            className="uim-quaternary"
            d="M20.23 7.24L12 12L3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z"
            opacity=".25"
            fill="currentColor"
          ></path>
          <path
            className="uim-tertiary"
            d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            className="uim-primary"
            d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z"
            fill="currentColor"
          ></path>
        </svg>

        <div className="mb-2 flex flex-none items-center justify-center gap-2 text-xl font-bold">
          <div className="mr-4 h-px flex-1 bg-gradient-to-l from-gray-100 to-white"></div>
          <h2
            className="text-3xl font-bold 2xl:text-4xl"
            
          >
            The Home of Machine Learning
          </h2>
          <div className="ml-4 h-px flex-1 bg-gradient-to-r from-gray-100 to-white"></div>
        </div>

        <p
          className="flex-none text-lg text-gray-500 2xl:text-xl"
          
        >
          Create, discover and collaborate on ML better.
        </p>
      </div>
    </>
  );
}
