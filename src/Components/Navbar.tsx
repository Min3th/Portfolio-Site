import React, { Component } from "react";

type Props = {};

type State = {};

export default class Navbar extends Component<Props, State> {
  componentDidMount() {
    const lightSwitches = document.querySelectorAll(".light-switch");
    if (lightSwitches.length > 0) {
      lightSwitches.forEach((lightSwitch, i) => {
        const inputElement = lightSwitch as HTMLInputElement;
        if (localStorage.getItem("dark-mode") === "true") {
          inputElement.checked = true;
        }
        inputElement.addEventListener("change", () => {
          const { checked } = inputElement;
          lightSwitches.forEach((el, n) => {
            const otherInputElement = el as HTMLInputElement;
            if (n !== i) {
              otherInputElement.checked = checked;
            }
          });
          if (inputElement.checked) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("dark-mode", "true");
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("dark-mode", "false");
          }
        });
      });
    }
    const navScroll = document.querySelector("#navScroll");
    window.onscroll = () => {
      if (window.scrollY > 100) {
        navScroll?.classList.add("opacity-75");
      } else {
        navScroll?.classList.remove("opacity-75");
      }
    };
  }

  state = {};

  render() {
    return (
      <div
        id="navScroll"
        className="w-full h-[60px] bg-black text-white font-[sans-serif] font-semibold tracking-[0.04rem] flex flex-row justify-center items-center sm:gap-8 gap-2 text-base fixed top-0 z-50 transition-colors duration-200  "
      >
        <a
          href="#about"
          className="hov hover:scale-[1.1] transition duration-[250ms] ease-in-out"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="hov hover:scale-[1.1] transition duration-[250ms] ease-in-out"
        >
          My Projects
        </a>
        <a
          href="#tech"
          className="hov hover:scale-[1.1] transition duration-[250ms] ease-in-out"
        >
          Technologies
        </a>

        <div className="flex flex-col justify-center ml-3 absolute right-2">
          <input
            type="checkbox"
            name="light-switch"
            className="light-switch sr-only"
            id="light-switch"
          />
          <label className="relative cursor-pointer p-2" htmlFor="light-switch">
            <svg
              className="dark:hidden"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-slate-300"
                d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
              />
              <path
                className="fill-slate-400"
                d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
              />
            </svg>
            <svg
              className="hidden dark:block"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-slate-400"
                d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
              />
              <path
                className="fill-slate-500"
                d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
              />
            </svg>
            <span className="sr-only">Switch to light / dark version</span>
          </label>
        </div>
      </div>
    );
  }
}
