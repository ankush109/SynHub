import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
  MdBiotech,
  MdBusiness,
  MdOutlineBusinessCenter,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SiBookstack } from "react-icons/si";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { IoBookSharp } from "react-icons/io5";
import Link from "next/link";

function SideNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const [selectedTab, setSelectedTab] = React.useState("");

  useEffect(() => {
    const path = window.location.pathname;
    console.log(path);

    setSelectedTab(path);
  }, [selectedTab]);
  return (
    <div className="hidden lg:block w-[37%] bg-zinc-900">
      {/* // <div className="flex flex bg-zinc-900 w-[42%] py-12 px-5 hidden lg:flex "> */}
      <div>
        <Disclosure as="nav">
          <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
            <GiHamburgerMenu
              className="block md:hidden h-6 w-6"
              aria-hidden="true"
            />
          </Disclosure.Button>
        </Disclosure>
      </div>
      <div className="lg:bg-zinc-800 xl:bg-zinc-800 md:bg-zinc-900 sm:bg-zinc-900  my-8 ml-2 rounded-2xl h-[80%] ">
        {/* <div className=" bg-zinc-800 w-full h-full rounded-2xl"> */}
        <div className="p-6 w-1/2 rounded-2xl h-0 bg-zinc-800 z-20 relative top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-center item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-gray-200 border-b border-gray-100 pb-4 w-full">
              Virtual Dashboard
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdBiotech className="text-2xl text-gray-400 group-hover:text-white " />
                <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">
                  <Link
                    href="/Roadmaps"
                    onClick={() => setSelectedTab("Roadmaps")}
                  >
                    RoadMaps
                  </Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <SiBookstack className="text-2xl text-gray-400 group-hover:text-white " />
                <h3 className="text-base text-gray-400  group-hover:text-white font-semibold ">
                  <Link
                    href="/Courses"
                    onClick={() => setSelectedTab("Courses")}
                  >
                    Courses
                  </Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdBusiness className="text-2xl text-gray-400 group-hover:text-white " />
                <h3 className="text-base text-gray-400  group-hover:text-white font-semibold ">
                  Company Details
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineBusinessCenter className="text-2xl text-gray-400 group-hover:text-white " />
                <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">
                  Company Openings
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <IoBookSharp className="text-2xl text-gray-400 group-hover:text-white " />
                <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">
                  Platforms
                </h3>
              </div>
            </div>

            {/* setting  */}
            <div className=" my-4  pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-gray-400 group-hover:text-white " />
                <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">
                  Settings
                </h3>
              </div>
            </div>
            {/* logout */}
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* // </div> */}
    </div>
  );
}

export default SideNavbar;
