import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { loginUser } from "../../api";

import loginSchema from "../../schemas/loginSchema";
import { googleProfile } from "../../types/googleProfile";
import { loginSchemaType } from "../../types/login";
import SEO from "@/components/SEO";


export function getServerSideProps(ctx: any) {
  const googleUser = ctx.req.cookies.googleUser ? JSON.parse(ctx.req.cookies.googleUser) : null;
  return { props: { googleUser } };
}

const Login = ({ googleUser }: { googleUser: googleProfile | null }) => {
  return (
    <div className="w-full flex min-h-screen select-none bg-[url('/images/bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <SEO title="Login" />
      <LeftHalf />
      <RightHalf googleUser={googleUser} />
    </div>
  );
};

export default Login;

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
  const router = useRouter();

  const {
    reset,
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isSubmitting, isValidating },
  } = useForm<loginSchemaType>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email:  "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<loginSchemaType> = async (formData) => {
    console.table(formData);
    try {
      const response = await loginUser(formData);

      const { data } = response;
      if (response.status === 200) {
        localStorage.setItem("token", data.message.accessToken);
        toast.success("Login Successful", { id: data.message });
        router.replace("/home");
      } else if (response.status !== 200) {
        toast.success(data.message, { id: data.message });
      }

      reset();
      // As reset will fallback to defaultValues
      // so they have to be cleared explicitly
      setValue("email", "");
      setShowPassword(false);
    } catch (err: any) {
      if (err.response) {
        const errorMessage = err.response.data.message;
        if (Array.isArray(errorMessage)) {
          errorMessage.forEach((error: { message: string; path: any }) => {
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
    reset();
    // As reset will fallback to defaultValues
    // so they have to be cleared explicitly
    setValue("email", "");
    setShowPassword(false);
  };

  return (
    <div className="w-full px-10 md:px-5 md:w-1/2  flex flex-col items-center justify-center gap-y-2.5 my-12">
  
    
      <div className="relative mb-4 mt-2 w-full max-w-md">
       
    
      </div>
      <div className="w-full max-w-md">
        <form className="bg-black px-10 py-10 " onSubmit={handleSubmit(onSubmit)}>
            <div className="text-3xl font-bold text-center">Log In to your account</div>
      <div className="text-gray-500 text-center my-4">Enter the fields below to get started</div>

          <div className="mb-3">
            <label className="block mb-2" htmlFor="email">
              Email address / Username
            </label>
            <input
              className={classNames(
                ["rounded w-full py-2 px-3 text-gray-700"],
                [errors.email ? "border-2 border-red-500 focus:outline-red-600" : "border border-gray-300 focus:outline-blue-600"]
              )}
              id="email"
              type="text"
              placeholder="Enter your email address / username"
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
                placeholder="Enter your password"
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
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg focus:outline-none text-lg disabled:opacity-80 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSubmitting || isValidating}
          >
            Log In
          </button>
          <div className="text-center p-4 flex gap-x-3 items-center justify-center">
            <Link href="/forgot-password">
              <span className="font-semibold text-blue-600">Forgot your password?</span>
            </Link>
          </div>
          <div className="text-center flex gap-x-3 items-center justify-center">
            <span className="text-gray-500 font-medium">{"Don't have an account?"}</span>
            <Link href="/signup">
              <span className="font-semibold text-blue-600 hover:cursor-pointer">Create Account</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
