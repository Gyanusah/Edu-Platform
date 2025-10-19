import React from "react";
import HeroSection from "../Screen/HeroSection";
import CourseCategories from "../Screen/CourseCategories";
import FeaturedCourses from "../Screen/FeaturedCourses";
import Features from "../Screen/Features";

import SuccessStories from "../Screen/SuccessStories";
import Stats from "../Screen/Stats";
import Notices from "../Screen/Notices";


export default function () {
  return (
    <>
      <HeroSection />
      <CourseCategories />
      <FeaturedCourses/>
      <Features/>
      <Stats />
      <SuccessStories />
      <Notices />
      
    </>
  );
}
