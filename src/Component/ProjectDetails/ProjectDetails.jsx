"use client";

import photos from "./ProjectImages";
import { PinContainer } from "../ui/3d-pin";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

const projects = [
  {
    title: "To-Do List",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    href: "https://to-do-list-steel-ten-36.vercel.app/",
    photo: photos.ToDoList,
  },
  {
    title: "Recipe Web",
    description: "Find recipes with ingredients and steps using a beautiful UI.",
    href: "https://recepi-web.vercel.app/",
    photo: photos.RecipeFinder,
  },
  {
    title: "Next-Gen App",
    description: "Modern web experience showcasing VR games and immersive features.",
    href: "https://next-gen-app-lovat.vercel.app/",
    photo: photos.VrWorld,
  },
  {
    title: "Game Zone",
    description: "Collection of fun browser games with interactive UI.",
    href: "https://game-zone-nu.vercel.app/",
    photo: photos.GameZOne,
  },
  {
    title: "Chat-Genie",
    description: "AI chatbot built using Gemini API for smart conversations.",
    href: "https://chat-genie-five.vercel.app/",
    photo: photos.ChatGenie,
  },
  {
  title: "Career Guide",
  description: "A student career guidance website built to help students explore future opportunities after 10th & 12th.",
  href: "https://career-guide-iwpw.vercel.app/",
  photo: photos.CareerGuide,
}
];

export default function ProjectDetails() {
  return (
    <>
      <div className="scale-z-110">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl mt-5 font-extrabold text-center bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight mb-8 flex justify-center items-center gap-3"
        >
          <FaReact className="text-5xl animate-spin-slow" />
          Explore My Creations
        </motion.h1>

        <div className="flex flex-wrap justify-center items-center gap-18 p-8">
          {projects.map((project, index) => (
            <PinContainer key={index} title={project.title} href={project.href}>
              <div className="flex basis-full flex-col gap-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] bg-black/20 mt-5 rounded-xl">
                <img
                  src={project.photo}
                  alt={project.title}
                  width={320}
                  height={328}
                  className="w-full h-52 object-fit rounded-lg mb-4"
                />
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">{project.description}</span>
                </div>
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </>
  );
}
