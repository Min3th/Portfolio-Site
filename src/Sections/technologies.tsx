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
import nextBlack from "../images/next-black.png";
import supabase from "../images/supabase.png";
import huggingface from "../images/huggingface.png";
import mongo from "../images/mongo.png";
import aws from "../images/aws.png";

type TechItem = {
  src: string;
  title: string;
  scale?: string;
  marginTop?: string;
  dark?: string;
};

const allTech: TechItem[] = [
  { src: aws, title: "AWS", scale: "scale-[1.5]", marginTop: "mt-10" },
  { src: vite, title: "Vite", scale: "scale-[0.5]" },
  { src: azure, title: "Azure", scale: "scale-[0.6]", marginTop: "mt-5" },
  { src: csharp, title: "C#", scale: "scale-[0.9]", marginTop: "mt-1" },
  { src: cpp, title: "C++", scale: "scale-[0.55]", marginTop: "mt-2" },
  { src: c, title: "C", scale: "scale-[0.55]", marginTop: "mt-[10px]" },
  { src: react, title: "ReactJS", scale: "scale-[0.55]" },
  { src: python, title: "Python", scale: "scale-[0.55]" },
  { src: java, title: "Java", scale: "scale-[0.5]" },
  { src: html5, title: "HTML5", scale: "scale-[0.5]" },
  { src: css3, title: "CSS3", scale: "scale-[0.5]" },
  { src: flask, title: "Flask", scale: "scale-[0.9]" },
  { src: js, title: "JavaScript", scale: "scale-[0.55]" },
  { src: mysql, title: "MySQL", scale: "scale-[0.55]" },
  { src: ts, title: "TypeScript", scale: "scale-[0.55]", marginTop: "mt-8" },
  { src: tailwind, title: "Tailwind", scale: "scale-[0.55]", marginTop: "mt-8" },
  { src: fastapi, title: "FastAPI", scale: "scale-[0.5]" },
  { src: mui, title: "MUI", scale: "scale-[0.5]" },
  { src: supabase, title: "Supabase", scale: "scale-[0.5]" },
  { src: ballerina, title: "Ballerina", scale: "scale-[0.5]" },
  { src: huggingface, title: "Huggingface", scale: "scale-[0.5]" },
  { src: nextBlack, title: "Next", scale: "scale-[0.5]", dark: "dark:brightness-200 dark:invert" },
  { src: mongo, title: "MongoDB", scale: "scale-[0.5]" },
  { src: net, title: "ASP.NET", scale: "scale-[0.5]" },
];

const Technologies: React.FC = () => {
  return (
    <section
      id="tech"
      className="relative mt-[900px] sm:mt-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-600/10 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-6 sm:px-12 md:px-24 text-center">
        <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent py-2 leading-relaxed text-4xl sm:text-[50px] font-bold tracking-tight dark:from-blue-400 dark:to-purple-400">
          Technologies & Tools
        </h2>
        <p className="max-w-2xl text-lg sm:text-[20px] text-gray-600 dark:text-gray-300">
          Below are some of the technologies I am familiar with and have used in my work.
        </p>
      </div>

      <div className="relative z-10 mt-16 flex max-w-[1200px] flex-wrap items-center justify-center gap-6 px-6">
        {allTech.map((tech, index) => (
          <div
            key={index}
            className="group relative flex h-28 w-28 sm:h-36 sm:w-36 flex-col items-center justify-center rounded-2xl bg-white/40 border border-white/60 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/60 dark:bg-gray-800/40 dark:border-gray-700/50 dark:hover:bg-gray-700/60"
          >
            {/* Tooltip for title */}
            <span className="absolute -top-10 z-20 scale-0 rounded-md bg-gray-900 px-3 py-1 text-sm font-medium text-white shadow-lg transition-all duration-200 group-hover:scale-100 dark:bg-gray-100 dark:text-gray-900">
              {tech.title}
            </span>
            
            <div className="flex h-full w-full items-center justify-center p-4">
              <img
                src={tech.src}
                alt={tech.title}
                className={`transform transition-transform duration-300 ${tech.scale ?? ""} ${tech.marginTop ?? ""} ${tech.dark ?? ""}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
