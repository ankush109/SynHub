// import React from "react";

// function RightUpbar() {
//   return (
//     <div className="bg-zinc-900 w-[40%] pr-4 py-2 hidden lg:flex ">
//       <div className="bg-zinc-800 w-full h-[45%] rounded-2xl"></div>
//     </div>
//   );
// }

// export default RightUpbar;

import React from "react";
// import { data } from "../data/data.js";
import { FaShoppingBag } from "react-icons/fa";
import { MdBiotech } from "react-icons/md";

const RightUpbar = () => {
  return (
    <div className="w-[100%] col-span-1 relative lg:h-[40vh] h-[50vh] my-4 mx-4 border rounded-xl bg-zinc-800 overflow-scroll  scrollbar-hide ">
      <div className="sticky top-0 bg-zinc-800 bg-zinc-800    rounded-lg h-10 w-full absolute top ">
        <h1 className=" text-base text-center cursor-pointer font-bold text-gray-100 py-1 w-full ">
          Recent Activity
        </h1>
      </div>
      <ul>
        <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-1 rounded-md group cursor-pointer hover:shadow-lg m-auto">
          <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">
            1.
          </h3>
          <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit
            rem voluptas laboriosam officia natus nemo
          </h3>
        </div>
        <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-1 rounded-md group cursor-pointer hover:shadow-lg m-auto">
          <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">
            2.
          </h3>
          <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit
            rem voluptas laboriosam officia natus nemo
          </h3>
        </div>
        <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-1 rounded-md group cursor-pointer hover:shadow-lg m-auto">
          <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">
            3.
          </h3>
          <h3 className="text-base text-gray-400 group-hover:text-white font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit
            rem voluptas laboriosam officia natus nemo
          </h3>
        </div>

        {/* <li
          key="id"
          className="bg-zinc-800 hover:bg-gray-100 rounded-lg p-2 flex items-center cursor-pointer"
        >
          <div className="bg-purple-100 rounded-lg p-3">
            <FaShoppingBag className="text-purple-800" />
          </div>
          <div className="pl-4 flex-row ">
            <p className="text-gray-400 font-bold ">Ron007</p>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default RightUpbar;
