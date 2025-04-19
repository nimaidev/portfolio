"use client";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

export default function Projects() {
  return (
    <div className="dark:bg-app-dark">
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 md:pt-[100px] sm:pt-[450px] min-h-screen">
        <p className="text-white">text</p>
        <Footer />
      </div>
      <div className="flex dark:bg-app-dark min-h-screen">
        {/* Main Content */}
      </div>
    </div>
  );
}
