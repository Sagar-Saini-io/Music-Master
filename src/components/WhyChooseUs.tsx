"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import c4 from "../image/c4.jpg";
import c5 from "../image/c5.jpg";
import c6 from "../image/c6.jpg";
import c7 from "../image/c7.jpg";
import c8 from "../image/c8.jpg";
import c9 from "../image/c9.jpg";

const musicSchoolContent = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",

    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={c4}
          width={300}
          height={300}
          className="h-full w-full object-cover object-bottom"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={c5}
          width={300}
          height={300}
          className="h-full w-full object-cover object-bottom"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={c6}
          width={300}
          height={300}
          className="h-full w-full object-cover object-bottom"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={c7}
          width={300}
          height={300}
          className="h-full w-full object-cover object-center"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={c8}
          width={300}
          height={300}
          className="h-full w-full object-cover object-center"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={c9}
          width={300}
          height={300}
          className="h-full w-full object-cover object-center"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}
