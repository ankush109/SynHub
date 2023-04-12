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
  const googleUser = ctx.req.cookies.googleUser ? JSON.parse(ctx.req.cookies.googleUser) : null;
  return { props: { googleUser } };
}

const SignUp = ({ googleUser }: { googleUser: googleProfile | null }) => {
  return (
    <div className="w-full flex min-h-screen select-none bg-[url('/images/bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <SEO title="Signup" />
      <LeftHalf />
      <RightHalf googleUser={googleUser} />
    </div>
  );
};

export default SignUp;

const LeftHalf = () => {
  return (
    <div className="w-1/2  md:flex">
      <div className=" m-6 rounded-lg " >
      <img className="h-1/2 my-48" src="https://pensil-social.s3.ap-south-1.amazonaws.com/storage/community-logos/105434de-cc1e-4e29-8242-6a94238ca514.webp" />
      </div>
    </div>
  );
};

const RightHalf = ({ googleUser }: { googleUser: googleProfile | null }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState<boolean>(false);
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
      name:"",
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
      console.log("Submitting",formData);
      
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
          errorMessage.forEach((error: { message: string; path: [keyof registerSchemaType] }) => {
            setError(error.path[0], {
              message: error.message,
            });
          });
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
    <div className="w-full px-10 md:px-5 md:w-1/2 flex flex-col items-center justify-center gap-y-2.5 my-12">
      <div className="w-full max-w-md">
        <form className="bg-black px-10 py-10" onSubmit={handleSubmit(onSubmit)}>
              <div className="text-3xl font-bold text-center">Log In to your account</div>
      <div className="text-gray-500 text-center my-4">Enter the fields below to get started</div>

          <div className="mb-3">
            <label className="block mb-2" htmlFor="fullname">
              Full name
            </label>
            <input
              className={classNames(["rounded w-full py-2 px-3 text-gray-700"], [errors.name ? "border-2 border-red-500 focus:outline-red-600" : "border border-gray-300 focus:outline-blue-600"])}
              id="fullname"
              type="text"
              placeholder="Enter your name"
              {...register("name")}
            />
            {errors.name && <p className="text-red-500 text-sm italic">{errors.name.message}</p>}
          </div>
          <div className="mb-3">
            <label className="block mb-2" htmlFor="username">
              Username
            </label>
            <input
              className={classNames(
                ["rounded w-full py-2 px-3 text-gray-700"],
                [errors.username ? "border-2 border-red-500 focus:outline-red-600" : "border border-gray-300 focus:outline-blue-600"],
                [isUsernameAvailable && !errors.username && "!border-2 border-green-600 focus:!outline-green-600"]
              )}
              id="username"
              type="text"
              placeholder="Choose your username"
              {...register("username")}
              // onChange={checkUsernameExistsHandler}
            />
            {errors.username && <p className="text-red-500 text-sm italic">{errors.username.message}</p>}
            {isUsernameAvailable && !errors.username && <p className="text-green-700 text-sm italic">Username available!</p>}
          </div>
          <div className="mb-3">
            <label className="block mb-2" htmlFor="email">
              Email address
            </label>
            <input
              className={classNames(["rounded w-full py-2 px-3 text-gray-700"], [errors.email ? "border-2 border-red-500 focus:outline-red-600" : "border border-gray-300 focus:outline-blue-600"])}
              id="email"
              type="text"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && <p className="text-red-500 text-sm italic">{errors.email.message}</p>}
          </div>
          <div className="mb-3">
            <label className="block mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className={classNames(
                  ["rounded w-full py-2 px-3 text-gray-700 pr-10"],
                  [errors.password ? "border-2 border-red-500 focus:outline-red-600" : "border border-gray-300 focus:outline-blue-600"]
                )}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                {...register("password")}
              />
              <div
                className="absolute top-1/2 right-1 translate-x-[-50%] translate-y-[-50%] hover:cursor-pointer"
                onClick={() => {
                  setShowPassword((showPassword) => !showPassword);
                }}
              >
                {showPassword ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
              </div>
            </div>
            {errors.password && <p className="text-red-500 text-sm italic">{errors.password.message}</p>}
          </div>
          <div className="mb-3">
            <label className="block mb-2" htmlFor="confirmpassword">
              Confirm password
            </label>
            <div className="relative">
              <input
                className={classNames(
                  ["rounded w-full py-2 px-3 text-gray-700 pr-10"],
                  [errors.confirmPassword ? "border-2 border-red-500 focus:outline-red-600" : "border border-gray-300 focus:outline-blue-600"]
                )}
                id="confirmpassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter your password again"
                {...register("confirmPassword")}
              />
              <div
                className="absolute top-1/2 right-1 translate-x-[-50%] translate-y-[-50%] hover:cursor-pointer"
                onClick={() => {
                  setShowConfirmPassword((showConfirmPassword) => !showConfirmPassword);
                }}
              >
                {showConfirmPassword ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
              </div>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm italic">{errors.confirmPassword.message}</p>}
          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg focus:outline-none text-lg disabled:opacity-80 disabled:cursor-not-allowed"
            type="submit"
          
          >
            Create account
          </button>
          <div className="text-center pt-6 flex gap-x-3 items-center justify-center">
            <span className="text-gray-500 font-medium">Already have an account?</span>
            <Link href="/login">
              <span className="font-semibold text-blue-600 hover:cursor-pointer">Log in</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
