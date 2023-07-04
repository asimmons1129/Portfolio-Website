import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Space Learning VR",
    description:
      "Space Learning VR is a VR app that helps children learn facts about outer space remotely during the pandemic",
    image: "/space-vr.png",
    github: "https://github.com/eggSavorSouffle/Space-Learning-VR",
    link: "https://www.youtube.com/watch?v=dXtG18Oym6s",
  },
  {
    name: "Appointment Scheduler",
    description: "Appointment Scheduler is a scheduling app that allows the scheduling/modification of appointments",
    image: "/appointment-scheduling.png",
    github: "https://github.com/asimmons1129/WGU-C195-Software-II-Appointment-Scheduling-Application",
    link: "https://www.youtube.com/watch?v=5qBSd9T3lUM",
  },
  {
    name: "WGUPS Tracker",
    description:
      "WGUPS Tracker is a delivery service app that tracks package deliveries",
    image: "/delivery-tracker2.png",
    github: "https://github.com/asimmons1129/Wine-Quality-Predictor-/blob/main/Wine_Quality_Analysis_Notebook.ipynb",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "Wine Quality Analyzer",
    description:
      "Wine Quality Analyzer is a web app that analyzes wine's quality based on chemical components",
    image: "/wine-tasting-ml.png",
    github: "https://github.com/asimmons1129/WGU-C950-Delivery-Service-Algorithm",
    link: "https://colab.research.google.com/drive/1Chd4qozpvbehFftnl4mcPG7-SW-dKeIS?usp=sharing",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="bg-gray-100 dark:bg-black my-12 pb-12 md:pt-16 md:pb-48 rounded-2xl">
      <h1 className="my-10 text-center font-bold text-4xl text-purple-600">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 mr-10 ml-10">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-0 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6 text-purple-800">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
      </div>
    </section>
  )
}

export default ProjectsSection
