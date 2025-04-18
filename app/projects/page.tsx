"use client";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

export default function Projects() {
  return (
    <div className="dark:bg-app-dark">
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 md:pt-[100px] sm:pt-[450px] min-h-screen font-firacode">
        <div>
          <h1 className="text-3xl text-app-primary dark:text-app-teal">Personal projects.</h1>
          <p>List of my weekend time-pass {"<"}3 </p>
        </div>
        <Footer />
      </div>
      <div className="flex dark:bg-app-dark min-h-screen">
        {/* Main Content */}
      </div>
    </div>
  );
}
