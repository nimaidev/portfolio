"use client";
import "./globals.css";
import Profile from "./components/profile";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import RecentBlogs from "./components/recentBlogs";
import ActiveProject from "./components/activeProject";

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
          <RecentBlogs />
          <ActiveProject/>
          <Footer />
        </div>
      </div>
    </main>
  );
}
