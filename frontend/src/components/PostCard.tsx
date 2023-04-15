import React, { FC } from 'react'

const PostCard: FC<any> = ({ displayImages, user }) => {
  return user ? (
    <div className="flex my-8 bg-zinc-700 rounded-xl h-1/2 flex-col mx-20">
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          <div className="mx-10 my-4">
            {user.picture ? (
              <img className="w-20 h-20 rounded-3xl" src={user.picture} />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="mx-4">
          <h2>{user.name}</h2>
          <p className="text-yellow-400">1 hr ago</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className=" mx-4">{/* <h2>{post.description}</h2> */}</div>
        <div className="w-3/5 m-4 mx-10 flex flex-wrap">
          {displayImages.map((image: any, index: any) => (
            <div className="p-2">
              <img className="flex gap-3" src={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default PostCard