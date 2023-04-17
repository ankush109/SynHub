// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// // import Layout from "@/components/Layout";
// const rr = () => {
//   return (
//     // <div className=" h-[91.5vh]">
//     <main style={{ minHeight: "70vh" }}>
//       <h1 className=" text-base text-center cursor-pointer font-bold text-gray-100 py-1 w-full ">
//         Recent Activity
//       </h1>
//       <div className="container" style={{ marginTop: "100px" }}>
//         <div className="row container">
//           <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key="{c._id}">
//             <div className="card">
//               <Link href={`#`} className="btn cat-btn">
//                 Web Development
//               </Link>
//             </div>
//             <div className="card">
//               {/* .cat-btn {
//   padding: 40px 0px;
//   font-size: 24px;
//   text-transform: uppercase;
// }

// .cat-btn:hover {
//   background-color: #3d28b3;
//   color: white; */}

//               <Link
//                 href={`#`}
//                 className=" px-40 py-0 font-size-24 hover:bg-white color-gray"
//               >
//                 Web Development
//               </Link>
//             </div>
//             <div className="card">
//               <Link href={`#`} className="btn cat-btn">
//                 Web Development
//               </Link>
//             </div>
//             <div className="card">
//               <Link href={`#`} className="btn cat-btn">
//                 Web Development
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default rr;
import { MdBiotech, MdOutlineDeveloperMode } from "react-icons/md";

const rr = () => {
  return (
    <div className="mb-10 h-full">
      {/* HEADING START */}
      {/* <div className="flex h-20  justify-between mb-2">
        <div className="text-md font-semibold">Select Size</div>
      </div> */}
      <div className="sticky top-0 bg-black-100  text-base text-center text-3xl  rounded-lg  w-full absolute top ">
        <h1 className=" text-3xl  font-bold text-yellow-400 py-3 w-full  ">
          RoadMaps
        </h1>
      </div>
      {/* HEADING END */}

      <div
        id="sizesGrid"
        className="mx-8 my-6 grid grid-cols-3 gap-x-10 gap-y-8"
      >
        <div
          key="id"
          className="flex items-center gap-4 pl-10 w-50 h-20 my-6 border-yellow bg-gray-500 rounded-xl text-center text-black-900 text-2xl font-bold py-3  

                hover:bg-green-600 cursor-pointer
         "
          onClick={() => {}}
        >
          <MdOutlineDeveloperMode
            size={29}
            className="text-2xl text-gray-100"
          />
          <h1 className="my-3">Web Development</h1>
        </div>

        <div
          key="id"
          className="flex items-center gap-4 pl-10 w-50 h-20 my-6 border-yellow bg-gray-500 rounded-xl text-center text-black-900 text-2xl font-bold py-3  

                hover:bg-green-600 cursor-pointer
         "
          onClick={() => {}}
        >
          <MdOutlineDeveloperMode
            size={29}
            className="text-2xl text-gray-100"
          />
          <h1 className="my-3">Web Development</h1>
        </div>
        <div
          key="id"
          className="flex items-center gap-4 pl-10 w-50 h-20 my-6 border-yellow bg-gray-500 rounded-xl text-center text-black-900 text-2xl font-bold py-3  

                hover:bg-green-600 cursor-pointer
         "
          onClick={() => {}}
        >
          <MdOutlineDeveloperMode
            size={29}
            className="text-2xl text-gray-100"
          />
          <h1 className="my-3">Web Development</h1>
        </div>
        <div
          key="id"
          className="flex items-center gap-4 pl-10 w-50 h-20 my-6 border-yellow bg-gray-500 rounded-xl text-center text-black-900 text-2xl font-bold py-3  

                hover:bg-green-600 cursor-pointer
         "
          onClick={() => {}}
        >
          <MdOutlineDeveloperMode
            size={29}
            className="text-2xl text-gray-100"
          />
          <h1 className="my-3">Web Development</h1>
        </div>
        <div
          key="id"
          className="flex items-center gap-4 pl-10 w-50 h-20 my-6 border-yellow bg-gray-500 rounded-xl text-center text-black-900 text-2xl font-bold py-3  

                hover:bg-green-600 cursor-pointer
         "
          onClick={() => {}}
        >
          <MdOutlineDeveloperMode
            size={29}
            className="text-2xl text-gray-100"
          />
          <h1 className="my-3">Web Development</h1>
        </div>
        <div
          key="id"
          className="flex items-center gap-4 pl-10 w-50 h-20 my-6 border-yellow bg-gray-500 rounded-xl text-center text-black-900 text-2xl font-bold py-3  

                hover:bg-green-600 cursor-pointer
         "
          onClick={() => {}}
        >
          <MdOutlineDeveloperMode
            size={29}
            className="text-2xl text-gray-100"
          />
          <h1 className="my-3">Web Development</h1>
        </div>
        <div
          key="id"
          className="flex items-center gap-4 pl-10 w-50 h-20 my-6 border-yellow bg-gray-500 rounded-xl text-center text-black-900 text-2xl font-bold py-3  

                hover:bg-green-600 cursor-pointer
         "
          onClick={() => {}}
        >
          <MdOutlineDeveloperMode
            size={29}
            className="text-2xl text-gray-100"
          />
          <h1 className="my-3">Web Development</h1>
        </div>
        <div
          key="id"
          className="flex items-center gap-4 pl-10 w-50 h-20 my-6 border-yellow bg-gray-500 rounded-xl text-center text-black-900 text-2xl font-bold py-3  

                hover:bg-green-600 cursor-pointer
         "
          onClick={() => {}}
        >
          <MdOutlineDeveloperMode
            size={29}
            className="text-2xl text-gray-100"
          />
          <h1 className="my-3">Web Development</h1>
        </div>
        <div
          key="id"
          className="flex items-center gap-4 pl-10 w-50 h-20 my-6 border-yellow bg-gray-500 rounded-xl text-center text-black-900 text-2xl font-bold py-3  

                hover:bg-green-600 cursor-pointer
         "
          onClick={() => {}}
        >
          <MdOutlineDeveloperMode
            size={29}
            className="text-2xl text-gray-100"
          />
          <h1 className="my-3">Web Development</h1>
        </div>
      </div>
    </div>
  );
};
export default rr;
