import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { checkUsernameExists, registerUser } from "../../api";

import SEO from "../../components/SEO";
import registerSchema from "../../schemas/registerSchema";
import { googleProfile } from "../../types/googleProfile";
import { registerSchemaType } from "../../types/signup";

import { useRouter } from "next/router";

export function getServerSideProps(ctx: any) {
  const googleUser = ctx.req.cookies.googleUser
    ? JSON.parse(ctx.req.cookies.googleUser)
    : null;
  return { props: { googleUser } };
}

const Signup = ({ googleUser }: { googleUser: googleProfile | null }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [isUsernameAvailable, setIsUsernameAvailable] =
    useState<boolean>(false);
  const router = useRouter();

  const {
    reset,
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    formState: { errors, isSubmitting, isValidating },
  } = useForm<registerSchemaType>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      username: "",
      email: googleUser?.email || "",
      password: "",
      confirmPassword: "",
      picture: googleUser?.picture || null,
    },
  });

  const onSubmit: SubmitHandler<registerSchemaType> = async (formData) => {
    console.table(formData);
    try {
      console.log("Submitting", formData);

      const { data } = await registerUser(formData);
      toast.success(data.message, { id: data.message });
      setIsUsernameAvailable(false);
      reset();
      // As reset will fallback to defaultValues
      // so they have to be cleared explicitly
      setValue("name", "");
      setValue("email", "");
      setValue("picture", null);
      setShowPassword(false);
      setShowConfirmPassword(false);
      router.replace("/login");
    } catch (err: any) {
      if (err.response) {
        const errorMessage = err.response.data.message;
        if (Array.isArray(errorMessage)) {
          errorMessage.forEach(
            (error: { message: string; path: [keyof registerSchemaType] }) => {
              setError(error.path[0], {
                message: error.message,
              });
            }
          );
        } else {
          toast.error(errorMessage, { id: errorMessage });
        }
      } else {
        toast.error("Unable to Connect to Server", { id: "server-conn-fail" });
      }
    }
  };

  // const checkUsernameExistsHandler = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
  //   try {
  //     await checkUsernameExists({ username: e.target.value });
  //     clearErrors("username");
  //     setIsUsernameAvailable(true);
  //   } catch (err: any) {
  //     if (err.response) {
  //       setIsUsernameAvailable(false);
  //       const errorMessage = err.response.data.message[0] as { message: string; path: [keyof registerSchemaType] };
  //       setError(errorMessage.path[0], {
  //         message: errorMessage.message,
  //       });
  //     } else {
  //       toast.error("Unable to Connect to Server", { id: "server-conn-fail" });
  //     }
  //   }
  // };

  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center">
      {/* login container */}
      <div className="bg-gray-900 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            // src="https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
            // src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          />
        </div>
        {/* form */}
        <div className="sticky top-0 md:w-1/2 px-8 md:px-8">
          <h2 className=" font-extrabold text-3xl text-yellow-400">Synergy</h2>
          <p className="text-s font-semibold mt-1 text-blue-500">
            New User? SignUp
          </p>
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* "p-2 mt-3 rounded-2xl border" */}
            <input
              className={classNames(
                ["p-2 mt-3 rounded-2xl border"],
                [
                  errors.name
                    ? "border-2 border-red-500 focus:outline-red-600"
                    : "border border-gray-300 focus:outline-blue-600",
                ]
              )}
              id="fullname"
              type="text"
              placeholder="Enter your name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm italic">
                {errors.name.message}
              </p>
            )}
            {/* "p-2 mt-3 rounded-2xl border" */}
            <input
              className={classNames(
                ["p-2 mt-3 rounded-2xl border"],
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
              // onChange={checkUsernameExistsHandler}
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
            {/* p-2 mt-3 rounded-2xl border */}
            <input
              className={classNames(
                ["p-2 mt-3 rounded-2xl border "],
                [
                  errors.email
                    ? "border-2 border-red-500 focus:outline-red-600"
                    : "border border-gray-300 focus:outline-blue-600",
                ]
              )}
              id="email"
              type="text"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm italic">
                {errors.email.message}
              </p>
            )}
            <div className="relative">
              {/* p-2 mt-3 rounded-2xl border w-full */}
              <input
                className={classNames(
                  [" p-2 mt-3 rounded-2xl border w-full"],
                  [
                    errors.password
                      ? "border-2 border-red-500 focus:outline-red-600"
                      : "border border-gray-300 focus:outline-blue-600",
                  ]
                )}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                {...register("password")}
              />
              <div
                className="absolute top-8 right-1 translate-x-[-50%] translate-y-[-50%] hover:cursor-pointer"
                onClick={() => {
                  setShowPassword((showPassword) => !showPassword);
                }}
              >
                {showPassword ? (
                  <AiFillEye size={20} />
                ) : (
                  <AiFillEyeInvisible size={20} />
                )}
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm italic">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="relative">
              {/* "p-2 mt-3 rounded-2xl border w-full" */}
              <input
                className={classNames(
                  ["p-2 mt-3 rounded-2xl border w-full"],
                  [
                    errors.confirmPassword
                      ? "border-2 border-red-500 focus:outline-red-600"
                      : "border border-gray-300 focus:outline-blue-600",
                  ]
                )}
                id="confirmpassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter your password again"
                {...register("confirmPassword")}
              />
              <div
                className="absolute top-8 right-1 translate-x-[-50%] translate-y-[-50%] hover:cursor-pointer"
                onClick={() => {
                  setShowConfirmPassword(
                    (showConfirmPassword) => !showConfirmPassword
                  );
                }}
              >
                {showConfirmPassword ? (
                  <AiFillEye size={20} />
                ) : (
                  <AiFillEyeInvisible size={20} />
                )}
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm italic">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            {/* focus:outline-none text-lg disabled:opacity-80
            disabled:cursor-not-allowed" */}
            <button
              className="bg-blue-500 mt-3 rounded-2xl text-white font-semibold py-2 hover:bg-blue-800 hover:scale-105 duration-300 "
              type="submit"
            >
              SignUp
            </button>
          </form>
          <div className="mt-3 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Login with Google
          </button>
          {/* <div className="mt-5 text-xs border-b py-4  text-blue-300">
            <a href="#">Forgot your password?</a>
          </div> */}
          <div className="mt-3 text-s font-semibold flex justify-between items-center  text-blue-300">
            <p>Already have an account?</p>
            <Link href="/login">
              <button className="py-2 px-5 bg-white text-blue-800  rounded-xl hover:bg-blue-500 hover:text-white hover:scale-110 duration-300">
                Login
              </button>
            </Link>
          </div>
        </div>
        {/* image */}
      </div>
    </section>
  );
};
export default Signup;
