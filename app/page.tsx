"use client"
import "./globals.css";
import Hero from "./components/hero";
import TechStack from "./components/tech";
import Footer from "./components/footer";
import Table from "./components/table";
import DarkModeBtn from "./darkModeBtn";

export default function Home() {
  return (
    <main>
      <div className="flex dark:bg-slate-800">
        {/* Sidebar */}
        <div className="w-1/6 h-screen top-0 left-0 mt-20">
          {/* Sidebar content goes here */}
          {/* <SideNav /> */}
        </div>

        {/* Main Content */}
        <div className="w-3/4 md:-ml-20 ">
          
        <DarkModeBtn/>
          {/* Main content goes here */}
          <Hero/>
          <TechStack/>
          {/* <Activities /> */}
          <Table/>
          <Footer/>
        </div>
      </div>
    </main>
  );
}
