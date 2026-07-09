import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Technologies from "./Sections/technologies";
import MyProjects from "./Sections/myprojects";
import AboutMe from "./Sections/aboutme";
import Intro from "./Sections/intro";

function App() {
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
