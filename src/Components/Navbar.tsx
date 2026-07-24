import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Dark mode logic
    const inputElement = document.querySelector(".light-switch") as HTMLInputElement;
    if (inputElement) {
      const storedPref = localStorage.getItem("dark-mode");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (storedPref === "true" || (storedPref == null && prefersDark)) {
        inputElement.checked = true;
        document.documentElement.classList.add("dark");
      }
      
      const handleChange = () => {
        if (inputElement.checked) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("dark-mode", "true");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("dark-mode", "false");
        }
      };
      
      inputElement.addEventListener("change", handleChange);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        inputElement.removeEventListener("change", handleChange);
      };
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 flex h-16 w-full items-center justify-center px-6 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 shadow-lg backdrop-blur-md dark:bg-black/70"
          : "bg-transparent"
      }`}
    >
      <div className="flex w-full max-w-5xl items-center justify-center gap-4 text-sm font-medium sm:gap-8 sm:text-base">
        <a href="#about" className="text-gray-900 transition hover:text-blue-500 dark:text-white dark:hover:text-blue-400">
          About Me
        </a>
        <a href="#projects" className="text-gray-900 transition hover:text-blue-500 dark:text-white dark:hover:text-blue-400">
          My Projects
        </a>
        <a href="#publications" className="text-gray-900 transition hover:text-blue-500 dark:text-white dark:hover:text-blue-400">
          Publications
        </a>
        <a href="#tech" className="text-gray-900 transition hover:text-blue-500 dark:text-white dark:hover:text-blue-400">
          Technologies
        </a>
      </div>

      <div className="absolute right-4 flex items-center justify-center sm:right-8">
        <input type="checkbox" className="light-switch sr-only" id="light-switch" />
        <label className="relative flex cursor-pointer items-center justify-center rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition" htmlFor="light-switch">
          {/* Light Mode Icon */}
          <svg className="dark:hidden" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-yellow-500" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
            <path className="fill-yellow-600" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
          </svg>
          {/* Dark Mode Icon */}
          <svg className="hidden dark:block" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-blue-300" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
            <path className="fill-blue-400" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
          </svg>
          <span className="sr-only">Toggle dark mode</span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
