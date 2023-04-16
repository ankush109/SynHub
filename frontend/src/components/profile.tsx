import React from "react";
import AppBar from "./AppBar";
import LeftBar from "./LeftBar";
import Rightbar from "./Rightbar";
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

  const uploadImage = async () => {
    const client = new S3Client({
      region: "ap-south-1",
      credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY!,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
      },
    });
    if (files.length > 0) {
      let keyName = createId() + "." + files[0].name.split(".")[1];
      const command = new PutObjectCommand({
        Bucket: "hackathon-bucket-ankush",
        Key: keyName,
        Body: files[0],
        ACL: "public-read",
      });
      let payload = {
        picture: `https://hackathon-bucket-ankush.s3.ap-south-1.amazonaws.com/${keyName}`,
      };

      try {
        await client.send(command);
        await updateProfilePicture(payload);
        profileImage.current = payload.picture;
        userQuery.refetch();
        setFiles([]);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  };
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
    <div className="w-full p-3 bg-zinc-900 overflow-y-scroll scrollbar-hide">
      <div>
        <div className="   ">
          {userQuery.data ? (
            <div className="bg-zinc-700  mx-5   rounded-xl">
              <div className="flex flex-col  my-10">
                <div className="flex my-5">
                  <div
                    {...getRootProps()}
                    className="flex flex-row h-40 max-sm:w-28 max-sm:h-28 rounded-2xl m-4 shrink-0 hover:cursor-pointer"
                  >
                    <input {...getInputProps()} />

                    {!userQuery.data.picture ? (
                      <div className="flex flex-row max-sm:w-28 max-sm:h-28 rounded-2xl shrink-0 bg-slate-100 w-36 h-36 hover:cursor-pointer items-center justify-center">
                        <CgProfile size={80} color="gray" />
                      </div>
                    ) : (
                      <Image
                        style={{
                          borderRadius: "20px",
                        }}
                        src={userQuery.data.picture}
                        alt={""}
                        height={30}
                        width={160}
                      />
                    )}
                  </div>
                  <div className="flex flex-col my-4">
                    <div className="flex gap-2 items-center">
                      <h1 className=" text-bold">{userQuery.data?.name}</h1>
                    </div>

                    <div className="my-4">
                      <div className="flex ">
                        <FcGraduationCap size={25} color="gray" />
                        <p className="mx-2">{userQuery.data?.college}</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <CiLocationOn color="green" size={25} />
                        <p>Kolkata, West Bengal ,India</p>
                      </div>

                      <div className="flex ">
                        <p className="mx-2 my-2">{userQuery.data.bio}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mx-20 flex  gap-2 my-5 ">
                    <Link href="/edit-user">
                      <div className="flex items-center gap-2">
                        <p>Edit User</p>
                        <BiEdit />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            "please login"
          )}
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
