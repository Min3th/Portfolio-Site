import React, { Component } from "react";

type Props = {};

type State = {};

export default class Footer extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="w-full h-[200px] bg-black flex flex-col justify-center items-center text-white relative sm:mt-0 mt-[500px]">
        <div className="text-[30px] font-semibold">Technologies used</div>
        <div className="flex-row flex mt-6 gap-4 items-center text-gray-200">
          <p className="bg-gray-800 p-1 rounded-[4px]">React</p>
          <p className="bg-gray-800 p-1 rounded-[4px]">Typescript</p>
          <p className="bg-gray-800 p-1 rounded-[4px]">Tailwind CSS</p>
          <p className="bg-gray-800 p-1 rounded-[4px]">HTML5</p>
        </div>
      </div>
    );
  }
}
