import { usePathname } from "next/navigation";
import Link from "next/link";
import DarkModeBtn from "../darkModeBtn";

const NavBar = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <div className="navbar shadow-sm border-b border-app-teal flex items-center justify-between px-6 py-4 bg-white dark:bg-app-dark fixed top-0 left-0 w-full z-50">
      {/* Left: Logo */}
      <div className="flex-1">
      <h1 className="text-app-primary dark:text-app-teal text-2xl font-firacode">
        Nimai Charan
      </h1>
      </div>

      {/* Center: Navigation Links */}
      <div className="flex-1 flex justify-center">
      <ul className="flex space-x-2">
        {[
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Blogs", path: "/blogs" },
        { name: "Readings", path: "/readings" },
        ].map((link) => (
        <li key={link.path}>
          <Link
          href={link.path}
          className={`text-md font-firacode no-underline transition-colors duration-200 px-3 py-2
          ${
            pathname === link.path
            ? "text-app-primary dark:text-app-white font-bold border-b-2 border-app-primary dark:border-app-teal tracking-wider"
            : "text-app-sky dark:text-app-white hover:text-app-primary"
          }`}
          >
          {link.name}
          </Link>
        </li>
        ))}
      </ul>
      </div>

      {/* Right: Dark Mode Button */}
      <div className="flex-1 flex justify-end">
      <DarkModeBtn />
      </div>
    </div>
  );
};

export default NavBar;
