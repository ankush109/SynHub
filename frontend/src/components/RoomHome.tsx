import React from "react";
import PostCard from "@/components/PostCard";
import { FcStackOfPhotos } from "react-icons/fc";
import CreateClinic from "@/components/createPost";
import { GetPostQuery, GetUserQuery } from "@/api/user";

import { MdPermMedia } from "react-icons/md";
import Carousel from "react-multi-carousel";

function Home() {
  const userQuery = GetUserQuery();
  const PostQuery = GetPostQuery();
  //  const responsive = {
  //    desktop: {
  //      breakpoint: { max: 3000, min: 1024 },
  //      items: 3,
  //    },
  //    tablet: {
  //      breakpoint: { max: 1023, min: 464 },
  //      items: 2,
  //    },
  //    mobile: {
  //      breakpoint: { max: 767, min: 0 },
  //      items: 1,
  //    },
  //  };
  return (
    <div className="bg-zinc-900 w-full overflow-y-scroll scrollbar-hide ">
      <div className="  my-4">
        <div className="flex flex-col">
          <div className="inline-flex ml-8 mt-8">
            {/* <Carousel
              responsive={responsive}
              containerClass="-mx-[10px]"
              itemClass="px-[10px]"
            > */}
            <div className="flex-1 text-center px-2 py-2 m-1">
              <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                <img
                  className="object-cover w-full h-full"
                  src="https://wallpapershome.com/images/pages/pic_h/10326.jpg"
                />
              </div>
              <h1 className="pt-12 text-base font-semibold text-gray-100">
                Web Development
              </h1>
            </div>

            <div className="flex-1 text-center px-2 py-2 m-1">
              <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                <img
                  className="object-cover w-full h-full"
                  src="https://wallpapershome.com/images/pages/pic_h/10326.jpg"
                />
              </div>
              <h1 className="pt-12 text-base font-semibold text-gray-100">
                Web Development
              </h1>
            </div>
            <div className="flex-1 text-center px-2 py-2 m-1">
              <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                <img
                  className="object-cover w-full h-full"
                  src="https://wallpapershome.com/images/pages/pic_h/10326.jpg"
                />
              </div>
              <h1 className="pt-12 text-base font-semibold text-gray-100">
                Web Development
              </h1>
            </div>
            <div className="flex-1 text-center px-2 py-2 m-1">
              <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                <img
                  className="object-cover w-full h-full"
                  src="https://wallpapershome.com/images/pages/pic_h/10326.jpg"
                />
              </div>
              <h1 className="pt-12 text-base font-semibold text-gray-100">
                Web Development
              </h1>
            </div>
            <div className="flex-1 text-center px-2 py-2 m-1">
              <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                <img
                  className="object-cover w-full h-full"
                  src="https://wallpapershome.com/images/pages/pic_h/10326.jpg"
                />
              </div>
              <h1 className="pt-12 text-base font-semibold text-gray-100">
                Web Development
              </h1>
            </div>
            <div className="flex-1 text-center px-2 py-2 m-1">
              <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                <img
                  className="object-cover w-full h-full"
                  src="https://wallpapershome.com/images/pages/pic_h/10326.jpg"
                />
              </div>
              <h1 className="pt-12 text-base font-semibold text-gray-100">
                Web Development
              </h1>
            </div>
            <div className="flex-1 text-center px-2 py-2 m-1">
              <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                <img
                  className="object-cover w-full h-full"
                  src="https://wallpapershome.com/images/pages/pic_h/10326.jpg"
                />
              </div>
              <h1 className="pt-12 text-base font-semibold text-gray-100">
                Web Development
              </h1>
            </div>
            {/* </Carousel> */}
          </div>
          <div className="flex flex-col justify-center item-center pl-12">
            <h1 className="text-base text-start cursor-pointer font-bold text-yellow-400  pb-1 w-full">
              #WEB DEVELOPMENT
            </h1>
          </div>
          <div className="flex  my-2 flex-col mx-10 bg-zinc-700 rounded-xl  ">
            <div className="flex items-center  flex-row h-14">
              <img
                className=" my-8 mx-5 w-10 h-10 rounded-xl"
                src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/311569098_1471832893328696_953621629116532090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=I7TFkrXZc7wAX-vVMC7&_nc_ht=scontent.fccu3-1.fna&oh=00_AfBsVybr-5jRKc8UeqRmoXCunPcUfYHZn3xyr3k3vdRalg&oe=643D3069"
              />
              {/* <p className=" p-3 bg-zinc-800  border border-gray-300 h-10 focus:outline-zinc-600 rounded-xl w-2/3 text-white ">
                Share your Doubts
              </p> */}
              <p>Share your Doubts....</p>
              <div className="flex items-center  ml-20 pl-1 ">
                <CreateClinic />
              </div>
              {/* <div className="mx-8 bg-zinc-900 w-28 flex gap-1 p-1 rounded-2xl px-1">
                <h2 className="mx-2">Media</h2>
                <div className="justify-center items-center flex">
                  <MdPermMedia size={18} />
                </div>
              </div> */}
            </div>
          </div>
          {/* <div className="flex p-2 my-8  bg-zinc-700 rounded-xl flex-col mx-20">
            <div className="flex mx-3 items-center justify-evenly">
              <img
                className="w-20 h-20 rounded-full"
                src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/311569098_1471832893328696_953621629116532090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=I7TFkrXZc7wAX-vVMC7&_nc_ht=scontent.fccu3-1.fna&oh=00_AfBsVybr-5jRKc8UeqRmoXCunPcUfYHZn3xyr3k3vdRalg&oe=643D3069"
              />
              <p>Share your Doubts</p>
              <CreateClinic />
            </div>
          </div> */}
          {/* <div className="flex my-5 bg-zinc-700 rounded-xl h-1/2 flex-col mx-20"> */}
          {/* <div className="flex items-center"> */}
          <PostCard />
          <PostCard />
          {/* </div> */}
          {/* </div> */}
          {/* <div className="flex p-2 my-8  bg-zinc-700 rounded-xl flex-col mx-20">
            <div className="flex mx-3 items-center justify-evenly">
              <img
                className="w-20 h-20 rounded-full"
                src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/311569098_1471832893328696_953621629116532090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=I7TFkrXZc7wAX-vVMC7&_nc_ht=scontent.fccu3-1.fna&oh=00_AfBsVybr-5jRKc8UeqRmoXCunPcUfYHZn3xyr3k3vdRalg&oe=643D3069"
              />
              <p>Share your Doubts</p>
              <CreateClinic />
            </div>
          </div> */}
          {/* {PostQuery.data?.map((post: any, index: any) => (
            <PostCard
              key={index}
              user={post.user}
              name={post.name}
              description={post.description}
              displayImages={post.displayImages}
              id={post.id}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Home;
