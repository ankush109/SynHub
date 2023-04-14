import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const AuthAPI = () => {
  if (typeof window !== "undefined") {
    return axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/`,
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
  } else {
    return axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/`,
      headers: {
        authorization: `Bearer }`,
        "Content-Type": "application/json",
      },
    });
  }
};

const getUser = () => {
  try {
    return AuthAPI().get("/user/get-user");
  } catch (e) {
    return e;
  }
};
const updateProfilePicture = (data: { picture: string }) => {
  try {
    return AuthAPI().put("/user/update-picture", data);
  } catch (e) {
    return e;
  }
};

const GetUserQuery = () =>
  useQuery({
    queryKey: ["get-user"],
    queryFn: () => getUser(),
    select: (data: any) => {
      const resp = data.data.message;
      return resp;
    },
  });
export { GetUserQuery, updateProfilePicture };
