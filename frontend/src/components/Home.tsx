import React from "react";
import PostCard from "./PostCard";
import { FcStackOfPhotos } from "react-icons/fc";
import CreateClinic from "./createPost";
import { GetPostQuery, GetUserQuery } from "@/api/user";

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
              key={index}
              user={post.user}
              name={post.name}
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
