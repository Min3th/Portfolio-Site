import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div id="about" className="relative flex flex-col items-center justify-center">
      <div className="mt-[200px] flex h-screen w-[400px] flex-col items-center justify-center rounded-[40px] p-20 text-center sm:mt-0 sm:w-screen">
        <div className="font-[sans-serif] text-[60px] font-semibold dark:text-white">About Me</div>
        <div className="m-10 text-center text-[20px] dark:text-white">
          I am passionate about becoming a software engineer and providing value to the web development space. I am
          interested in full stack applications and solving real-world problems. I'm a team player, being part of the
          University badminton team that has won many tournaments. I'm also an active member of several clubs, having
          led many successful projects. And I wouldn’t say no to a chocolate milkshake 🧋.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
