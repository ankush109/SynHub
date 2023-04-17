import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CourseCard from "@/components/CourseCard";

const RelatedProducts = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <>
        <div className="mx-8 my-4">
          <div className="text-2xl font-bold mb-5 ">Free Courses</div>
          <Carousel
            responsive={responsive}
            containerClass="-mx-[10px]"
            itemClass="px-[10px]"
          >
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </Carousel>
        </div>
      </>
      <>
        <div className="mx-8  my-4">
          <div className="text-2xl font-bold mb-5 ">Paid Courses</div>
          <Carousel
            responsive={responsive}
            containerClass="-mx-[10px]"
            itemClass="px-[10px]"
          >
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </Carousel>
        </div>
      </>
    </>
  );
};

export default RelatedProducts;
