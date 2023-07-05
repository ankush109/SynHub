import { NextPage } from "next";
import { useRouter } from "next/router";
import { IoIosSearch } from "react-icons/io";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
import SEO from "../components/SEO";
import AppBar from "@/components/AppBar";
import { Navbar } from "@material-tailwind/react";
import Footer from "@/components/Footer";
import Lottie from "react-lottie-player";
import postAnime from "../animations/op.json";
const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen bg-custom-image bg-cover bg-no-repeat">
        <SEO title="Synergy" />

        <div className="relative z-10 flex justify-between p-5">
          <div className="flex items-center">
            <div className="text-4xl font-bold text-purple-400">Syn</div>
            <div className="text-3xl font-bold text-white">ergy</div>
          </div>
          <div className="flex">
            <button className="my-1 mx-20 h-14  cursor-pointer rounded-xl  bg-purple-500 px-8 font-semibold text-white hover:bg-purple-900 hover:shadow-xl">
              Login/Signup
            </button>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="relative z-10 h-full overflow-hidden">
            <div className=" relative z-10 flex h-auto w-screen items-center justify-center p-8">
              <div className="ml-10 md:ml-20 md:w-1/2">
                <div className="flex ">
                  <div className="text-5xl font-bold ">One </div>
                  &nbsp; &nbsp;&nbsp;&nbsp;
                  <div className="text-5xl  font-bold text-purple-500">
                    Stop{" "}
                  </div>
                  &nbsp; &nbsp;&nbsp;&nbsp;
                  <div className=" text-5xl  font-bold text-white">
                    Solution
                  </div>
                </div>
                <p className="text-base font-semibold text-gray-300 md:text-3xl">
                  For All Your Tech Related Queries
                </p>
                <p className="text-base font-semibold text-purple-500 md:text-3xl">
                  Discuss with your peers and get your doubts cleared
                </p>
                <div className="mt-12 flex items-start justify-start gap-5 text-center ">
                  <button
                    onClick={() => {
                      router.push("/home");
                    }}
                    className=" h-14  cursor-pointer rounded-xl  bg-purple-500 px-8 font-semibold text-white hover:bg-purple-900 hover:shadow-xl"
                  >
                    Home
                  </button>
                  <button className="h-14 cursor-pointer rounded-xl  border border-purple-500 px-8 font-semibold text-ywllow-500 hover:bg-purple-900 hover:text-white hover:shadow-xl">
                    Login/SignUp
                  </button>
                </div>
              </div>

              <div className=" flex justify-center">
                <Lottie
                  animationData={postAnime}
                  play
                  className="w-3/4 h-84 "
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 h-[60vh] ">
            <div className="flex justify-center my-3">
              <p className="text-5xl font-bold text-purple-500 m-5 p-2">
                Features
              </p>
            </div>
            <div className="flex justify-around p-2 m-9">
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="https://img.freepik.com/free-vector/people-background-design_23-2147675587.jpg"
                  alt="Your Image"
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="https://learningfactor.com.au/wp-content/uploads/2018/10/brain-map.jpg"
                  alt="Your Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="../../skills.jpg"
                  alt="Your Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="p-20 ">
            <div className="flex justify-center my-2">
              <p className="text-5xl font-bold text-purple-500 m-5 p-2">
                Testimonials
              </p>
            </div>
            <div className="flex justify-around my-14">
              <div className="w-[20%] p-2 md-2 bg-purple-300 flex rounded-2xl flex-col items-center hover:bg-purple-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <div>
                  <img
                    className="w-32 h-32 object-cover rounded-full shadow-xl mx-5 my-4"
                    src="https://i.ytimg.com/vi/_KpqqAUHcpw/maxresdefault.jpg"
                  />
                </div>
                <div className="w-52 ">
                  <img className="w-10" src="../../images/ok.png" />
                  <p className="text-black font-semibold">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries.
                  </p>
                </div>
              </div>
              <div className="w-[20%]  bg-purple-300 flex flex-col rounded-2xl items-center hover:bg-purple-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <div>
                  <img
                    className="w-32 h-32 object-cover rounded-full shadow-xl mx-5 my-4"
                    src="https://i.ytimg.com/vi/_KpqqAUHcpw/maxresdefault.jpg"
                  />
                </div>
                <div className="w-52 ">
                  <img className="w-10" src="../../images/ok.png" />
                  <p className="text-black font-semibold">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries.
                  </p>
                </div>
              </div>
              <div className="w-[20%]  bg-purple-300 flex flex-col rounded-2xl items-center hover:bg-purple-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                <div>
                  <img
                    className="w-32 h-32 object-cover rounded-full shadow-xl mx-5 my-4"
                    src="https://i.ytimg.com/vi/_KpqqAUHcpw/maxresdefault.jpg"
                  />
                </div>
                <div className="w-52 h-10 ">
                  <img className="w-10" src="../../images/ok.png" />
                  <p className="text-black font-semibold">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries.
                  </p>
                </div>
              </div>
              <div className="w-[20%]  bg-purple-300 flex flex-col rounded-2xl items-center hover:bg-purple-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <div>
                  <img
                    className="w-32 h-32 object-cover rounded-full shadow-xl mx-5 my-4"
                    src="https://i.ytimg.com/vi/_KpqqAUHcpw/maxresdefault.jpg"
                  />
                </div>
                <div className="w-52 ">
                  <img className="w-10" src="../../images/ok.png" />
                  <p className="text-black font-semibold">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Home;
