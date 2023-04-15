import React from "react";
import AppBar from "./AppBar";
import LeftBar from "./LeftBar";
import Rightbar from "./Rightbar";
import { CiLocationOn } from "react-icons/ci";
import { BiEdit } from "react-icons/bi";
import { FcGraduationCap } from "react-icons/fc";

import PostCard from "./PostCard";
import { GetPostQuery, GetUserQuery } from "@/api/user";
import CreateClinic from "./createPost";

const UserProfile = () => {
  const PostQuery = GetPostQuery();
  const userQuery = GetUserQuery();
  console.log(userQuery.data);

  const [toggle, settogle] = React.useState(1);
  const updatetoggle = (id: any) => {
    settogle(id);
    console.log(PostQuery.data);
  };
  if (userQuery.isLoading) return <div>Loading...</div>;
  if (userQuery.isError) return <div>Error</div>;

  return (
    <div className="w-full bg-zinc-900 overflow-y-scroll scrollbar-hide">
      <div>
        <div className="w-full my-10 h-1/2 bg-zinc-800  ">
          <div className="my-10 p-5 flex">
            <img
              src={userQuery.data?.picture}
              alt=""
              className="w-36 mx-10 my-10 h-36  rounded-full"
            />

            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <h1 className="mx-1 text-bold">{userQuery.data?.name}</h1>
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
        <CreateClinic />

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
            {PostQuery.data?.map((post: any, index: any) => (
              <PostCard
                key={index}
                user={post.user}
                name={post.name}
                description={post.description}
                displayImages={post.displayImages}
                id={post.id}
              />
            ))}
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
