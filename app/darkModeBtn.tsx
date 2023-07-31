import { SunIcon } from "@heroicons/react/20/solid";
import { MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Do NOT use this! It will throw a hydration mismatch error.
const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button className="pt-5 h-10 float-right"
      onClick={() => {
        setTheme(theme === "dark" || theme==='system' ? "light" : "dark");
      }}
    >
      {theme === "dark" || theme==='system' ? (
        <SunIcon className="h-7 w-7 text-white" />
      ) : (
        <MoonIcon className="h-7 w-7 text-black" />
      )}
    </button>
  );
};

export default DarkModeBtn;
