"use client"
import NavBar from "../components/navbar";

export default function Projects() {
  return (
    <div className="flex items-center justify-center dark:bg-app-dark min-h-screen">
      {/* Main Content */}
      <div className="w-full max-w-6xl">
        <div className="sticky top-0 z-50">
          <NavBar />
        </div>
        {/* Main content goes here */}
      </div>
    </div>
  );
}
