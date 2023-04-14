import React from "react";

function LeftBar() {
  return (
    <div className="bg-zinc-900 w-[32%]">
      <div className="bg-zinc-700  mx-5   rounded-xl">
        <div className="flex flex-col items-center my-10">
          <div className="flex my-5">
            <div className="p-2 my-5 ">
              <p className="text-white text-center">2000</p>
              <h2>Followers</h2>
            </div>
            <div className="">
              <img
                src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/311569098_1471832893328696_953621629116532090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=I7TFkrXZc7wAX-vVMC7&_nc_ht=scontent.fccu3-1.fna&oh=00_AfBsVybr-5jRKc8UeqRmoXCunPcUfYHZn3xyr3k3vdRalg&oe=643D3069"
                alt="logo"
                className="rounded-xl  w-20 h-20 "
              />
            </div>
            <div className="p-2 my-5">
              <p className="text-white text-center">2000</p>
              <h2>Followers</h2>
            </div>
          </div>
          <div className="">
            <p className="text-white text-center ">Ankush Banerjee</p>
            <h2 className="my-5">Love Code and Anime</h2>
          </div>
          <div className="w-full mx-5 p-2">
            <button className="bg-zinc-800 text-white rounded-xl p-2 w-full">
             My Profile
            </button>
          </div>
        </div>
      </div>
        <div className="flex flex-col  justify-center">
        <p className="mx-5">Skills</p>
        <div className="flex">
          <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
        <h2 className="mx-8 p-1" >  UI Design</h2>
        </div>
        <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
        <h2 className="mx-8 p-1" >  UI Design</h2>
        </div>
        </div>
        <div className="flex">
          <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
        <h2 className="mx-8 p-1" >  UI Design</h2>
        </div>
        <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
        <h2 className="mx-8 p-1" >  UI Design</h2>
        </div>
        </div>
        <div className="flex">
          <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
        <h2 className="mx-8 p-1" >  UI Design</h2>
        </div>
        <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
        <h2 className="mx-8 p-1" >  UI Design</h2>
        </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
