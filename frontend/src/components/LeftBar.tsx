// import { useDropzone } from "react-dropzone";
// import React, { useCallback, useEffect, useRef, useState } from "react";
// import toast from "react-hot-toast";
// import { CgProfile } from "react-icons/cg";
// import Image from "next/image";
// import { GetUserQuery, updateProfilePicture } from "@/api/user";
// import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
// import { createId } from "@paralleldrive/cuid2";
// import Link from "next/link";
// function LeftBar() {
//   const userQuery = GetUserQuery();

//   console.log(userQuery.data);
//   return (
//     <div className="bg-zinc-900 w-[32%] hidden lg:block">
//       {userQuery.data ? (
//         <div className="bg-zinc-700  mx-5   rounded-xl">
//           <div className="flex flex-col items-center my-10">
//             <div className="flex my-5"></div>
//             <div className="">
//               <p className="text-white text-center ">{userQuery.data.name}</p>
//               <h2 className="my-5">Love Code and Anime</h2>
//             </div>
//             <div className="w-full mx-5 p-2">
//               <Link href="/profile">
//                 <button className="bg-zinc-800 text-white rounded-xl p-2 w-full">
//                   My Profile
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       ) : (
//         "please login"
//       )}
//       <div className="flex flex-col  justify-center">
//         <p className="mx-5">Skills</p>
//         <div className="flex">
//           <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
//             <h2 className="mx-8 p-1"> UI Design</h2>
//           </div>
//           <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
//             <h2 className="mx-8 p-1"> UI Design</h2>
//           </div>
//         </div>
//         <div className="flex">
//           <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
//             <h2 className="mx-8 p-1"> UI Design</h2>
//           </div>
//           <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
//             <h2 className="mx-8 p-1"> UI Design</h2>
//           </div>
//         </div>
//         <div className="flex">
//           <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
//             <h2 className="mx-8 p-1"> UI Design</h2>
//           </div>
//           <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
//             <h2 className="mx-8 p-1"> UI Design</h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeftBar;
import React from "react";
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

function SideNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClick = () => {};
  return (
    <>
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
      <div className="lg:bg-zinc-800 xl:bg-zinc-800 md:bg-black sm:bg-black  my-8 mx-2 rounded-2xl h-[80%] ">
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
                  RoadMaps
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <SiBookstack className="text-2xl text-gray-400 group-hover:text-white " />
                <h3 className="text-base text-gray-400  group-hover:text-white font-semibold ">
                  Courses
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
    </>
  );
}

export default SideNavbar;
