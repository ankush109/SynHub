import Image from "next/image";
import Link from "next/link";
import React from "react";
const CourseCard = () => {
  return (
    <Link
      href={`#`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image width={400} height={200} src="/images/bg.jpg" alt="Course 1" />
      <div className="p-4 text-white/[0.9]">
        <h2 className="text-lg font-medium">Course 1</h2>
        <div className="flex items-center text-white/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377;1500</p>

          <>
            <p className="text-base  font-medium line-through">&#8377;3000</p>
            <p className="ml-auto text-base font-medium text-green-500">
              20% off
            </p>
          </>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
