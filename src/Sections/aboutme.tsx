import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[100px] dark:bg-blue-600/5 pointer-events-none"></div>

      <div className="relative z-10 flex max-w-4xl flex-col items-center justify-center px-6 text-center">
        <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-blue-400 dark:to-purple-400 sm:text-5xl md:text-6xl">
          About Me
        </h2>
        
        <div className="mt-12 rounded-3xl bg-white/40 border border-white/60 p-8 shadow-xl backdrop-blur-md dark:bg-gray-900/40 dark:border-gray-700/50 sm:p-12">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl">
            I am passionate about becoming a software engineer and providing value to the web development space. I am
            interested in full stack applications and solving real-world problems. I completed my internship at WSO2 Pvt
            Ltd, where I contributed mainly to the development of the Visitor App. I'm a team player, being part of the
            University badminton team that has won many tournaments. I'm also an active member of several clubs, having
            led many successful projects. And I wouldn’t say no to a chocolate milkshake 🧋.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
