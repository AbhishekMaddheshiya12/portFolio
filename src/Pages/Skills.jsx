import React, { useState } from "react";
import HighOrderComponet from "../Components/HOC";
import skill from "../assets/skill.js";
import SmallCards from "@/Components/SmallCards";
import PersonalSkills from "@/Data/personalSkills";
import { motion } from "framer-motion";
function Skills() {
  const defaultDesc =
    "I develop scalable, high-performance web applications using React, TypeScript, Node.js, and modern tools, focusing on clean architecture, responsive design, and seamless user experiences.";

  const [description, setDescription] = useState(defaultDesc);
  return (
    <div className="h-full text-gray-100">
      <div className="w-5/6 m-auto ">
        <div
          className="italic text-gray-100 text-7xl text-center mt-10 -underline-offset-8"
          style={{ fontFamily: "Allura, cursive" }}
        >
          Skills
        </div>
        <div>
          <div
            className="text-5xl mt-8"
            style={{ fontFamily: "Allura, cursive" }}
          >
            Technology
          </div>
          <div className="grid md:grid-cols-3 grid-rows gap-4 my-5">
            <div className="col-span-2">
              <motion.div
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="grid grid-cols-5 gap-4 mb-5"
              >
                {skill.map((item, index) => (
                  <img
                    key={index}
                    onMouseEnter={() => setDescription(item.description)}
                    onMouseLeave={() => setDescription(defaultDesc)}
                    className="w-28 h-28 object-contain grayscale hover:grayscale-0 hover:scale-125 transition-all duration-300 ease-in-out cursor-pointer mt-5"
                    src={item.src}
                    alt={item.name || "Skill icon"}
                  />
                ))}
              </motion.div>
            </div>
            <div className="md:mt-20 m-auto bg-inherit ">
              <div
                className="text-3xl delay-100"
                style={{ fontFamily: "Allura, cursive" }}
              >
                <motion.p
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration:0.8,
                    ease:"easeOut"
                  }}
                  className="text-center max-w-xl text-gray-400 transition-opacity duration-5000 ease-in-out opacity-100"
                >
                  {description}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="text-5xl mt-20"
            style={{ fontFamily: "Allura, cursive" }}
          >
            Personal Skills
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-1 gap-4 p-4">
            {PersonalSkills.map((item) => (
              <SmallCards
                key={item.id}
                cardTitle={item.title}
                cardDescription={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighOrderComponet(Skills);
