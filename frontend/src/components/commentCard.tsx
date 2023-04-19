import React, { useEffect } from "react";
const CommentCard: React.FC<any> = ({ comment, user }) => {
  return (
    <div className="bg-zinc-500  rounded-xl p-2 ">
      <div className="flex flex-col ">
        <div className="flex gap-4 ">
          <img src={user.picture} className="w-10 h-10 rounded-full" />

          <p className="text-lg text-bold">{user.name}</p>
        </div>
        <p className="mx-14">{comment.description}</p>
      </div>
    </div>
  );
};

export default CommentCard;
