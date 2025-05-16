"use client";

import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

import { c1, c2, c3, c4, c5, c6 } from "../image/coursesImage/index";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const imageData = [c1, c2, c3, c4, c5, c6];

export default function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-zinc-950 p-10 ">
      <div>
        <div className="text-center">
          <h2 className="text-base  text-cyan-300 underline underline-offset-8 hover:scale-105 duration-300 font-semibold tracking-wide  uppercase ">
            Featured Course
          </h2>
          <p className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm-text-4xl">
            Learn with the Best
          </p>
        </div>
      </div>

      <div className="mt-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center p-10">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <Image
                  src={`${course.image}`}
                  alt="courseImage"
                  height="100"
                  width="300"
                  className="object-contain object-center rounded-b-2xl rounded-t-3xl  mx-auto pt-6 "
                />
                <div className="p-4 sm:p-4 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-2 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-4">
                    {course.description}
                  </p>

                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20  text-center">
        <Link
          href={"/courses"}
          className="px-8 py-4 rounded-full   border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}
