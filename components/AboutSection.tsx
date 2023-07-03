import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Java" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
  { skill: "C#" },
  { skill: "C++" },
  { skill: "SQL" },
  { skill: "Machine Learning" },
  { skill: "API Testing" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="bg-gray-100 dark:bg-black rounded-2xl my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl text-purple-600">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="ml-10 flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left text-purple-800">
              My Background
            </h1>
            <p className="dark:text-neutral-400">
              Hey there! My name is Andre and I am a Technology Analyst
              based in Dallas, TX.
            </p>
            <br />
            <p className="dark:text-neutral-400">
              I decided to transition into a career in tech in 2020 when I decided 
              to go back to school.  I switched my major to Computer Science and 
              earned my Associate's degree in 2021.  I furthered my education 
              at Western Governor's University, completing my Bachelor's degree 
              in 2023.
            </p>
            <br />
            <p className="dark:text-neutral-400">
              Apart from my worklife, I'm an avid NBA and NFL fan (Go Lakers/Jets!).
              I also love to watch movies, play basketball, cook delicious meals, and 
              travel.
            </p>
            <br />
            <p className="dark:text-neutral-400">
              I&#39;ve always been a believer in the quote: <br />{" "}
              <span className="font-bold text-purple-500">
                Whatever makes you uncomfortable is your biggest opportunity for growth <br />
              </span>{" "}
              Learning new things can be intimidating.  Everything won't click immediately.
              However, I&#39;ve learned to view these challenges as learning experiences. I&#39;m 
              extremely passionate about technology and I look forward to continually expanding 
              my knowledge.  Only time will tell how far I will go!

            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6 text-purple-800">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-purple-300 px-4 py-2 mr-2 mt-2 text-gray-500 hover:bg-teal-600 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/about-me-pic.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-5 md:left-30 md:z-0 mt-12 ml-12 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
