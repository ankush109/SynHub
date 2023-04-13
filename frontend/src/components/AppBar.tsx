import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BiHomeCircle } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineNotificationsActive } from "react-icons/md";
function AppBar() {
  const newLocal = "white";
  return (
    <div className="bg-zinc-800 h-20 flex items-center">
      <div className="flex mx-20 items-center justify-around">
        <HiOutlineSearch />

        <input className='my-5 mx-5 border border-gray-300 focus:outline-blue-600 rounded py-1 px-2 text-gray-700 ' />
      </div>
      <div className="m-72 flex">
        <div>
          <BiHomeCircle size="20" />
        </div>
        <div className="mx-5">
          <AiOutlineMessage size="20" />
        </div>
        <div>
          <MdOutlineNotificationsActive size="20" />
        </div>
      </div>
    </div>
  );
}

export default AppBar;
