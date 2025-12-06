import React from "react";
import Card from "../Components/Cards";
import ims from "../images/ims.png";
import umisf from "../images/umisf.png";
import alarm from "../images/alarmclock.png";
import flaskapp from "../images/flaskapp.png";
import net from "../images/net.png";
import react from "../images/react.png";
import tailwind from "../images/tailwind.png";
import azure from "../images/azure.png";
import node from "../images/node.png";
import flask from "../images/flask.png";
import mysql from "../images/mySQL.png";
import pallawala from "../images/pallawala.png";
import neurohire from "../images/neurohire.png";
import fastapi from "../images/FastAPI.png";
import mui from "../images/mui.png";

const MyProjects: React.FC = () => {
  return (
    <div
      id="projects"
      className="relative mt-[200px] flex h-full w-[400px] flex-col items-center justify-center text-center sm:mt-0 sm:w-screen"
    >
      <div className="mt-12 font-[sans-serif] text-[50px] font-semibold dark:text-white">My Projects</div>
      <div className="text-[20px] dark:text-white">
        Below are some of the projects I have worked on as a Computer Science undergraduate
      </div>
      <div className="m-5 flex flex-col items-center justify-center gap-10 sm:gap-4 md:flex-row">
        <Card
          link="https://min3th.github.io/TasksApp/"
          imageUrl={alarm}
          title="GitFraud Analyzer"
          description="Built completely using React, this is an individual project of mine. It is a task tracking application with a notification alarm, and uses the browser's local storage to store user's data."
          symbols={[react]}
        />
        <Card
          link="https://github.com/Min3th/supplychain"
          imageUrl={flaskapp}
          title="Worker Trust System"
          description="A supply chain management system to help companies with delivering their products to wholesalers, retailers and other middlemen. This is my first web application and is completely written using Flask, with MySQL for the database."
          symbols={[flask, mysql]}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="m-5 flex flex-col items-center justify-center gap-10 sm:gap-4 md:flex-row">
          <Card
            link="https://github.com/Himindu-Kularathne/neuro-hire"
            imageUrl={neurohire}
            title="NeuroHire"
            description="An AI-powered resume screening platform that uses Retrieval-Augmented Generation (RAG) to intelligently analyze and shortlist candidates, streamlining the hiring process with enhanced accuracy and relevance."
            symbols={[node, react, fastapi, mui, mysql, azure]}
          />
          <Card
            link="https://github.com/pallawala-resort"
            imageUrl={pallawala}
            title="Pallawala Resort"
            description={
              <>
                A modern, responsive portfolio website showcasing Pallawala Resort’s services, amenities, and natural
                charm. Built with React and Tailwind CSS. Visit{" "}
                <a
                  href="https://www.pallawalaresort.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#3b82f6", textDecoration: "underline" }}
                >
                  www.pallawalaresort.com
                </a>{" "}
                to book your stay!
              </>
            }
            symbols={[react, tailwind]}
          />
        </div>
        <div className="m-5 flex flex-col items-center justify-center gap-10 sm:gap-4 md:flex-row">
          <Card
            link="https://github.com/CS3203-SEP-21-Group-22"
            imageUrl={ims}
            title="Inventory Management System"
            description="My ongoing semester 5 group project, an Inventory Management System for Computer Laboratories. Developing using React for the front end, .NET for backend with MySQL as the database. Will be using Azure Cloud for deployment."
            symbols={[net, react, tailwind, azure]}
          />
          <Card
            link="https://github.com/Hevb890/UMISF-Registration/tree/main"
            imageUrl={umisf}
            title="Registration Portal for UMISF"
            description="This is an ongoing group project for the UMISF Badminton tournament, a registration portal to handle the participant applications and for tournament organizers to keep track of monetary transactions. I am mainly responsible for developing the front-end. Uses React for the front-end and Node for back-end."
            symbols={[react, node]}
          />
        </div>

        <div className="m-5 flex flex-col items-center justify-center gap-10 sm:gap-4 md:flex-row">
          <Card
            link="https://min3th.github.io/TasksApp/"
            imageUrl={alarm}
            title="Task app with Alarm"
            description="Built completely using React, this is an individual project of mine. It is a task tracking application with a notification alarm, and uses the browser's local storage to store user's data."
            symbols={[react]}
          />
          <Card
            link="https://github.com/Min3th/supplychain"
            imageUrl={flaskapp}
            title="Supply Chain Management System"
            description="A supply chain management system to help companies with delivering their products to wholesalers, retailers and other middlemen. This is my first web application and is completely written using Flask, with MySQL for the database."
            symbols={[flask, mysql]}
          />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
