import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { SparklesCore } from "./ui/sparkles";

export default function HeroSection() {
  return (
    <div
      className=" h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative
      overflow-hidden mx-auto py-10 md:py-0 "
    >
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 z-60"
        fill="white"
      />

      <div className="relative z-10 p-4 w-full text-center">
        <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="mt-20 md:mt-0  text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Master the art of music.
          </h1>

          <div className="w-[40rem] h-40 relative mt-4 ">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              Feel the rhythm, find your sound. Dive into a world of curated
              music, tailored just for you. Discover trending hits and hidden
              gems. Your next favorite song awaits. Stream limitless music,
              immerse yourself in sound. Curate playlists, connect with fellow
              fans, and celebrate the power of melody.
            </p>
          </div>

          <div className="mt-4">
            <Link href={"/courses"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-stone-950 text-black dark:text-white border-neutral-200 dark:border-slate-888"
              >
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
