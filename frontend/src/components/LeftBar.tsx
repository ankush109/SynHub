
import { useDropzone } from "react-dropzone";
import React, { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import { GetUserQuery, updateProfilePicture } from "@/api/user";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { createId } from "@paralleldrive/cuid2";
import Link from "next/link";
function LeftBar() {
  const userQuery = GetUserQuery();

  console.log(userQuery.data);
  return (
    <div className="bg-zinc-900 w-[32%] hidden lg:block">
      {userQuery.data ? (
        <div className="bg-zinc-700  mx-5   rounded-xl">
          <div className="flex flex-col items-center my-10">
            <div className="flex my-5"></div>
            <div className="">
              <p className="text-white text-center ">{userQuery.data.name}</p>
              <h2 className="my-5">Love Code and Anime</h2>
            </div>
            <div className="w-full mx-5 p-2">
              <Link href="/profile">
                <button className="bg-zinc-800 text-white rounded-xl p-2 w-full">
                  My Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        "please login"
      )}
      <div className="flex flex-col  justify-center">
        <p className="mx-5">Skills</p>
        <div className="flex">
          <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
            <h2 className="mx-8 p-1"> UI Design</h2>
          </div>
          <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
            <h2 className="mx-8 p-1"> UI Design</h2>
          </div>
        </div>
        <div className="flex">
          <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
            <h2 className="mx-8 p-1"> UI Design</h2>
          </div>
          <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
            <h2 className="mx-8 p-1"> UI Design</h2>
          </div>
        </div>
        <div className="flex">
          <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
            <h2 className="mx-8 p-1"> UI Design</h2>
          </div>
          <div className="bg-zinc-700 w-36 my-2 mx-5 rounded-xl">
            <h2 className="mx-8 p-1"> UI Design</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
