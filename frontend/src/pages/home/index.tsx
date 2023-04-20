import AppBar from "@/components/AppBar";

import Home from "@/components/Home";
import LeftBar from "@/components/LeftBar";
import RightDownbar from "@/components/RightDownbar";
import RightUpbar from "@/components/RightUpbar";
import { Stack } from "@chakra-ui/react";
import React from "react";

function index() {
  return (
    <div className="">
      <div className="">
        <AppBar />
        <div className="flex flex-row h-[90.5vh]">
          {/* <div className="bg-zinc-900 w-[42%] py-12 px-5 hidden lg:flex ">
            <div className="flex justify-left bg-zinc-800 w-full h-[95%] rounded-2xl "> */}
          <LeftBar />
          {/* </div>
          </div> */}
          <Home />
          {/* <div className="flex flex-col bg-zinc-900 w-[42%] py-12 px-5 hidden lg:flex ">
            <div className="flex justify-left bg-zinc-800 w-full h-[95%] rounded-2xl "> */}
          <div className="grid justify-items-center w-[40%]   bg-zinc-900">
            <RightUpbar />

            <RightDownbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
