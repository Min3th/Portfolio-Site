import React from "react";
import Card from "../Components/Cards";
import ims from "../images/ims.png";
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
import supabase from "../images/supabase.png";
import python from "../images/python.png";
import huggingface from "../images/huggingface.png";
import nextBlack from "../images/next-black.png";
import mongo from "../images/mongo.png";
import WorkerTrust from "../images/Worker-trust.png";
import Anon from "../images/AnonymousThought.png";
import SubTrak from "../images/SubTrak.png";
import Spring from "../images/sprinboot.png";
import AWS from "../images/aws.png";
import gitfraud from "../images/gitfraud.png";

const MyProjects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/10 pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-600/10 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-6 sm:px-12 md:px-24 text-center">
        <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-4xl sm:text-[50px] font-bold tracking-tight dark:from-blue-400 dark:to-purple-400">
          My Projects
        </h2>
        <p className="max-w-2xl text-lg sm:text-[20px] text-gray-600 dark:text-gray-300">
          Below are some of the projects I have worked on as a Computer Science undergraduate
        </p>
      </div>

      <div className="relative z-10 mt-16 grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <Card
          link="https://github.com/Min3th/subscription_tracker"
          imageUrl={SubTrak}
          title="Subscription Tracker"
          description="A web application to help users manage their subscriptions and track expenses. Includes schedule based email notifications for subscription renewal and payments."
          symbols={[react, Spring, mysql, AWS]}
        />
        <Card
          link="https://github.com/Himindu-Kularathne/worker-trust-system"
          imageUrl={WorkerTrust}
          title="Worker Trust System"
          description="A mobile application to help users find trustworthy workers for their needs. Built using React native and Supabase, this app allows users to rate and review workers based on their performance. Included SMS integration with Twilio, Expo-location, and Resend for email services."
          symbols={[react, supabase]}
        />
        <Card
          link="https://github.com/Min3th/AnonymousThoughts"
          imageUrl={Anon}
          title="Anonymous Thoughts"
          description="A web application that allows users to share their thoughts and feelings anonymously. Built using Next.js, Node.js and MongoDB, this app provides a safe space for users to express themselves without fear of judgement. Contains a huggingface model integration to detect and filter harmful content."
          symbols={[nextBlack, mongo, huggingface]}
        />
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
                className="text-blue-500 hover:underline"
              >
                www.pallawalaresort.com
              </a>{" "}
              to book your stay!
            </>
          }
          symbols={[react, tailwind]}
        />
        <Card
          link="https://github.com/CS3203-SEP-21-Group-22"
          imageUrl={ims}
          title="Inventory Management System"
          description="My ongoing semester 5 group project, an Inventory Management System for Computer Laboratories. Developing using React for the front end, .NET for backend with MySQL as the database. Will be using Azure Cloud for deployment."
          symbols={[net, react, tailwind, azure]}
        />
        <Card
          link="https://github.com/Min3th/gitfraud-analyser"
          imageUrl={gitfraud}
          title="GitFraud Analyzer"
          description="A tool to detect fraudulet git graphs by checking past commit patterns and identifying anomalies."
          symbols={[python, huggingface]}
        />
        <Card
          link="https://github.com/Min3th/supplychain"
          imageUrl={flaskapp}
          title="Supply Chain Management System"
          description="A supply chain management system to help companies with delivering their products to wholesalers, retailers and other middlemen. This is my first web application and is completely written using Flask, with MySQL for the database."
          symbols={[flask, mysql]}
        />
      </div>
    </section>
  );
};

export default MyProjects;
