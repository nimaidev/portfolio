import { PiGithubLogoFill, PiLinkedinLogoFill } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";


const Socials = () => {
  return (
    <div className="flex space-x-4 dark:text-app-white">
      <div className="flex items-center space-x-2 dark:text-app-white">
        <a href="https://github.com" className="flex items-center space-x-1 border border-black dark:border-app-white px-2 py-1 rounded-lg">
          <span className="mx-1">
            <PiGithubLogoFill className="text-black dark:text-app-white" />
          </span>
          Github
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <a href="https://github.com" className="flex items-center space-x-1 border border-black dark:border-app-white px-2 py-1 rounded-lg">
          <span className="mx-1">
            <PiLinkedinLogoFill className="text-[#0077B5]" />
          </span>
            LinkedIn
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <a href="https://github.com" className="flex items-center space-x-1 border border-black dark:border-app-white px-2 py-1 rounded-lg">
          <span className="mx-1">
            <RiTwitterXLine className="text-black dark:text-app-white" />
          </span>
          Formerly Twitter
        </a>
      </div>
    </div>
  );
};

export default Socials;
