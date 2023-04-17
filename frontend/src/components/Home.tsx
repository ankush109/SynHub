import React from "react";
import PostCard from "./PostCard";
import { FcStackOfPhotos } from "react-icons/fc";
import CreateClinic from "./createPost";
import { GetPostQuery, GetUserQuery } from "@/api/user";

import { MdPermMedia } from "react-icons/md";
import PostItem from "./PostCard";

function Home() {
  const userQuery = GetUserQuery();
  const PostQuery = GetPostQuery();
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
          <div className="flex  my-4 flex-col mx-18 bg-zinc-700 rounded-xl  ">
            <div className="flex items-center flex-row h-16">
              <img
                className=" my-8 mx-5 w-10 h-10 rounded-xl"
                src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/311569098_1471832893328696_953621629116532090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=I7TFkrXZc7wAX-vVMC7&_nc_ht=scontent.fccu3-1.fna&oh=00_AfBsVybr-5jRKc8UeqRmoXCunPcUfYHZn3xyr3k3vdRalg&oe=643D3069"
              />

              <input
                placeholder="What's on your mind, Ankush?"
                className=" p-3 bg-zinc-800  border border-gray-300 h-10 focus:outline-zinc-600 rounded-xl w-2/3 text-white "
              />
              {/* <CreatePostLink /> */}
              <div className="mx-8 bg-zinc-900 w-28 flex gap-1 p-1 rounded-2xl px-1">
                <h2 className="mx-2">Media</h2>
                <div className="justify-center items-center flex">
                  <MdPermMedia size={18} />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex my-5 bg-zinc-700 rounded-xl h-1/2 flex-col mx-20"> */}
          {/* <div className="flex items-center"> */}

          {/* </div> */}
          {/* </div> */}
          <div className="flex p-2 my-8  bg-zinc-700 rounded-xl flex-col mx-20">
            <div className="flex mx-3 items-center justify-evenly">
              <img
                className="w-20 h-20 rounded-full"
                src={userQuery.data?.picture}
              />
              <p>Share your Doubts</p>
              <CreateClinic />
            </div>
          </div>
          {PostQuery.data?.map((post: any, index: any) => (
            <PostCard
              data={post}
              key={index}
              user={post.user}
              createdAt={post.createdAt}
              title={post.title}
              description={post.description}
              displayImages={post.displayImages}
              id={post.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
