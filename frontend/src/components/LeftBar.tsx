
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
        picture: `https://database-1.cc7x4z0oc4dj.ap-south-1.rds.amazonaws.com/${keyName}`,
      };

      try {
        await client.send(command);
        await updateProfilePicture(payload);
        profileImage.current = payload.picture;
        setFiles([]);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
}
useEffect(() => {
  uploadImage();
}, [files])

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

  console.log(userQuery.data);
  return (
    <div className="bg-zinc-900 w-[32%]">
    {
      userQuery.data ? (  <div className="bg-zinc-700  mx-5   rounded-xl">
        <div className="flex flex-col items-center my-10">
          <div className="flex my-5">
            <div className="p-2 my-5 ">
              <p className="text-white text-center">2000</p>
              <h2>Followers</h2>
            </div>
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
                src={
                  profileImage.current === ""
                    ? userQuery.data.picture
                    : profileImage.current
                }
                alt={""}
                height={30}
                width={160}
              />
            )}
          </div>
            <div className="p-2 my-5">
              <p className="text-white text-center">2000</p>
              <h2>Followers</h2>
            </div>
          </div>
          <div className="">
            <p className="text-white text-center ">{userQuery.data.user.name}</p>
            <h2 className="my-5">Love Code and Anime</h2>
          </div>
          <div className="w-full mx-5 p-2">
            <Link href="/p">
            <button className="bg-zinc-800 text-white rounded-xl p-2 w-full">
             My Profile
            </button></Link>
          </div>
        </div>
      </div>) : "please login"
    }
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
