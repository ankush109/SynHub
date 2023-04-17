/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { MdDeleteForever, MdLocalHospital } from "react-icons/md";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import Lottie from "react-lottie-player";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DialogActions, TextField, TextareaAutosize } from "@mui/material";
import { FiUpload } from "react-icons/fi";
import { Dropzone } from "./Dropzone";
import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import postAnime from "../animations/post.json";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";
import { z } from "zod";
import { Input } from "@material-tailwind/react";
import { MdOutlineCancel } from "react-icons/md";
import classNames from "classnames";
import { createId } from "@paralleldrive/cuid2";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FcPlus } from "react-icons/fc";
import { GetPostQuery, createPost } from "@/api/user";
import { Router, useRouter } from "next/router";
import { updatePost } from "@/api/posts";
import { BiEdit } from "react-icons/bi";

// import { EditPost, GetClinicsQuery } from "../../api/clinic";
const EditPost: FC<any> = ({ data, picture, id, title }) => {
  console.log(data);
  console.log(picture);
  console.log(title);
  const PostId = id;
  const [files, setFiles] = useState<any[]>([]);
  const router = useRouter();
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const uploadedImages: React.MutableRefObject<any[]> = useRef([]);
  const uploadedImageFiles: React.MutableRefObject<any[]> = useRef([]);
  const logoImage: React.MutableRefObject<string> = useRef("");
  const [logoFiles, setLogoFiles] = useState<any[]>([]);
  const PostQuery = GetPostQuery();
  const onDrop: any = useCallback(
    (acceptedFiles: string[], fileRejections: any[]) => {
      if (acceptedFiles.length > 0) {
        setLogoFiles((files) => {
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
            toast.error("Only jpg/png files supported!", {
              id: "Invalid-File",
            });
          }
        });
      });
    },
    []
  );
  useEffect(() => {
    setValue(
      "displayImages",
      picture.map((pic: any) => pic.picture)
    );
    setValue("description", data);
    setValue("title", title);
  }, []);

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

  //   const getClinics = GetClinicsQuery();

  const {
    reset,
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    formState: { errors, isSubmitting, isValidating },
  } = useForm<any>({
    mode: "onChange",

    defaultValues: {
      description: data.description,
      displayImages: picture,
    },
  });

  const uploadFile = async () => {
    if (uploadedImages.current.length >= files.length) {
      uploadedImages.current = [];
    }

    const client = new S3Client({
      region: "ap-south-1",
      credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY!,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
      },
    });

    files.forEach(async (file) => {
      let keyName = createId() + "." + file.name.split(".")[1];
      if (!uploadedImageFiles.current.includes(files)) {
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
          uploadedImages.current.push(payload.picture);
          uploadedImageFiles.current.push(file);
          setUploadedFiles(uploadedImageFiles.current);
          // console.log("Asset s3 url:", url);
        } catch (error) {
          console.log("Error: ", error);
        }
      }
    });
  };

  useEffect(() => {
    uploadFile();
  }, [files]);

  const [type, setType] = useState<string>("");

  const onSubmit = async (formData: any) => {
    formData.displayImages = uploadedImages.current;
    try {
      if (formData.description.length < 10) {
        toast.error("Description should be atleast 10 characters long");
        return;
      } else {
        const data = await updatePost(PostId, formData);
        PostQuery.refetch();

        toast.success("edited successfully");
      }
    } catch (err: any) {
      toast.error("Unable to create post");
      if (err.response) {
        toast.error(err.response.data.message, { id: "server-conn-fail" });
      } else {
        toast.error("Unable to Connect to Server", { id: "server-conn-fail" });
      }
    }
  };

  const deleteFile = (file: any) => {
    setFiles((files) => {
      const newFiles = files.filter((f) => f.path !== file.path);
      return newFiles;
    });
  };

  return (
    <div className=" flex items-end justify-end">
      <div className=" flex items-end justify-end ">
        <Dialog.Root>
          <Dialog.Trigger className="">
            <div className="flex justify-end items-end   ">
              <BiEdit color="red" size={25} />
            </div>
          </Dialog.Trigger>
          <Dialog.Portal className="">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
            <Dialog.Content className="z-10 p-2 h-[610px] w-3/5 rounded-xl bg-gray-800 shadow-lg shadow-zinc-900 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <Dialog.Close className="absolute top-4 right-4">
                <MdOutlineCancel size={31} color="gray" />
              </Dialog.Close>
              <div className="w-full flex flex-row justify-items-end h-full ml-4">
                <div className="flex flex-col w-1/3 items-center h-full justify-between">
                  <div className="flex flex-col w-full items-center">
                    <div className="text-3xl my-5 font-bold text-white">
                      Edit post
                    </div>
                    <Lottie
                      animationData={postAnime}
                      play
                      className="w-76 h-84"
                    />
                  </div>
                  <div className="flex flex-row items-center mb-4">
                    <div className="text-md text-md text-white ">
                      Powered by:{" "}
                    </div>
                    <div className="flex flex-row ml-2 items-center hover:cursor-pointer">
                      <div className="text-xl font-bold text-yellow-500">
                        Syn
                      </div>
                      <div className="text-xl font-bold text-white">ergy</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-8 w-2/3">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col  my-2 ml-4">
                      <div>
                        <p>Post Title</p>
                      </div>
                      <div>
                        <TextField
                          {...register("title")}
                          value={data?.title}
                          className="w-4/5 p-3 bg-gray-600 rounded-lg text-white"
                        />
                      </div>
                      <div>
                        <p>Write something about the post</p>
                      </div>
                      <div className="w-full my-4">
                        <TextareaAutosize
                          value={data?.description}
                          className="w-4/5 p-3 min-h-[25%] bg-gray-600 rounded-lg text-white"
                          id="email"
                          {...register("description")}
                        />
                      </div>
                    </div>

                    <div className="flex ml-4 hover:cursor-pointer">
                      {files.length < 1 ? (
                        <>
                          <Dropzone
                            setFiles={setFiles}
                            title="Add upto four other clinic images"
                            className="w-[370px] h-[137px] rounded-2xl hover:cursor-pointer text-center focus:outline-none"
                          />
                        </>
                      ) : (
                        <></>
                      )}

                      {files.length > 0 ? (
                        <div className="flex ml-4 w-[370px] overflow-x-scroll scrollbar custom-scrollbar mb-4">
                          <div className="flex gap-x-1">
                            {files.map((file) => {
                              const isImageFile =
                                file.type.split("/")[0] === "image";
                              return (
                                <div
                                  key={file.path}
                                  className="flex flex-col items-center justify-center"
                                >
                                  <div
                                    className={classNames(
                                      [
                                        "flex relative w-24 h-24 rounded-lg font-medium",
                                      ],
                                      [
                                        isImageFile
                                          ? "text-black"
                                          : "text-white bg-gray-600",
                                      ]
                                    )}
                                  >
                                    {isImageFile && (
                                      <img
                                        src={URL.createObjectURL(file)}
                                        alt={file.name}
                                        className="absolute -z-10 w-36 h-24 opacity-40 rounded-lg"
                                      />
                                    )}
                                    <p className="justify-start p-4 truncate text-sm">
                                      {file.name}
                                    </p>
                                    <p className="absolute bottom-2 left-2 text-sm truncate">{`${(
                                      file.size /
                                      (1024 * 1024)
                                    ).toFixed(2)} MB`}</p>
                                    <button
                                      className="absolute bottom-2 right-2 shrink-0"
                                      onClick={() => {
                                        deleteFile(file);
                                      }}
                                    >
                                      <MdDeleteForever size={20} />
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="">
                      <div className="flex ">
                        <button
                          type="submit"
                          onClick={() => {
                            handleSubmit(onSubmit);
                          }}
                          // disabled={isSubmitting || isValidating}
                          className=" mx-10 pd-2 flex flex-row items-center justify-center mt-4 h-9 w-28 shadow-lg bg-zinc-600 rounded-md hover:cursor-pointer hover:bg-slate-500"
                        >
                          <div className="text-white font-bold text-md my-10">
                            Edit Post
                          </div>
                        </button>

                        <Dialog.Close className=" mx-36 pd-2 flex flex-row items-center justify-center mt-4 h-9 w-28 shadow-lg bg-zinc-600 rounded-md hover:cursor-pointer hover:bg-slate-500">
                          <p>cancel</p>
                        </Dialog.Close>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
};
export default EditPost;
