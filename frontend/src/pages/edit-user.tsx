import React, { use, useEffect, useState } from "react";

import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { any, z } from "zod";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

import classNames from "classnames";

import Calendar from "react-calendar";
import { GetUserQuery, EditUser } from "@/api/user";
import AppBar from "@/components/AppBar";
import LeftBar from "@/components/LeftBar";
import Rightbar from "@/components/RightUpbar";
import RightUpbar from "@/components/RightUpbar";
import RightDownbar from "@/components/RightDownbar";
// const editUserSchema = z
//   .object({
//     name: nameSchema,
//     username: usernameSchema,
//     bio: z.string(),
//     phone: z.string(),
//     dob: z.string(),
//   })
//   .strict();
// export type editUserSchemaType = z.infer<typeof editUserSchema>;
function Edit() {
  const userQuery = GetUserQuery();
  useEffect(() => {
    const user = userQuery.data;
    setValue("name", user?.name as string);
    setValue("username", user?.username as string);
    setValue("college", user?.college as string);
    setValue("year", user?.year as string);
    setValue("department", user?.department as string);
    // setValue("linkedin profile", user?.linkedinprofile as string);

    setValue("bio", user?.bio as string);
    setValue("phone", user?.phoneNumber as string);
    setValue("dob", user?.dob?.toString().split("T")[0] as string);
    console.log(user, "user");
  }, [userQuery.isSuccess]);
  const [isUsernameAvailable, setIsUsernameAvailable] =
    useState<boolean>(false);
  console.log(userQuery.data);
  const router = useRouter();

  //   const checkUsernameExistsHandler = async (
  //     e: React.ChangeEvent<HTMLInputElement>
  //   ): Promise<void> => {
  //     try {
  //       await checkUsernameExists({ username: e.target.value });
  //       clearErrors("username");
  //       setIsUsernameAvailable(true);
  //     } catch (err: any) {
  //       if (err.response) {
  //         setIsUsernameAvailable(false);
  //         const errorMessage = err.response.data.message[0] as {
  //           message: string;
  //           path: any;
  //         };
  //         setError(errorMessage.path[0], {
  //           message: errorMessage.message,
  //         });
  //       } else {
  //         toast.error("Unable to Connect to Server", { id: "server-conn-fail" });
  //       }
  //     }
  //   };

  const {
    reset,
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<any>({
    mode: "onChange",
    defaultValues: {
      name: userQuery.data?.name,
      bio: userQuery.data?.bio,
      dob: userQuery.data?.dob,
      phoneNumber: userQuery.data?.phoneNumber,
      username: userQuery.data?.username,
      college: userQuery.data?.college,
      year: userQuery.data?.year,
      department: userQuery.data?.department,
    },
  });
  const onSubmit: SubmitHandler<z.infer<any>> = async (formdata: any) => {
    formdata.dob = new Date(formdata.dob);
    console.log(formdata, "formdata");

    try {
      await EditUser(formdata);
      toast.success("Profile Updated Successfully", { id: "profile-updated" });
      router.push("/profile");
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>
        <AppBar />
        <div className="flex flex-row h-[90.7vh]">
          <LeftBar />
          <div className="bg-zinc-900  mx-4 px-8 w-full overflow-y-scroll scrollbar-hide">
            <div className="bg-gray-800 py-5 px-8 my-10 mx-4 rounded-lg flex-col justify-center">
              <div className="flex flex-row justify-center">
                <h2 className="text-3xl text-yellow-300 font-bold ">
                  Edit your Profile
                </h2>
              </div>
              <div className="mt-8 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 gap-6 ">
                    <label className="block">
                      <span className="text-white font-semibold">
                        Full name
                      </span>
                      <input
                        id="name"
                        className={classNames(
                          ["rounded w-full py-2 px-3 text-gray-700"],
                          [
                            errors.name
                              ? "border-2 border-red-500 focus:outline-red-600"
                              : "border border-gray-300 focus:outline-blue-600",
                          ]
                        )}
                        type="text"
                        {...register("name")}
                        placeholder="Enter your name"
                      />
                    </label>
                    <label className="block">
                      <span className="text-white font-semibold">
                        Your Username
                      </span>
                      <input
                        className={classNames(
                          ["rounded w-full py-2 px-3 text-gray-700"],
                          [
                            errors.username
                              ? "border-2 border-red-500 focus:outline-red-600"
                              : "border border-gray-300 focus:outline-blue-600",
                          ],
                          [
                            isUsernameAvailable &&
                              !errors.username &&
                              "!border-2 border-green-600 focus:!outline-green-600",
                          ]
                        )}
                        id="username"
                        type="text"
                        placeholder="Choose your username"
                        {...register("username")}
                      />
                      {errors.username && (
                        <p className="text-red-500 text-sm italic">
                          {errors.username.message}
                        </p>
                      )}
                      {isUsernameAvailable && !errors.username && (
                        <p className="text-green-700 text-sm italic">
                          Username available!
                        </p>
                      )}
                    </label>

                    <label className="block">
                      <span className="text-white font-semibold">
                        Your Date Of Birth
                      </span>
                      <input
                        {...register("dob")}
                        type="date"
                        className={classNames(
                          ["rounded w-full py-2 px-3 text-gray-700"],
                          ["border border-gray-300 focus:outline-blue-600"]
                        )}
                        placeholder="Enter your DOB"
                      />
                    </label>

                    <label className="block">
                      <span className="text-white font-semibold">Your Bio</span>
                      <span className="text-white ">(Max 100 words)</span>
                      <textarea
                        className={classNames(
                          ["rounded w-full py-2 px-3 text-gray-700"],
                          [
                            errors.bio
                              ? "border-2 border-red-500 focus:outline-red-600"
                              : "border border-gray-300 focus:outline-blue-600",
                          ]
                        )}
                        maxLength={300}
                        {...register("bio")}
                        placeholder="Enter your bio "
                      ></textarea>
                    </label>

                    <label className="block">
                      <span className="text-white font-semibold">
                        Phone number
                      </span>

                      <input
                        type="text"
                        {...register("phoneNumber")}
                        className={classNames(
                          ["rounded w-full py-2 px-3 text-gray-700"],
                          [
                            errors.phone
                              ? "border-2 border-red-500 focus:outline-red-600"
                              : "border border-gray-300 focus:outline-blue-600",
                          ]
                        )}
                        placeholder="Enter your phone number"
                      />
                    </label>
                    <label className="block">
                      <span className="text-white font-semibold">
                        College Name
                      </span>

                      <input
                        type="text"
                        {...register("college")}
                        className={classNames(
                          ["rounded w-full py-2 px-3 text-gray-700"],
                          [
                            errors.phone
                              ? "border-2 border-red-500 focus:outline-red-600"
                              : "border border-gray-300 focus:outline-blue-600",
                          ]
                        )}
                        placeholder="Enter your college name"
                      />
                    </label>
                    <label className="block">
                      <span className="text-white font-semibold">
                        Year of College
                      </span>

                      <input
                        type="text"
                        {...register("year")}
                        className={classNames(
                          ["rounded w-full py-2 px-3 text-gray-700"],
                          [
                            errors.phone
                              ? "border-2 border-red-500 focus:outline-red-600"
                              : "border border-gray-300 focus:outline-blue-600",
                          ]
                        )}
                        placeholder="Enter your college year"
                      />
                    </label>
                    <label className="block">
                      <span className="text-white font-semibold">
                        Department
                      </span>

                      <input
                        type="text"
                        {...register("department")}
                        className={classNames(
                          ["rounded w-full py-2 px-3 text-gray-700"],
                          [
                            errors.phone
                              ? "border-2 border-red-500 focus:outline-red-600"
                              : "border border-gray-300 focus:outline-blue-600",
                          ]
                        )}
                        placeholder="Enter your branch"
                      />
                    </label>
                    <label className="block">
                      <span className="text-white font-semibold">
                        Your Linkedin Profile
                      </span>

                      <input
                        type="text"
                        // {...register("linkedinprofile")}
                        className={classNames(
                          ["rounded w-full py-2 px-3 text-gray-700"],
                          [
                            errors.phone
                              ? "border-2 border-red-500 focus:outline-red-600"
                              : "border border-gray-300 focus:outline-blue-600",
                          ]
                        )}
                        placeholder="Enter your Linkedin profile link"
                      />
                    </label>
                    <div>
                      <div className="flex flex-row justify-center">
                        <button
                          type="submit"
                          onClick={() => {
                            handleSubmit(onSubmit);
                          }}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="grid justify-items-center w-[60%] mx-2 ">
            <RightUpbar />

            <RightDownbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
