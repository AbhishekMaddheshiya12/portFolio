import React, { useState } from "react";
import HighOrderComponet from "../Components/HOC";
import skill from "../assets/skill.js";
import SmallCards from "../Components/SmallCards.jsx";
import PersonalSkills from "../Data/personalSkills";
import { motion } from "framer-motion";

function Skills() {
  const defaultDesc =
    "I develop scalable, high-performance web applications using React, TypeScript, Node.js, and modern tools, focusing on clean architecture, responsive design, and seamless user experiences.";

  const [description, setDescription] = useState(defaultDesc);
  
  return (
    <div className="min-h-screen text-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8 sm:py-12">
        {/* Main Title */}
        <div
          className="italic text-gray-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-8 sm:mb-12"
          style={{ fontFamily: "Allura, cursive" }}
        >
          Skills
        </div>

        {/* Technology Section */}
        <div className="mb-16 sm:mb-20">
          <div
            className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8"
            style={{ fontFamily: "Allura, cursive" }}
          >
            Technology
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Skills Grid */}
            <div className="lg:col-span-2">
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
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mb-5"
              >
                {skill.map((item, index) => (
                  <div 
                    key={index}
                    className="flex justify-center items-center p-2"
                  >
                    <img
                      onMouseEnter={() => setDescription(item.description)}
                      onMouseLeave={() => setDescription(defaultDesc)}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain grayscale hover:grayscale-0 hover:scale-110 sm:hover:scale-125 transition-all duration-300 ease-in-out cursor-pointer"
                      src={item.src}
                      alt={item.name || "Skill icon"}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Description */}
            <div className="lg:mt-12 xl:mt-20">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut"
                }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-700/50"
              >
                <p
                  className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-center text-gray-300 leading-relaxed transition-opacity duration-500 ease-in-out"
                  style={{ fontFamily: "Allura, cursive" }}
                >
                  {description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Personal Skills Section */}
        <div>
          <div
            className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8"
            style={{ fontFamily: "Allura, cursive" }}
          >
            Personal Skills
          </div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {PersonalSkills.map((item) => (
              <SmallCards
                key={item.id}
                cardTitle={item.title}
                cardDescription={item.description}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HighOrderComponet(Skills);