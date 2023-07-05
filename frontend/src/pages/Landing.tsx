import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
import HeroImage from "../../public/images/hero1.jpg";

import AppBar from "@/components/AppBar";

function MainPage() {
  return (
    <>
      <AppBar />
      <div className=" w-screen h-full">
        <div className="flex h-auto w-screen items-center justify-center p-8">
          <div className="ml-10 md:ml-20 md:w-1/2">
            <h1 className="my-5 text-5xl font-bold text-gray-200 md:text-7xl">
              One Stop Solution
            </h1>
            <p className="text-base font-semibold text-gray-500 md:text-3xl">
              For All Your Tech Related Queries
            </p>
            <p className="text-base font-semibold text-gray-500 md:text-3xl">
              Discuss with your peers and get your doubts cleared
            </p>
            <div className="mt-12 flex items-start justify-start gap-5 text-center ">
              <button className=" h-14  cursor-pointer rounded-xl  bg-violet-600 px-8 font-semibold text-white hover:bg-violet-900 hover:shadow-xl">
                Explore !
              </button>
              <button className="h-14 cursor-pointer rounded-xl  border border-violet-600 px-8 font-semibold text-violet-600 hover:bg-violet-900 hover:text-white hover:shadow-xl">
                Login/SignUp
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <Image
              src={HeroImage}
              width={900}
              height={700}
              objectFit="contain"
              alt="hero img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
