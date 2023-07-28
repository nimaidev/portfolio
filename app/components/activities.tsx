import Image from "next/image";
import profileImage from "../asset/avtar.png";
import sunImage from "../asset/sun.png";
import CurveText from "./tech";
export default function Activities() {
  return (
    <>
      <div className="mb-2 mt-10 flex items-center justify-center gap-2 text-2xl font-bold sm:mb-14 font-handlee">
        <div className="mr-2 h-px flex-1 translate-y-px bg-gradient-to-l from-gray-200 to-white"></div>
        My Activity Time Machine! 📈
        <div className="ml-2 h-px flex-1 translate-y-px bg-gradient-to-r from-gray-200 to-white"></div>
      </div>
      <div className="container mx-auto mb-16 pt-12 sm:mb-32 sm:pt-20">
        <div className="mb-10 flex items-center justify-center gap-2 text-xl font-bold sm:mb-14">
          <div className="mr-2 h-px flex-1 translate-y-px bg-gradient-to-l from-gray-200 to-white"></div>
          Trending on
          <img
            src="/front/assets/huggingface_logo-noborder.svg"
            className="w-8"
            alt=""
          />
          this week
          <div className="ml-2 h-px flex-1 translate-y-px bg-gradient-to-r from-gray-200 to-white"></div>
        </div>
        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="absolute h-full w-2/3 bg-gradient-to-br from-indigo-200/30 to-red-100/40 blur-2xl max-lg:translate-x-1/3 lg:h-96 lg:w-full lg:translate-y-24 lg:-rotate-2 lg:rounded-[50%] lg:from-indigo-200/80 lg:via-red-100/60 lg:to-gray-50"></div>
          <div className="relative col-span-1 flex flex-col items-stretch text-center">
            <h2 className="mb-5 flex items-center justify-center gap-2 text-lg font-semibold 2xl:mb-6 2xl:text-xl">
              Recent Blogs📝
            </h2>
            <div className="mb-3 flex flex-col gap-2.5 rounded-xl bg-white/40 p-3 backdrop-blur-lg sm:mb-7">
              <article className="overview-card-wrapper group white ">
                <a
                  className="block p-2"
                  href="/stabilityai/stable-diffusion-xl-base-1.0"
                >
                  <header
                    className="flex items-center mb-0.5"
                    title="stabilityai/stable-diffusion-xl-base-1.0"
                  >
                    <h4 className="text-md truncate font-mono text-black dark:group-hover:text-yellow-500 group-hover:text-indigo-600 text-smd">
                      stabilityai/stable-diffusion-xl-base-1.0
                    </h4>
                  </header>
                  <div className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400">
                    <span className="truncate">
                      Updated
                      <time title="Fri, 28 Jul 2023 18:13:05 GMT">
                        about 1 hour ago
                      </time>
                    </span>
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"
                      ></path>
                    </svg>
                    36.4k
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-1"
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
                    768
                  </div>
                </a>
              </article>
              <article className="overview-card-wrapper group white ">
                <a className="block p-2" href="/stabilityai/StableBeluga2">
                  <header
                    className="flex items-center mb-0.5"
                    title="stabilityai/StableBeluga2"
                  >
                    <h4 className="text-md truncate font-mono text-black dark:group-hover:text-yellow-500 group-hover:text-indigo-600 text-smd">
                      stabilityai/StableBeluga2
                    </h4>
                  </header>
                  <div className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400">
                    <span className="truncate">
                      Updated
                      <time title="Fri, 28 Jul 2023 14:08:12 GMT">
                        about 5 hours ago
                      </time>
                    </span>
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"
                      ></path>
                    </svg>
                    110k
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-1"
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
                    548
                  </div>
                </a>
              </article>
              <article className="overview-card-wrapper group white ">
                <a className="block p-2" href="/meta-llama/Llama-2-7b">
                  <header
                    className="flex items-center mb-0.5"
                    title="meta-llama/Llama-2-7b"
                  >
                    <h4 className="text-md truncate font-mono text-black dark:group-hover:text-yellow-500 group-hover:text-indigo-600 text-smd">
                      meta-llama/Llama-2-7b
                    </h4>
                  </header>
                  <div className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400">
                    <span className="truncate">
                      Updated
                      <time title="Wed, 19 Jul 2023 21:48:18 GMT">
                        9 days ago
                      </time>
                    </span>
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-1"
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
                    1.24k
                  </div>
                </a>
              </article>
              <article className="overview-card-wrapper group white ">
                <a
                  className="block p-2"
                  href="/stabilityai/stable-diffusion-xl-refiner-1.0"
                >
                  <header
                    className="flex items-center mb-0.5"
                    title="stabilityai/stable-diffusion-xl-refiner-1.0"
                  >
                    <h4 className="text-md truncate font-mono text-black dark:group-hover:text-yellow-500 group-hover:text-indigo-600 text-smd">
                      stabilityai/stable-diffusion-xl-refiner-1.0
                    </h4>
                  </header>
                  <div className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400">
                    <span className="truncate">
                      Updated
                      <time title="Fri, 28 Jul 2023 18:54:19 GMT">
                        26 minutes ago
                      </time>
                    </span>
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"
                      ></path>
                    </svg>
                    17.6k
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-1"
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
                    307
                  </div>
                </a>
              </article>
              <article className="overview-card-wrapper group white ">
                <a className="block p-2" href="/meta-llama/Llama-2-70b-chat-hf">
                  <header
                    className="flex items-center mb-0.5"
                    title="meta-llama/Llama-2-70b-chat-hf"
                  >
                    <h4 className="text-md truncate font-mono text-black dark:group-hover:text-yellow-500 group-hover:text-indigo-600 text-smd">
                      meta-llama/Llama-2-70b-chat-hf
                    </h4>
                  </header>
                  <div className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400">
                    <span className="truncate">
                      Updated
                      <time title="Mon, 24 Jul 2023 07:33:55 GMT">
                        4 days ago
                      </time>
                    </span>
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"
                      ></path>
                    </svg>
                    84.3k
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-1"
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
                    745
                  </div>
                </a>
              </article>
            </div>
            <a
              href="/models"
              className="self-center underline decoration-gray-300 underline-offset-8 transition-all hover:decoration-gray-800 hover:underline-offset-[6px] max-sm:mb-5"
            >
              Browse +25 blogs
            </a>
          </div>
          <div className="relative col-span-1 flex flex-col items-stretch text-center">
            <h2 className="mb-5 flex items-center justify-center gap-2 text-lg font-semibold 2xl:mb-6 2xl:text-xl">
              Active Github Repos 🏷️
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
                    <span className="text-white">3.82k</span>
                  </div>
                  <div className="absolute opacity-60 text-4xl">🏆</div>
                  <h4 className="z-40 max-w-full truncate text-center font-bold leading-tight text-blue-50 text-md">
                    Open LLM Leaderboard
                  </h4>
                </a>
              </article>
              <article className="">
                <a
                  href="/spaces/ysharma/Explore_llamav2_with_TGI"
                  className="relative z-0 mx-auto flex flex-col items-center justify-center bg-gradient-to-br p-4 filter hover:brightness-110 from-green-600 to-indigo-600 overflow-hidden h-16 rounded-lg"
                >
                  <div className="absolute right-16 flex flex-wrap content-start gap-1.5 overflow-hidden hidden">
                    <div className="inline-flex select-none items-center overflow-hidden font-mono  rounded bg-white/10 px-1 py-0 leading-tight text-white opacity-80">
                      Running
                      <span className="mx-1">on</span>
                      <span className="-skew-x-6 truncate font-bold uppercase">
                        cpu upgrade
                      </span>
                    </div>
                  </div>

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
                    <span className="text-white">756</span>
                  </div>
                  <div className="absolute opacity-60 text-4xl">💻</div>
                  <h4 className="z-40 max-w-full truncate text-center font-bold leading-tight text-blue-50 text-md">
                    Explore Llamav2 With TGI
                  </h4>
                </a>
              </article>
              <article className="">
                <a
                  href="/spaces/dvruette/fabric"
                  className="relative z-0 mx-auto flex flex-col items-center justify-center bg-gradient-to-br p-4 filter hover:brightness-110 from-blue-600 to-purple-600 overflow-hidden h-16 rounded-lg"
                >
                  <div className="absolute right-16 flex flex-wrap content-start gap-1.5 overflow-hidden hidden">
                    <div className="inline-flex select-none items-center overflow-hidden font-mono  rounded bg-white/10 px-1 py-0 leading-tight text-white opacity-80">
                      Running
                      <span className="mx-1">on</span>
                      <span className="-skew-x-6 truncate font-bold uppercase">
                        a10g
                      </span>
                    </div>
                  </div>

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
                    <span className="text-white">191</span>
                  </div>
                  <div className="absolute opacity-60 text-4xl">🎨</div>
                  <h4 className="z-40 max-w-full truncate text-center font-bold leading-tight text-blue-50 text-md">
                    FABRIC: Personalizing Diffusion Models with Iterative
                    Feedback
                  </h4>
                </a>
              </article>
              <article className="">
                <a
                  href="/spaces/stabilityai/stable-diffusion"
                  className="relative z-0 mx-auto flex flex-col items-center justify-center bg-gradient-to-br p-4 filter hover:brightness-110 from-yellow-600 to-gray-600 overflow-hidden h-16 rounded-lg"
                >
                  <div className="absolute right-16 flex flex-wrap content-start gap-1.5 overflow-hidden hidden">
                    <div className="inline-flex select-none items-center overflow-hidden font-mono  rounded bg-white/10 px-1 py-0 leading-tight text-white opacity-80">
                      Running
                      <span className="mx-1">on</span>
                      <span className="-skew-x-6 truncate font-bold uppercase">
                        cpu upgrade
                      </span>
                    </div>
                  </div>

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
                    <span className="text-white">8.92k</span>
                  </div>
                  <div className="absolute opacity-60 text-4xl">🔥</div>
                  <h4 className="z-40 max-w-full truncate text-center font-bold leading-tight text-blue-50 text-md">
                    Stable Diffusion 2-1
                  </h4>
                </a>
              </article>
              <article className="">
                <a
                  href="/spaces/huggingface-projects/llama-2-13b-chat"
                  className="relative z-0 mx-auto flex flex-col items-center justify-center bg-gradient-to-br p-4 filter hover:brightness-110 from-indigo-600 to-pink-600 overflow-hidden h-16 rounded-lg"
                >
                  <div className="absolute right-16 flex flex-wrap content-start gap-1.5 overflow-hidden hidden">
                    <div className="inline-flex select-none items-center overflow-hidden font-mono  rounded bg-white/10 px-1 py-0 leading-tight text-white opacity-80">
                      Running
                      <span className="mx-1">on</span>
                      <span className="-skew-x-6 truncate font-bold uppercase">
                        a10g
                      </span>
                    </div>
                  </div>

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
                    <span className="text-white">140</span>
                  </div>
                  <div className="absolute opacity-60 text-4xl">🦙</div>
                  <h4 className="z-40 max-w-full truncate text-center font-bold leading-tight text-blue-50 text-md">
                    Llama 2 13b Chat
                  </h4>
                </a>
              </article>
            </div>
            <a
              href="/spaces"
              className="self-center underline decoration-gray-300 underline-offset-8 transition-all hover:decoration-gray-800 hover:underline-offset-[6px] max-sm:mb-5"
            >
              Browse +100k applications
            </a>
          </div>
          <div className="relative col-span-1 flex flex-col items-stretch text-center">
            <h2 className="mb-5 flex items-center justify-center gap-2 text-lg font-semibold 2xl:mb-6 2xl:text-xl">
              <svg
                className="text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 25 25"
              >
                <ellipse
                  cx="12.5"
                  cy="5"
                  fill="currentColor"
                  fill-opacity="0.25"
                  rx="7.5"
                  ry="2"
                ></ellipse>
                <path
                  d="M12.5 15C16.6421 15 20 14.1046 20 13V20C20 21.1046 16.6421 22 12.5 22C8.35786 22 5 21.1046 5 20V13C5 14.1046 8.35786 15 12.5 15Z"
                  fill="currentColor"
                  opacity="0.5"
                ></path>
                <path
                  d="M12.5 7C16.6421 7 20 6.10457 20 5V11.5C20 12.6046 16.6421 13.5 12.5 13.5C8.35786 13.5 5 12.6046 5 11.5V5C5 6.10457 8.35786 7 12.5 7Z"
                  fill="currentColor"
                  opacity="0.5"
                ></path>
                <path
                  d="M5.23628 12C5.08204 12.1598 5 12.8273 5 13C5 14.1046 8.35786 15 12.5 15C16.6421 15 20 14.1046 20 13C20 12.8273 19.918 12.1598 19.7637 12C18.9311 12.8626 15.9947 13.5 12.5 13.5C9.0053 13.5 6.06886 12.8626 5.23628 12Z"
                  fill="currentColor"
                ></path>
              </svg>
              Datasets
            </h2>
            <div className="mb-3 flex flex-col gap-2.5 rounded-xl bg-white/40 p-3 backdrop-blur-lg sm:mb-7">
              <article className="overview-card-wrapper group white ">
                <a
                  className="block p-2"
                  href="/datasets/fka/awesome-chatgpt-prompts"
                >
                  <header
                    className="flex items-center mb-0.5"
                    title="fka/awesome-chatgpt-prompts"
                  >
                    <h4 className="text-md truncate font-mono text-black dark:group-hover:text-yellow-500 group-hover:text-red-600 text-smd">
                      fka/awesome-chatgpt-prompts
                    </h4>
                  </header>
                  <div className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400">
                    <span className="truncate">
                      Updated
                      <time title="Tue, 07 Mar 2023 10:04:18 GMT">Mar 7</time>
                    </span>
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"
                      ></path>
                    </svg>
                    2.16k
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-1"
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
                    2.75k
                  </div>
                </a>
              </article>
              <article className="overview-card-wrapper group white ">
                <a
                  className="block p-2"
                  href="/datasets/roneneldan/TinyStories"
                >
                  <header
                    className="flex items-center mb-0.5"
                    title="roneneldan/TinyStories"
                  >
                    <h4 className="text-md truncate font-mono text-black dark:group-hover:text-yellow-500 group-hover:text-red-600 text-smd">
                      roneneldan/TinyStories
                    </h4>
                  </header>
                  <div className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400">
                    <span className="truncate">
                      Updated
                      <time title="Wed, 12 Jul 2023 20:01:22 GMT">
                        16 days ago
                      </time>
                    </span>
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"
                      ></path>
                    </svg>
                    2.86k
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-1"
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
                    153
                  </div>
                </a>
              </article>
              <article className="overview-card-wrapper group white ">
                <a
                  className="block p-2"
                  href="/datasets/Salesforce/dialogstudio"
                >
                  <header
                    className="flex items-center mb-0.5"
                    title="Salesforce/dialogstudio"
                  >
                    <h4 className="text-md truncate font-mono text-black dark:group-hover:text-yellow-500 group-hover:text-red-600 text-smd">
                      Salesforce/dialogstudio
                    </h4>
                  </header>
                  <div className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400">
                    <span className="truncate">
                      Updated
                      <time title="Fri, 28 Jul 2023 16:54:48 GMT">
                        about 2 hours ago
                      </time>
                    </span>
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"
                      ></path>
                    </svg>
                    1.11k
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-1"
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
                    80
                  </div>
                </a>
              </article>
              <article className="overview-card-wrapper group white ">
                <a className="block p-2" href="/datasets/Open-Orca/OpenOrca">
                  <header
                    className="flex items-center mb-0.5"
                    title="Open-Orca/OpenOrca"
                  >
                    <h4 className="text-md truncate font-mono text-black dark:group-hover:text-yellow-500 group-hover:text-red-600 text-smd">
                      Open-Orca/OpenOrca
                    </h4>
                  </header>
                  <div className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400">
                    <span className="truncate">
                      Updated
                      <time title="Sat, 15 Jul 2023 00:22:08 GMT">
                        14 days ago
                      </time>
                    </span>
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"
                      ></path>
                    </svg>
                    7.9k
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-1"
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
                    488
                  </div>
                </a>
              </article>
              <article className="overview-card-wrapper group white ">
                <a
                  className="block p-2"
                  href="/datasets/LinkSoul/instruction_merge_set"
                >
                  <header
                    className="flex items-center mb-0.5"
                    title="LinkSoul/instruction_merge_set"
                  >
                    <h4 className="text-md truncate font-mono text-black dark:group-hover:text-yellow-500 group-hover:text-red-600 text-smd">
                      LinkSoul/instruction_merge_set
                    </h4>
                  </header>
                  <div className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400">
                    <span className="truncate">
                      Updated
                      <time
                        dateTime="2023-06-01T03:19:51"
                        title="Thu, 01 Jun 2023 03:19:51 GMT"
                      >
                        Jun 1
                      </time>
                    </span>
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"
                      ></path>
                    </svg>
                    273
                    <span className="px-1.5 text-gray-300">• </span>
                    <svg
                      className="flex-none w-3 text-gray-400 mr-1"
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
                    52
                  </div>
                </a>
              </article>
            </div>
            <a
              href="/datasets"
              className="self-center underline decoration-gray-300 underline-offset-8 transition-all hover:decoration-gray-800 hover:underline-offset-[6px] max-sm:mb-5"
            >
              Browse +50k datasets
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
