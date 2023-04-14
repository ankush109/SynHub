import React from "react";
import AppBar from "./AppBar";
import LeftBar from "./LeftBar";
import Rightbar from "./Rightbar";
import { CiLocationOn } from "react-icons/ci";

import { FcGraduationCap } from "react-icons/fc";

import PostCard from "./PostCard";

const UserProfile = () => {
  const [toggle, settogle] = React.useState(1);
  const updatetoggle = (id: any) => {
    settogle(id);
  };
  return (
    <div className="w-full bg-zinc-900 overflow-y-scroll scrollbar-hide">
      <div>
        <div className="w-full my-10 h-1/2 bg-zinc-800  ">
          <div className="my-10 p-5 flex">
            <img
              src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/334029236_3110192395946947_220618054366163614_n.jpg?stp=dst-jpg_p843x403&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QNtD-EzYBGwAX9wfcYm&_nc_ht=scontent.fccu3-1.fna&oh=00_AfBNasJSHHzPbNK1lpK-26xZwXaGDq4PfmLfaXh16A-UUg&oe=643DED5A"
              alt=""
              className="w-36 mx-10 my-10 h-36  rounded-full"
            />

            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <h1 className="mx-1 text-bold">Ankush Banerjee</h1>
              </div>

              <div className="my-10">
                <div className="flex ">
                  <FcGraduationCap size={25} color="gray" />
                  <p className="mx-2">Techno Main SaltLake</p>
                </div>
                <div className="flex gap-2 items-center">
                  <CiLocationOn color="green" size={25} />
                  <p>Kolkata, West Bengal ,India</p>
                </div>
                <div className="flex ">
                  <p className="mx-2 my-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Praesentium a quos aspernatur rem reprehenderit? Accusantium
                    corrupti atque sunt molestiae earum ut modi, deleniti iste
                    quas! Fugit nemo quos quae excepturi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="flex justify-evenly bg-zinc-700 mx-20 rounded-full p-2">
          <p
            className={
              toggle === 1
                ? " border-b-4 border-white cursor-pointer"
                : "cursor-pointer"
            }
            onClick={() => {
              updatetoggle(1);
            }}
          >
            My Posts
          </p>
          <p
            className={
              toggle === 2
                ? " border-b-4 border-white cursor-pointer"
                : " cursor-pointer"
            }
            onClick={() => {
              updatetoggle(2);
            }}
          >
            Liked Posts
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className={toggle === 1 ? " items-center" : "hidden"}>
            <PostCard logo="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/340474975_728392899076592_1538111526232044092_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1TIQKHEltzwAX827Yfj&_nc_ht=scontent.fccu3-1.fna&oh=00_AfCLec47NJ5gARDmrGIQWJQbQFKyCI8lx_ENeOXXpxUdlg&oe=643D4DFC" />
            <PostCard logo="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/340633038_551190090453814_776047172445159497_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4FSdfLsFmpkAX9LHKK_&_nc_ht=scontent.fccu3-1.fna&oh=00_AfBAtfmydHtweBVwutF5pOUybPnt1N_UnKMIHHw2mBwOog&oe=643CE19D" />
            <PostCard logo="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/340474975_728392899076592_1538111526232044092_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1TIQKHEltzwAX827Yfj&_nc_ht=scontent.fccu3-1.fna&oh=00_AfCLec47NJ5gARDmrGIQWJQbQFKyCI8lx_ENeOXXpxUdlg&oe=643D4DFC" />
            <PostCard logo="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/340633038_551190090453814_776047172445159497_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4FSdfLsFmpkAX9LHKK_&_nc_ht=scontent.fccu3-1.fna&oh=00_AfBAtfmydHtweBVwutF5pOUybPnt1N_UnKMIHHw2mBwOog&oe=643CE19D" />
          </div>
          <div className={toggle === 2 ? "flex  items-center" : "hidden"}>
            <p className="text-white">
              <h1 className="my-10 text-bold">No Posts Yet</h1>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
function Profile() {
  return (
    <div className="">
      <div className="">
        <AppBar />
        <div className="flex flex-row h-[91vh]">
          <LeftBar />
          <UserProfile />
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default Profile;
