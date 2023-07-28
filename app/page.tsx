import Image from "next/image";
import "./globals.css";
import SideNav from "./components/sidenav";
import Hero from "./components/hero";
import Activities from "./components/activities";
import TechStack from "./components/tech";
import Stats from "./components/stats";

export default function Home() {
  return (
    <main>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/6 h-screen top-0 left-0 mt-20">
          {/* Sidebar content goes here */}
          {/* <SideNav /> */}
        </div>

        {/* Main Content */}
        <div className="w-3/4 md:-ml-20">
          {/* Main content goes here */}
          <Hero/>
          <Stats/>
          <TechStack/>
          <Activities />
        </div>
      </div>
    </main>
  );
}
