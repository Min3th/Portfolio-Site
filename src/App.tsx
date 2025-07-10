import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import profile from "./images/profile.png";
import vite from "./images/vite.png";
import net from "./images/net.png";
import ims from "./images/ims.png";
import alarm from "./images/alarmclock.png";
import flaskapp from "./images/flaskapp.png";

import Card from "./Components/Cards";
import azure from "./images/azure.png";
import csharp from "./images/csharp.png";
import cpp from "./images/c++.png";
import c from "./images/c.png";
import java from "./images/java.png";
import html5 from "./images/html5.png";
import css3 from "./images/css3.png";
import flask from "./images/flask.png";
import js from "./images/js.png";
import mysql from "./images/mySQL.png";
import react from "./images/react.png";
import python from "./images/python.png";
import tailwind from "./images/tailwind.png";
import ts from "./images/ts.png";
import umisf from "./images/umisf.png";
import node from "./images/node.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactTyped } from "react-typed";

function App() {
  const copyToClip = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success("Text copied to clipboard");
      },
      (err) => {
        toast.error("Failed to copy text");
      },
    );
  };

  return (
    <div className="h-full w-full overflow-x-hidden scroll-smooth bg-white transition-colors duration-300 dark:bg-black">
      <ToastContainer autoClose={4000} hideProgressBar theme="dark" />
      <Navbar />
      <div className="relative flex h-screen w-screen flex-col md:flex-row">
        <div className="bg- relative flex h-1/3 w-full flex-row md:h-screen md:w-[550px]">
          <img src={profile} className="absolute top-[50px] ml-20 scale-[1.2] transform md:top-[200px] md:ml-[200px]" />
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
              className="fa-brands fa-linkedin text-[35px] dark:text-white md:text-[40px]"
            ></a>
            <a
              href="https://github.com/Min3th"
              target="_blank"
              className="fa-brands fa-github text-[35px] dark:text-white md:text-[40px]"
            ></a>

            <div className="h-10 w-[1px] bg-black dark:bg-white"></div>

            <a
              href="/My_CV.pdf"
              download="My_CV.pdf"
              className="mt-2 rounded border-[1.3px] border-black bg-[#FCFCFF] p-2 font-medium transition duration-[250] ease-in-out hover:scale-[1.1] hover:border-[0px] hover:bg-white hover:shadow dark:border-white dark:bg-black dark:text-white sm:p-3"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div id="about" className="relative flex flex-col items-center justify-center">
        <div className="mt-[200px] flex h-screen w-[400px] flex-col items-center justify-center rounded-[40px] p-20 text-center sm:mt-0 sm:w-screen">
          <div className="font-[sans-serif] text-[60px] font-semibold dark:text-white">About Me</div>
          <div className="m-10 text-center text-[20px] dark:text-white">
            I am passionate about becoming a software engineer and provide value to the web development space.I am
            interested in full stack applications , and providing solutions to problems.I am team player,being a part of
            the University badminton team that won many tournaments.I am also a member of several clubs, and has lead
            many projects to success. And I wouldn't say no to a choclate milkshake 🧋.
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="relative mt-[200px] flex h-full w-[400px] flex-col items-center justify-center text-center sm:mt-0 sm:w-screen"
      >
        <div className="mt-12 font-[sans-serif] text-[50px] font-semibold dark:text-white">My Projects</div>
        <div className="text-[20px] dark:text-white">
          Below are some of the projects I have worked on as a Computer Science undergraduate
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="m-5 flex flex-col items-center justify-center gap-10 sm:gap-4 md:flex-row">
            <Card
              link="https://github.com/CS3203-SEP-21-Group-22"
              imageUrl={ims}
              title="Inventory Management System"
              description="My ongoing semester 5 group project, an Inventory Management System for Computer Laboratories.Developing using React for the front end, .Net for backend with MySQL as the database.Will be using Azure Cloud for depolyment."
              symbols={[net, react, tailwind, azure]}
            />
            <Card
              link="https://github.com/Hevb890/UMISF-Registration/tree/main"
              imageUrl={umisf}
              title="Registration Portal for UMISF"
              description="This is an ongoing group project for the UMISF Badminton tournament , a registration portal to handle the participant applications and for tournament organizers to keep track of monetary transactions.I am mainly responsible for developing the front-end.Uses React for the front-end and Node for back-end."
              symbols={[react, node]}
            />
          </div>
          <div className="m-5 flex flex-col items-center justify-center gap-10 sm:gap-4 md:flex-row">
            <Card
              link="https://min3th.github.io/TasksApp/"
              imageUrl={alarm}
              title="Task app with Alarm"
              description="Built completely using React, this is an individual project of mine.It is a task tracking application with a notification alarm , and uses the browsers local storage to store users data."
              symbols={[react]}
            />
            <Card
              link="https://github.com/Min3th/supplychain"
              imageUrl={flaskapp}
              title="Supply Chain Management System"
              description="A supply chain management system to help companies with delivering their products to wholesalers, retailers and other middlemen.This is my first web application and is completely written using Flask, with MySQL for the database."
              symbols={[flask, mysql]}
            />
          </div>
        </div>
      </div>
      <div
        id="tech"
        className="relative mt-[900px] flex h-screen w-[400px] flex-col items-center justify-center p-20 text-center sm:mt-0 sm:w-screen"
      >
        <div className="flex flex-col items-center justify-center gap-2 dark:text-white">
          <p className="font-[sans-serif] text-[50px] font-semibold">Technologies</p>

          <p className="text-center text-[20px]">
            Below are some of the technologies I am familiar with and have used in my work.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center shadow-lg dark:shadow-lg dark:shadow-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-4 dark:text-white">
            <div className="relative flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]">
              <img src={net} className="scale-[0.5] transform" title="ASP.NET" />
            </div>
            <div className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]">
              <img src={vite} className="scale-[0.5] transform" title="Vite" />
            </div>
            <div className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]">
              <img src={azure} className="mt-5 scale-[0.6] transform" title="Azure" />
            </div>
            <div className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]">
              <img src={csharp} className="mt-1 scale-[0.9] transform" title="C#" />
            </div>
            <div className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]">
              <img src={cpp} className="mt-2 scale-[0.55] transform" title="" />
            </div>
            <div className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]">
              <img src={c} className="mt-[10px] scale-[0.55] transform" title="C" />
            </div>
            <div className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]">
              <img src={react} className="scale-[0.55] transform" title="ReactJS" />
            </div>
            <div className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]">
              <img src={python} className="scale-[0.55] transform" title="Python" />
            </div>
          </div>

          <div className="mb-10 mt-4 flex flex-wrap items-center justify-center gap-4 dark:text-white">
            <div className="relative flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]">
              <img src={java} className="scale-[0.5] transform" title="Java" />
            </div>
            <div className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]">
              <img src={html5} className="scale-[0.5] transform" title="HTML5" />
            </div>
            <div className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]">
              <img src={css3} className="scale-[0.5] transform" title="CSS3" />
            </div>
            <div className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]">
              <img src={flask} className="scale-[0.9] transform" title="Flask" />
            </div>
            <div className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]">
              <img src={js} className="scale-[0.55] transform" title="Javascript" />
            </div>
            <div className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]">
              <img src={mysql} className="scale-[0.55] transform" title="MySQL" />
            </div>
            <div className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]">
              <img src={ts} className="mt-8 scale-[0.55] transform" title="Typescript" />
            </div>
            <div className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]">
              <img src={tailwind} className="mt-8 scale-[0.55] transform" title="Tailwind" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
