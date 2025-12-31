import React from "react";
import { ReactTyped } from "react-typed";
import profile from "../images/profile.png";

const Intro: React.FC = () => {
  const copyToClip = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  return (
    <div className="relative flex h-screen w-screen flex-col md:flex-row">
      <div className="relative flex h-1/3 w-full flex-row md:h-screen md:w-[550px]">
        <img
          src={profile}
          className="absolute top-[50px] ml-20 scale-[1.2] transform md:top-[200px] md:ml-[200px]"
          alt="Profile"
        />
      </div>
      <div className="flex h-2/3 flex-1 flex-col items-center justify-center px-5 md:h-screen">
        <div className="text-center font-[sans-serif] text-[28px] text-black dark:text-white sm:text-[40px] md:text-[50px]">
          <ReactTyped
            strings={["I'm Mineth Weerasinghe"]}
            typeSpeed={50}
            backSpeed={40}
            startDelay={1000}
            backDelay={2000}
            loop
          />
        </div>
        <div className="mt-2 text-center font-[sans-serif] text-[16px] tracking-[0.06rem] dark:text-white sm:text-[18px]">
          Software Engineer | Full Stack Developer
        </div>
        <div className="mt-2 px-4 text-center text-[14px] dark:text-white sm:text-[16px] md:px-0 md:text-[18px]">
          Third year Computer Science & Engineering student at the University of Moratuwa, interested in Software
          Engineering & web development
        </div>

        <div className="mt-5 flex flex-row flex-wrap items-center justify-center gap-4">
          <i
            className="fa-solid fa-phone z-10 cursor-pointer text-[30px] dark:text-white md:text-[35px]"
            onClick={() => copyToClip("0762545500")}
          ></i>

          <i
            className="fa-solid fa-envelope z-10 cursor-pointer text-[35px] dark:text-white md:text-[40px]"
            onClick={() => copyToClip("mineth.21@cse.mrt.ac.lk")}
          ></i>

          <a
            href="https://www.linkedin.com/in/mineth-weerasinghe-2551b0241"
            target="_blank"
            rel="noopener noreferrer"
            className="fa-brands fa-linkedin text-[35px] dark:text-white md:text-[40px]"
          ></a>

          <a
            href="https://github.com/Min3th"
            target="_blank"
            rel="noopener noreferrer"
            className="fa-brands fa-github text-[35px] dark:text-white md:text-[40px]"
          ></a>

          <div className="h-10 w-[1px] bg-black dark:bg-white"></div>

          <a
            href="/My_CV (4).pdf"
            download="My_CV (4).pdf"
            className="mt-2 rounded border-[1.3px] border-black bg-[#FCFCFF] p-2 font-medium transition duration-[250] ease-in-out hover:scale-[1.1] hover:border-[0px] hover:bg-white hover:shadow dark:border-white dark:bg-black dark:text-white sm:p-3"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
