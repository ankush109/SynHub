import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

// import useUser from "@/hooks/useUser";

// import PostFeed from "@/components/posts/PostFeed";
import Header from "@/components/Header";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";



const UserView = () => {
  const router = useRouter();
  // const { userId } = router.query;

  // const { data: fetchedUser, isLoading } = useUser(userId as string);

  // if (isLoading || !fetchedUser) {
  //   return (
  //     <div className="flex justify-center items-center h-full">
  //       <ClipLoader color="lightblue" size={80} />
  //     </div>
  //   )
  // }

  return (
    <>
     <Header label="Header" />
    {/* <div className="flex justify-items center h-full"> */}
     
      <UserHero userId="userId" />
      <UserBio userId="userId"/>
      {/* <PostFeed userId={userId as string} /> */}
      <span>Posts</span>
      <span>Posts</span>
      <span>Posts</span>
      {/* </div> */}
    </>
   );
}
 
export default UserView;


// import React from "react";
// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";

// const UserProfile = () => {
//   return (
//     <div className="bg-gray-100">
//       <Head>
//         <title>Quora - User Profile</title>
//         <meta name="description" content="Quora User Profile" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className="container mx-auto py-8">
//         <div className="flex flex-col md:flex-row md:items-center">
//           <div className="md:w-1/4">
//             <div className="bg-white shadow-md rounded-md overflow-hidden">
//               <div className="relative h-48 w-full">
//                 <Image
//                   src="/images/bg.jpg"
//                   alt="User Profile Picture"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h1 className="text-xl font-medium">John Doe</h1>
//                 <p className="text-gray-600">@johndoe</p>
//                 <div className="flex items-center space-x-2 mt-4">
//                   <span className="bg-blue-500 text-white font-bold py-1 px-2 rounded-full">
//                     Follow
//                   </span>
//                   <span className="bg-gray-300 text-gray-600 font-bold py-1 px-2 rounded-full">
//                     Message
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-3/4 md:pl-8 mt-8 md:mt-0">
//             <div className="bg-white shadow-md rounded-md overflow-hidden">
//               <div className="p-4">
//                 <h2 className="text-lg font-medium">About Me</h2>
//                 <p className="text-gray-600 mt-2">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Vivamus commodo justo metus, id congue tellus suscipit sed.
//                   Phasellus in felis ac libero pellentesque malesuada. Praesent
//                   consectetur, enim eu bibendum commodo, lorem odio iaculis
//                   eros, sit amet semper enim sapien non est. Donec tincidunt
//                   ipsum eu lobortis posuere. Aenean ut pulvinar ipsum. Sed
//                   vehicula, augue eget rutrum consectetur, ipsum magna tempus
//                   odio, in rhoncus quam ipsum sed nibh. Fusce id dolor vitae
//                   enim commodo rutrum sit amet at odio. Proin sem orci, varius
//                   eget ultrices ac, ornare sit amet neque. Donec non euismod
//                   mi. Fusce pharetra quam eget lacus laoreet auctor.
//                 </p>
//                 <h2 className="text-lg font-medium mt-4">Interests</h2>
//                 <div className="flex flex-wrap mt-2">
//                   <span className="bg-gray-200 text-gray-600 font-medium py-1 px-2 rounded-full mr-2 mb-2">
//                     Travel
//                   </span>
//                   <span className="bg-gray-200 text-gray-600 font-medium py-1 px-2 rounded-full mr-2 mb-2">
//                     Photography
//                   </span>
//                   <span className="bg-gray-200 text-gray-600 font-medium py-1 px-2 rounded-full mr-2 mb-2">
//                     Food
//                   </span>
//                   <span className="bg-gray-200 text-gray-600 font-medium py-1 px-2 rounded-full mr-2 mb-2">
//                     Music
//                   </span>
//                   <span className="bg-gray-200 text-gray-600 font-medium py-1 px-2 rounded-full mr-2 mb-2">
//                     Movies
//                   </span>
//                   <span className="bg-gray-200 text-gray-600 font-medium py-1 px-2 rounded-full mr-2 mb-2">
//                     Sports
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default UserProfile;