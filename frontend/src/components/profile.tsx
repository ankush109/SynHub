import React from "react";
import AppBar from "./AppBar";
import LeftBar from "./LeftBar";
import Rightbar from "./RightUpbar";
import { CiLocationOn } from "react-icons/ci";
import { BiEdit } from "react-icons/bi";
import { FcGraduationCap } from "react-icons/fc";
import { useDropzone } from "react-dropzone";
import PostCard from "./PostCard";
import { useCallback, useEffect, useRef, useState } from "react";
import { GetPostQuery, GetUserQuery, updateProfilePicture } from "@/api/user";
import CreateClinic from "./createPost";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { createId } from "@paralleldrive/cuid2";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import toast from "react-hot-toast";
import RightUpbar from "./RightUpbar";
import RightDownbar from "./RightDownbar";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
const UserProfile = () => {
  const PostQuery = GetPostQuery();

  const [files, setFiles] = useState<any[]>([]);
  const userQuery = GetUserQuery();
  const profileImage = useRef("");

  const onDrop: any = useCallback(
    (acceptedFiles: string[], fileRejections: any[]) => {
      if (acceptedFiles.length > 0) {
        setFiles((files) => {
          const newFiles = [...files.concat(acceptedFiles)];
          const paths = newFiles.map((o) => o.path);
          const uniqueFiles = newFiles.filter(
            ({ path }, index) => !paths.includes(path, index + 1)
          );
          return uniqueFiles;
        });
      }
      fileRejections.forEach((selectedFile) => {
        selectedFile.errors.forEach((err: any) => {
          if (err.code === "file-too-large") {
            toast.error("File is larger than 10 MB", { id: "Large-File" });
          }
          if (err.code === "file-invalid-type") {
            toast.error("Invalid file type", { id: "Invalid-File" });
          }
        });
      });
    },
    []
  );

  const uploadImage = async () => {};
  useEffect(() => {
    uploadImage();
  }, [files]);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      maxSize: 10485760,
      validator: (file) => {
        const fileFormat = file.name.split(".")[1];
        if (
          fileFormat === "jpg" ||
          fileFormat === "png" ||
          fileFormat === "jpeg"
        ) {
          return null;
        }

        return {
          code: "file-invalid-type",
          message: "Only jpg/png files supported!",
        };
      },
    });

  const [toggle, settogle] = React.useState(1);
  const updatetoggle = (id: any) => {
    settogle(id);
    console.log(PostQuery.data);
  };
  if (userQuery.isLoading) return <div>Loading...</div>;
  if (userQuery.isError) return <div>Error</div>;

  return (
    <div className="  relative h-[90.5vh] w-full p-3 bg-zinc-900 overflow-y-scroll scrollbar-hide">
      {userQuery.data ? (
        <div className="flex flex-col h-[55%] w-full pt-6 mt-7 px-4 justify-center m-1">
          <div className="flex flex-col w-full rounded-xl p-4 shadow-md shadow-blue-300 bg-purple-900">
            <div className="lg:grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="grid-cols-1 lg:col-span-3 py-2">
                <div
                  {...getRootProps()}
                  className="flex-1  text-center px-2 py-2 m-1"
                >
                  <input {...getInputProps()} />
                  {!userQuery.data.picture ? (
                    <div className=" lg:relative shadow-xl ml-2 h-32 w-32 -my-4  rounded-full overflow-hidden ">
                      <img src="https://sticker.nyc3.cdn.digitaloceanspaces.com/20210879/file_1959271_512x512.webp" />
                    </div>
                  ) : (
                    <div className="relative shadow-xl mx-auto h-28 w-28 -my-4  rounded-full overflow-hidden  ">
                      <img
                        className="object-cover w-full h-full"
                        src={userQuery.data.picture}
                        // src="https://wallpapershome.com/images/pages/pic_h/10326.jpg"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-span-1 lg:col-span-9">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl font-bold text-gray-100">
                    {userQuery.data?.name}
                  </h2>
                  <p className="mt-1 font-semibold text-gray-500">
                    @{userQuery.data?.username}
                  </p>
                  <p className="mt-3 text-gray-200">
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  fugit rem voluptas laboriosam officia natus nemo Lorem ipsum
                  dolor sit am */}
                    {/* {userQuery.data.bio} */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque fugit rem voluptas laboriosam officia natus nemoLorem
                    ipsum dolor sit amet consectetur adipisicing elit. Eaque
                    fugit rem voluptas laboriosam officia natus nemo
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-4 gap-6 text-center lg:text-left">
                  <div>
                    <p className="text-lg font-bold text-gray-100">345</p>
                    <p className="text-md font-semibold text-gray-400">Posts</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-100">345</p>
                    <p className="text-md font-semibold text-gray-400">
                      Followers
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-100">345</p>
                    <p className="text-md font-semibold text-gray-400">
                      Following
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-100">345</p>
                    <p className="text-md font-semibold text-gray-400">
                      Contributions
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-8">
                  <button className="w-full rounded-xl border-2 border-blue-500 bg-white px-2 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">
                    Follow
                  </button>
                  <Link href="/edit-user">
                    <button className="w-full rounded-xl border-2 border-blue-500 bg-white px-2 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">
                      {/* <BiEdit className="justify-center" /> */}
                      Edit Profile
                    </button>
                  </Link>
                </div>

                <div>
                  <div className="flex justify-center ">
                    <p className="text-md font-semibold text-blue-300 mt-2  ">
                      Stay Connected With
                    </p>
                  </div>
                  <div className="flex justify-center  gap-16 pt-2">
                    <Link
                      href={
                        userQuery.data.facebook ? userQuery.data.facebook : ""
                      }
                    >
                      <FaFacebookSquare className="w-6 h-6 text-blue-600 cursor-pointer" />
                    </Link>
                    <Link
                      href={
                        userQuery.data.twitter ? userQuery.data.twitter : ""
                      }
                    >
                      <BsTwitter className="w-6 h-6 text-blue-400 cursor-pointer" />
                    </Link>
                    <Link
                      href={
                        userQuery.data.instagram ? userQuery.data.instagram : ""
                      }
                    >
                      <FaInstagram className="w-6 h-6 text-yellow-400 cursor-pointer" />
                    </Link>
                    <Link
                      href={
                        userQuery.data.linkedin ? userQuery.data.linkedin : ""
                      }
                    >
                      <FaLinkedin className="w-6 h-6 text-blue-400 cursor-pointer" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "please login"
      )}

      {/* <CreateClinic /> */}

      <div className="flex justify-evenly mt-24 bg-purple-700 mx-20 rounded-full p-2">
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
      <div className="flex flex-col mt-4">
        <div className={toggle === 1 ? " items-center" : "hidden"}>
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
        <div className={toggle === 2 ? "flex  items-center" : "hidden"}>
          <p className="text-white">
            <h1 className="my-10 text-bold">No Posts Yet</h1>
          </p>
        </div>
      </div>
    </div>
  );
};
function Profile() {
  return (
    <>
      <AppBar />
      <div className="flex flex-row h-[90.5vh]">
        <LeftBar />
        <UserProfile />
        <div className="hidden lg:grid justify-items-center w-[40%]   bg-zinc-900">
          <RightUpbar />

          <RightDownbar />
        </div>
      </div>
    </>
  );
}

export default Profile;
