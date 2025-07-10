import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import profile from "./images/profile.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactTyped } from "react-typed";
import Technologies from "./Sections/technologies";
import MyProjects from "./Sections/myprojects";
import AboutMe from "./Sections/aboutme";
import Intro from "./Sections/intro";

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
      <Intro />
      <AboutMe />
      <MyProjects />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
