"use client";
import "./globals.css";
import Hero from "./components/hero";
import TechStack from "./components/tech";
import Footer from "./components/footer";
import Table from "./components/table";
import DarkModeBtn from "./darkModeBtn";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center dark:bg-slate-800 min-h-screen">
        {/* Main Content */}
        <div className="w-full max-w-6xl">
          <div className="sticky top-0 z-50">
            <NavBar />
          </div>
          {/* Main content goes here */}
          <Hero />
          <TechStack />
          {/* <Activities /> */}
          <Table />
          <Footer />
        </div>
      </div>
    </main>
  );
}
