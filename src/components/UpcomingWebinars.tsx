"use client";

import Link from "next/link";

import { HoverEffect } from "./ui/card-hover-effect";

export default function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
      link: "l1",
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
      link: "l2",
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      slug: "mastering-your-instrument",
      isFeatured: true,
      link: "l3",
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
      link: "l4",
    },
    // Added two more webinars
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
      link: "l5",
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      slug: "digital-music-marketing",
      isFeatured: true,
      link: "l6",
    },
  ];

  return (
    <div className="p-12 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4  sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase hover:scale-105 underline underline-offset-8 duration-200">
            FEATURED WEBINARS
          </h2>
          <p className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl hover:scale-105">
            Enhance Your Musical Journey
          </p>

          <div className="mt-10">
            <HoverEffect
              items={featuredWebinars.map((webinar) => ({
                title: webinar.title,
                description: webinar.description,
                link: `/${webinar.link}`,
              }))}
            />
          </div>

          <Link
            href={"/courses"}
            className="px-6 py-3 rounded-full  border border-neutral-600 text-neutral-800 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}
