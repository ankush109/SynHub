import React from "react";
import PostCard from "./PostCard";
import { FcStackOfPhotos } from "react-icons/fc";

function Home() {
  return (
    <div className="bg-zinc-900 w-full overflow-y-scroll scrollbar-hide ">
      <div className="  my-4">
     
        <div className="flex flex-col">
          <div className="flex gap-4 justify-center">
            <div className="w-20 h-20 rounded-xl bg-neutral-50"></div>{" "}
            <div className="w-20 h-20 rounded-xl bg-neutral-50"></div>
            <div className="w-20 h-20 rounded-xl bg-neutral-50"></div>
            <div className="w-20 h-20 rounded-xl bg-neutral-50"></div>
            <div className="w-20 h-20 rounded-xl bg-neutral-50"></div>
            <div className="w-20 h-20 rounded-xl bg-neutral-50"></div>
            <div className="w-20 h-20 rounded-xl bg-neutral-50"></div>
          </div>
          <div className="flex  my-8  bg-zinc-700 rounded-xl flex-col mx-20">
            <div className="flex items-center">
              <img
                className=" my-10 mx-5 w-10 h-10 rounded-xl"
                src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/311569098_1471832893328696_953621629116532090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=I7TFkrXZc7wAX-vVMC7&_nc_ht=scontent.fccu3-1.fna&oh=00_AfBsVybr-5jRKc8UeqRmoXCunPcUfYHZn3xyr3k3vdRalg&oe=643D3069"
              />
             
              <input
                placeholder="What's on your mind, Ankush?"
                className=" p-3 bg-zinc-800  border border-gray-300 h-10 focus:outline-zinc-600 rounded  w-1/2 text-white "
              />
               <div className="mx-8 bg-zinc-900 w-28 flex gap-1 p-1 rounded-2xl px-1">
              <h2 className="mx-2">Photo</h2>
              <FcStackOfPhotos size={25}/>
             </div>
            </div>
            
          </div>
           <PostCard logo="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/340474975_728392899076592_1538111526232044092_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1TIQKHEltzwAX827Yfj&_nc_ht=scontent.fccu3-1.fna&oh=00_AfCLec47NJ5gARDmrGIQWJQbQFKyCI8lx_ENeOXXpxUdlg&oe=643D4DFC" />
                 <PostCard logo="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/340633038_551190090453814_776047172445159497_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4FSdfLsFmpkAX9LHKK_&_nc_ht=scontent.fccu3-1.fna&oh=00_AfBAtfmydHtweBVwutF5pOUybPnt1N_UnKMIHHw2mBwOog&oe=643CE19D" />
          <PostCard logo="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/340474975_728392899076592_1538111526232044092_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1TIQKHEltzwAX827Yfj&_nc_ht=scontent.fccu3-1.fna&oh=00_AfCLec47NJ5gARDmrGIQWJQbQFKyCI8lx_ENeOXXpxUdlg&oe=643D4DFC" />
                 <PostCard logo="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/340633038_551190090453814_776047172445159497_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4FSdfLsFmpkAX9LHKK_&_nc_ht=scontent.fccu3-1.fna&oh=00_AfBAtfmydHtweBVwutF5pOUybPnt1N_UnKMIHHw2mBwOog&oe=643CE19D" />
        </div>
      </div>
    </div>
  );
}

export default Home;
