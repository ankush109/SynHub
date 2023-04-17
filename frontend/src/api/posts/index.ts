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

const updatePost = async (postId: any, data: any) => {
 try{
  console.log(postId);
  
   return  AuthAPI().put(`/post/update-post/${postId}`, data);
 }catch(e){
   return e;
 }
}
 const createComment = async (PostId: any, description: any) => {
  try{    
  console.log(PostId,description,'api');
  
     return  AuthAPI().post(`/user/comment`,{ 
        PostId,
        description
     });
   }catch(e){
     return e;
   }

 }
const likePost = async (postId: any) => {
  try{
    return  AuthAPI().post(`/post/like-post/${postId}`);
  }catch(e){
    return e;
  }
 }
 const disklikePost = async (postId: any) => {
  try{
    return  AuthAPI().post(`/post/dislike-post/${postId}`);
  }catch(e){
    return e;
  }
 }

 const getComments = async (postId: any) => {
  try{
    return  AuthAPI().get(`/post/get-comments/${postId}`);
  }catch(e){
    return e;
  }
 }
const getCommentsQuery=(id:any)=>
useQuery({
 queryKey: ["get-comments"],
    queryFn: () => getComments(id),
    select: (data: any) => {
      const resp = data.data
      return resp;
    },
})

export {
  createComment,updatePost,getCommentsQuery,getComments,likePost,disklikePost
}