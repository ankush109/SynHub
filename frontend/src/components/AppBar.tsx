// import React from "react";
// import { AiOutlineMessage } from "react-icons/ai";
// import { BiHomeCircle } from "react-icons/bi";
// import { GrNotification } from "react-icons/gr";
// import { HiOutlineSearch } from "react-icons/hi";
// import { MdOutlineNotificationsActive } from "react-icons/md";
// function AppBar() {
//   const newLocal = "white";
//   return (
//     <div className="bg-zinc-800 h-20 flex items-center">
//       <div className="flex mx-20 items-center justify-around">
//         <HiOutlineSearch />

//         <input className='my-5 mx-5 border border-gray-300 focus:outline-blue-600 rounded py-1 px-2 text-gray-700 ' />
//       </div>
//       <div className="m-72 flex">
//         <div>
//           <BiHomeCircle size="20" />
//         </div>
//         <div className="mx-5">
//           <AiOutlineMessage size="20" />
//         </div>
//         <div>
//           <MdOutlineNotificationsActive size="20" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AppBar;
import React, { useEffect } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BiHomeCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  IoIosNotificationsOutline,
  IoIosLogOut,
  IoIosSearch,
  IoMdArrowDropup,
  IoMdArrowDropdown,
} from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { useRouter } from "next/router";
import Link from "next/link";
import { GetUserQuery } from "@/api/user";
import { Avatar } from "@chakra-ui/react";
const ProfileDropdownMenu = () => {
  const router = useRouter();
  const userQuery = GetUserQuery();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="outline-none">
        <div className="border-2 border-gray-400 rounded-full ml-5 shrink-0 hover:cursor-pointer">
          <Avatar className="w-12 h-10" src={userQuery.data?.picture} />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="w-36 h-[90px] flex flex-col items-end "
          side="bottom"
          align="end"
          sideOffset={2}
        >
          <div className="items-end mr-[2px] w-0 h-0 border-l-transparent border-l-[6px] border-r-transparent border-r-[6px] border-b-[6px] border-b-slate-100"></div>
          <DropdownMenu.Item
            className="outline-none"
            onClick={() => router.push("/profile")}
          >
            <div className="flex flex-row items-start w-36 pt-2 px-4 py-2 rounded-tr-md rounded-tl-md bg-zinc-700 hover:bg-slate-500 hover:cursor-pointer ">
              <div>
                <CgProfile size={25} color="white" />
              </div>
              <div className="ml-4 text-md font-bold text-white">Profile</div>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => router.push("/edit-user")}
            className="outline-none"
          >
            <div className="flex flex-row items-start w-36 px-4 py-2  bg-zinc-700  hover:bg-slate-500 hover:cursor-pointer ">
              <div>
                <CiEdit size={25} color="white" />
              </div>
              <div className="ml-4 text-md font-bold text-white">Edit</div>
            </div>
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className="outline-none"
            onClick={() => {
              localStorage.removeItem("token");
              router.push("/login");
            }}
          >
            <div className="flex flex-row items-start rounded-bl-md rounded-br-md w-36 px-4 py-2  bg-zinc-700  hover:bg-slate-500 hover:cursor-pointer outline-none">
              <div>
                <IoIosLogOut size={25} color="white" />
              </div>
              <div className="ml-4 text-md font-bold text-white">Logout</div>
            </div>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const AppBar = () => {
  const [selectedTab, setSelectedTab] = React.useState("");

  useEffect(() => {
    const path = window.location.pathname;
    console.log(path);

    setSelectedTab(path);
  }, [selectedTab]);
  return (
    <nav className="bg-white w-full border-gray-200 dark:bg-gray-800">
      <div className=" flex flex-wrap items-center justify-between mx-10  p-2.5 ">
        <Link href="/home" className="flex items-center">
          <img
            src="/images/logo.png"
            className="h-10 w-10 rounded-full mr-3"
            alt="Synergy Logo"
          />

          <div className="text-2xl font-bold text-yellow-500">Syn</div>
          <div className="text-2xl font-bold text-white">ergy</div>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>

            <span className="sr-only">Search</span>
          </button>

          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3  pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 "
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-[50vh] p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>

          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <ProfileDropdownMenu />
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>

          <ul className="flex flex-col m-2 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  md:dark:bg-zinc-800  dark:border-gray-700">
            <li>
              <Link
                href="/home"
                onClick={() => setSelectedTab("home")}
                className={
                  selectedTab === "/home"
                    ? "block py-2 pl-3 pr-4 text-white bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : ""
                }
                aria-current="page"
              >
                <BiHomeCircle size="24" />
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className={
                  selectedTab === "/profile"
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "bg-yellow-500"
                }
              >
                <CgProfile size="24" />
              </Link>
            </li>
            <li>
              <Link
                href="/Landing"
                onClick={() => setSelectedTab("profile")}
                className={
                  selectedTab === ""
                    ? "block py-2 pl-3 pr-4 text-white bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "bg-yellow-500"
                }
              >
                <MdOutlineNotificationsActive size="24" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default AppBar;
