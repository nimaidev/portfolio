"use client";
import "./globals.css";
import Profile from "./components/profile";
import TechStack from "./components/tech";
import Footer from "./components/footer";
import Table from "./components/table";
import DarkModeBtn from "./darkModeBtn";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center dark:bg-app-dark min-h-screen">
        {/* Main Content */}
        <div className="w-full max-w-6xl">
          <div className="sticky top-0 z-50">
            <NavBar />
          </div>
          {/* Main content goes here */}
          <Profile />
          {/* <TechStack /> */}
          {/* <Activities /> */}
          {/* <Table /> */}
          {/* <Footer /> */}
        </div>
      </div>
    </main>
  );
}
