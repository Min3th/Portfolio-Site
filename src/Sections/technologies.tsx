import React from "react";
import net from "../images/net.png";
import vite from "../images/vite.png";
import azure from "../images/azure.png";
import csharp from "../images/csharp.png";
import cpp from "../images/c++.png";
import c from "../images/c.png";
import react from "../images/react.png";
import python from "../images/python.png";
import java from "../images/java.png";
import html5 from "../images/html5.png";
import css3 from "../images/css3.png";
import flask from "../images/flask.png";
import js from "../images/js.png";
import mysql from "../images/mySQL.png";
import ts from "../images/ts.png";
import tailwind from "../images/tailwind.png";
import fastapi from "../images/FastAPI.png";
import mui from "../images/mui.png";
import ballerina from "../images/ballerina.png";
import next from "../images/next.png";
import supabase from "../images/supabase.png";
import huggingface from "../images/huggingface.png";
import mongo from "../images/mongo.png";

type TechItem = {
  src: string;
  title: string;
  scale?: string;
  marginTop?: string;
};

const techStackTop: TechItem[] = [
  { src: net, title: "ASP.NET", scale: "scale-[0.5]" },
  { src: vite, title: "Vite", scale: "scale-[0.5]" },
  { src: azure, title: "Azure", scale: "scale-[0.6]", marginTop: "mt-5" },
  { src: csharp, title: "C#", scale: "scale-[0.9]", marginTop: "mt-1" },
  { src: cpp, title: "C++", scale: "scale-[0.55]", marginTop: "mt-2" },
  { src: c, title: "C", scale: "scale-[0.55]", marginTop: "mt-[10px]" },
  { src: react, title: "ReactJS", scale: "scale-[0.55]" },
  { src: python, title: "Python", scale: "scale-[0.55]" },
];

const techStackMiddle: TechItem[] = [
  { src: java, title: "Java", scale: "scale-[0.5]" },
  { src: html5, title: "HTML5", scale: "scale-[0.5]" },
  { src: css3, title: "CSS3", scale: "scale-[0.5]" },
  { src: flask, title: "Flask", scale: "scale-[0.9]" },
  { src: js, title: "JavaScript", scale: "scale-[0.55]" },
  { src: mysql, title: "MySQL", scale: "scale-[0.55]" },
  { src: ts, title: "TypeScript", scale: "scale-[0.55]", marginTop: "mt-8" },
  { src: tailwind, title: "Tailwind", scale: "scale-[0.55]", marginTop: "mt-8" },
];
const techStackBottom: TechItem[] = [
  { src: fastapi, title: "FastAPI", scale: "scale-[0.5]" },
  { src: mui, title: "MUI", scale: "scale-[0.5]" },
  { src: supabase, title: "Supabase", scale: "scale-[0.5]" },
  { src: ballerina, title: "Ballerina", scale: "scale-[0.5]" },
  { src: huggingface, title: "Huggingface", scale: "scale-[0.5]" },
  { src: next, title: "Next", scale: "scale-[0.5]" },
  { src: mongo, title: "MongoDB", scale: "scale-[0.5]" },
];

const Technologies: React.FC = () => {
  return (
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
          {techStackTop.map((tech, index) => (
            <div
              key={index}
              className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]"
            >
              <img
                src={tech.src}
                title={tech.title}
                className={`transform ${tech.scale} ${tech.marginTop ?? ""}`}
                alt={tech.title}
              />
            </div>
          ))}
        </div>

        <div className="mb-10 mt-4 flex flex-wrap items-center justify-center gap-4 dark:text-white">
          {techStackMiddle.map((tech, index) => (
            <div
              key={index}
              className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]"
            >
              <img
                src={tech.src}
                title={tech.title}
                className={`transform ${tech.scale} ${tech.marginTop ?? ""}`}
                alt={tech.title}
              />
            </div>
          ))}
        </div>
        <div className="mb-10 mt-4 flex flex-wrap items-center justify-center gap-4 dark:text-white">
          {techStackBottom.map((tech, index) => (
            <div
              key={index}
              className="flex h-[120px] w-[120px] flex-col items-center duration-200 ease-in-out hover:scale-[1.1] md:h-[140px] md:w-[140px]"
            >
              <img
                src={tech.src}
                title={tech.title}
                className={`transform ${tech.scale} ${tech.marginTop ?? ""}`}
                alt={tech.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
