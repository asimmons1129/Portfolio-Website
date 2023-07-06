"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="bg-gray-100 dark:bg-black rounded-2xl flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:ml-10 md:mt-2 md:w-1/2">
          <Image
            src="/pic-headshot.png"
            alt=""
            width={300}
            height={300}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl text-purple-600">Hi, I&#39;m Andre!</h1>
          <p className="text-lg text-neutral-600 mt-4 mb-6 md:text-2xl dark:text-neutral-400  ml-10 mr-10 md:mr-10 md:ml-0">
            I&#39;m a{" "}
            <span className="font-semibold text-purple-600">
              Technology Analyst{" "}
            </span>
            based in Dallas, TX. I love creating software solutions that are creative and have an impact on the world.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-purple-400 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
