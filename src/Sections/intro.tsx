import React from "react";
import { ReactTyped } from "react-typed";
import profile from "../images/profile.png";

const Intro: React.FC = () => {
  const copyToClip = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  return (
    <section id="home" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-20 md:flex-row md:py-0">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-600/10 pointer-events-none"></div>

      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center p-6 md:w-1/2">
        <div className="group relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur transition duration-500 group-hover:opacity-40"></div>
          <img
            src={profile}
            className="relative h-48 w-48 rounded-full border-4 border-white object-cover shadow-2xl dark:border-gray-800 md:h-80 md:w-80"
            alt="Profile"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center md:items-start md:text-left">
        <h1 className="font-[sans-serif] text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          <ReactTyped
            strings={["I'm Mineth Weerasinghe"]}
            typeSpeed={50}
            backSpeed={40}
            startDelay={1000}
            backDelay={2000}
            loop
          />
        </h1>
        <h2 className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-semibold text-transparent dark:from-blue-400 dark:to-purple-400 sm:text-2xl md:text-3xl">
          Software Engineer | Full Stack Developer
        </h2>
        <p className="mt-6 max-w-lg text-base text-gray-600 dark:text-gray-300 sm:text-lg">
          Third year Computer Science & Engineering student at the University of Moratuwa, interested in Software Engineering & web development.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <button onClick={() => copyToClip("0762545500")} className="group flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800" aria-label="Phone">
            <i className="fa-solid fa-phone text-xl text-gray-700 group-hover:text-blue-500 dark:text-gray-200"></i>
          </button>
          
          <button onClick={() => copyToClip("mineth.21@cse.mrt.ac.lk")} className="group flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800" aria-label="Email">
            <i className="fa-solid fa-envelope text-xl text-gray-700 group-hover:text-blue-500 dark:text-gray-200"></i>
          </button>

          <a href="https://www.linkedin.com/in/mineth-weerasinghe-2551b0241" target="_blank" rel="noopener noreferrer" className="group flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin text-xl text-gray-700 group-hover:text-blue-500 dark:text-gray-200"></i>
          </a>

          <a href="https://github.com/Min3th" target="_blank" rel="noopener noreferrer" className="group flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800" aria-label="GitHub">
            <i className="fa-brands fa-github text-xl text-gray-700 group-hover:text-blue-500 dark:text-gray-200"></i>
          </a>

          <div className="hidden h-10 w-px bg-gray-300 dark:bg-gray-700 sm:block"></div>

          <a
            href="/Mineth_Weerasinghe_CV.pdf"
            download="Mineth_Weerasinghe_CV.pdf"
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:from-blue-500 dark:to-purple-500"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
