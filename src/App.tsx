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
    <div className="h-full w-full scroll-smooth bg-white dark:bg-black transition-colors duration-300 overflow-x-hidden">
      <ToastContainer autoClose={4000} hideProgressBar theme="dark" />
      <Navbar />
      <div className="w-screen h-screen flex flex-col md:flex-row relative ">
        <div className="w-full md:w-[550px] h-1/3 md:h-screen flex flex-row relative bg- ">
          <img
            src={profile}
            className="ml-20 md:ml-[200px] transform scale-[1.2] absolute top-[50px] md:top-[200px]"
          />
        </div>
        <div className="flex-1 h-2/3 md:h-screen flex flex-col justify-center items-center px-5 ">
          <div className="text-[28px] sm:text-[40px] md:text-[50px] font-[sans-serif] text-black dark:text-white text-center">
            <ReactTyped
              strings={["I'm Mineth Weerasinghe"]}
              typeSpeed={50}
              backSpeed={40}
              startDelay={1000}
              backDelay={2000}
              loop
            />
          </div>
          <div className="text-[16px] sm:text-[18px] text-center font-[sans-serif] tracking-[0.06rem] dark:text-white mt-2">
            Software Engineer | Full Stack Developer
          </div>
          <div className="text-[14px] sm:text-[16px] md:text-[18px] text-center mt-2 dark:text-white px-4 md:px-0">
            Third year Computer Science & Engineering student at the University
            of Moratuwa, interested in Software Engineering & web development
          </div>

          <div className="flex flex-row items-center justify-center gap-4 mt-5 flex-wrap">
            <i
              className="fa-solid fa-phone text-[30px] md:text-[35px] z-10 cursor-pointer dark:text-white"
              onClick={() => copyToClip("0762545500")}
            ></i>

            <i
              className="fa-solid fa-envelope z-10 cursor-pointer text-[35px] md:text-[40px] dark:text-white"
              onClick={() => copyToClip("mineth.21@cse.mrt.ac.lk")}
            ></i>

            <a
              href="https://www.linkedin.com/in/mineth-weerasinghe-2551b0241"
              target="_blank"
              className="fa-brands fa-linkedin text-[35px] md:text-[40px] dark:text-white"
            ></a>
            <a
              href="https://github.com/Min3th"
              target="_blank"
              className="fa-brands fa-github text-[35px] md:text-[40px] dark:text-white"
            ></a>

            <div className="h-10 w-[1px] bg-black dark:bg-white"></div>

            <a
              href="/My_CV.pdf"
              download="My_CV.pdf"
              className="rounded mt-2 p-2 sm:p-3 border-[1.3px] border-black bg-[#FCFCFF] font-medium hover:border-[0px] hover:scale-[1.1] transition duration-[250] ease-in-out hover:bg-white hover:shadow dark:bg-black dark:border-white dark:text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="flex flex-col relative justify-center items-center "
      >
        <div className="rounded-[40px] h-screen  flex-col flex items-center p-20  justify-center sm:w-screen w-[400px] sm:mt-0 mt-[200px] text-center">
          <div className="font-[sans-serif] font-semibold text-[60px] dark:text-white">
            About Me
          </div>
          <div className="text-center text-[20px] dark:text-white m-10  ">
            I am passionate about becoming a software engineer and provide value
            to the web development space.I am interested in full stack
            applications , and providing solutions to problems.I am team
            player,being a part of the University badminton team that won many
            tournaments.I am also a member of several clubs, and has lead many
            projects to success. And I wouldn't say no to a choclate milkshake
            🧋.
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="h-full  flex flex-col relative justify-center items-center sm:w-screen w-[400px] sm:mt-0 mt-[200px] text-center"
      >
        <div className="font-semibold font-[sans-serif] text-[50px] mt-12 dark:text-white">
          My Projects
        </div>
        <div className="text-[20px] dark:text-white">
          Below are some of the projects I have worked on as a Computer Science
          undergraduate
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center sm:gap-4 gap-10 m-5">
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
          <div className="flex flex-col md:flex-row items-center justify-center sm:gap-4 gap-10 m-5">
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
        className=" h-screen  flex flex-col relative p-20 justify-center items-center sm:w-screen w-[400px] sm:mt-0 mt-[900px] text-center"
      >
        <div className="  flex-col flex justify-center items-center gap-2 dark:text-white ">
          <p className="font-[sans-serif] font-semibold text-[50px] ">
            Technologies
          </p>

          <p className="text-[20px] text-center">
            Below are some of the technologies I am familiar with and have used
            in my work.
          </p>
        </div>
        <div className=" flex flex-col dark:shadow-lg dark:shadow-gray-800 shadow-lg justify-center items-center">
          <div className="flex flex-wrap  justify-center items-center gap-4 dark:text-white">
            <div className="flex flex-col items-center relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] hover:scale-[1.1] duration-200 ease-in-out">
              <img src={net} className="transform scale-[0.5]" />
            </div>
            <div className="flex flex-col items-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] hover:scale-[1.1] duration-200 ease-in-out">
              <img src={vite} className="transform scale-[0.5]" />
            </div>
            <div className="flex flex-col items-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] hover:scale-[1.1] duration-200 ease-in-out">
              <img src={azure} className="transform scale-[0.6] mt-5" />
            </div>
            <div className="flex flex-col items-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] hover:scale-[1.1] duration-200 ease-in-out">
              <img src={csharp} className="transform scale-[0.9] mt-1" />
            </div>
            <div className="flex flex-col items-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] hover:scale-[1.1] duration-200 ease-in-out">
              <img src={cpp} className="transform scale-[0.55] mt-2" />
            </div>
            <div className="flex flex-col items-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] hover:scale-[1.1] duration-200 ease-in-out">
              <img src={c} className="transform scale-[0.55] mt-[10px]" />
            </div>
            <div className="flex flex-col items-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] hover:scale-[1.1] duration-200 ease-in-out">
              <img src={react} className="transform scale-[0.55]" />
            </div>
            <div className="flex flex-col items-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] hover:scale-[1.1] duration-200 ease-in-out">
              <img src={python} className="transform scale-[0.55]" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 dark:text-white mt-4 mb-10">
            <div className="flex flex-col items-center relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] hover:scale-[1.1] duration-200 ease-in-out">
              <img src={java} className="transform scale-[0.5]" />
            </div>
            <div className="flex flex-col items-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] hover:scale-[1.1] duration-200 ease-in-out">
              <img src={html5} className="transform scale-[0.5]" />
            </div>
            <div className="flex flex-col items-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] hover:scale-[1.1] duration-200 ease-in-out">
              <img src={css3} className="transform scale-[0.5]" />
            </div>
            <div className="flex flex-col items-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] hover:scale-[1.1] duration-200 ease-in-out">
              <img src={flask} className="transform scale-[0.9]" />
            </div>
            <div className="flex flex-col items-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] hover:scale-[1.1] duration-200 ease-in-out">
              <img src={js} className="transform scale-[0.55]" />
            </div>
            <div className="flex flex-col items-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] hover:scale-[1.1] duration-200 ease-in-out">
              <img src={mysql} className="transform scale-[0.55]" />
            </div>
            <div className="flex flex-col items-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] hover:scale-[1.1] duration-200 ease-in-out">
              <img src={ts} className="transform scale-[0.55] mt-8" />
            </div>
            <div className="flex flex-col items-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] hover:scale-[1.1] duration-200 ease-in-out">
              <img src={tailwind} className="transform scale-[0.55] mt-8" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
