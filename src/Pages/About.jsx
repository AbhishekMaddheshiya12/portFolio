import React from "react";
import HighOrderComponet from "../Components/HOC";
import { Button } from "../Components/ui/button";
import { motion } from "framer-motion";
import pdf from "../Data/Abhishek_Maddheshiya_ATS_Updated.pdf";
import image from "../assets/Gemini_Generated_Image_klsqu6klsqu6klsq.png"

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const educationItems = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "Rajkiya Enginnering College,Sonbhadra",
      year: "2022 - 2026",
      description:
        "Specialized in software development, data structures, algorithms, and web technologies. Maintained a CGPA of 8.5/10.",
      direction: "left",
    },
    {
      degree: "Higher Secondary Education",
      field: "Science (PCM)",
      institution: "New Central Public School,Ballia",
      year: "2020 - 2021",
      description:
        "Focused on Physics, Chemistry, and Mathematics. Achieved 88% in board examinations.",
      direction: "right",
    },
    {
      degree: "Secondary Education",
      field: "General",
      institution: "LN National Senior Secondary School",
      year: "2018 - 2019",
      description:
        "Completed with distinction in Science and Mathematics. Active participant in coding competitions.",
      direction: "left",
    },
  ];

  return (
    <div className="h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-100">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0 mt-10 sm:mt-16 lg:mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="lg:col-span-3 order-2 lg:order-1" variants={slideFromLeft}>
          <motion.div className="text-3xl sm:text-4xl lg:text-5xl font-bold" variants={itemVariants}>
            About Me...
          </motion.div>
          <motion.div className="mt-6 sm:mt-8 lg:mt-10" variants={itemVariants}>
            <motion.p className="text-base sm:text-lg lg:text-xl leading-relaxed" variants={itemVariants}>
              Hi, I'm Abhishek, a passionate full-stack developer specializing
              in building clean, scalable, and user-focused web applications. I
              enjoy turning complex problems into simple, intuitive solutions
              that enhance user experience and business goals. I work primarily
              with MERN stack (MongoDB, Express, React, Node.js) and have
              experience with TypeScript, Next.js, and Firebase, enabling me to
              handle projects end-to-end from database design to front-end
              interfaces. I am also comfortable with integrating RESTful APIs
              and third-party services, ensuring seamless connectivity in
              applications. Currently, I'm focused on deepening my expertise in
              React performance optimization and system design, while exploring
              new technologies like React Native and AI for development.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a href={pdf} download={"Abhishek_Maddheshiya_ATS_Updated.pdf"}>
                <Button
                  className="mt-6 sm:mt-8 lg:mt-10 p-4 sm:p-6 bg-slate-50 text-black hover:bg-slate-300 hover:text-black font-bold text-sm sm:text-md hover:shadow-[0_0_100px_rgba(59,130,246,0.4),0_0_140px_rgba(59,130,246,0.2)] hover:scale-105 hover:rotate-3 transition-all duration-300 border border-gray-200 hover:border-blue-200 w-full sm:w-auto"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="lg:ml-10 lg:col-span-2 order-1 lg:order-2" variants={slideFromRight}>
          <motion.div
            className="w-full h-64 sm:h-80 lg:h-full bg-slate-300 rounded-lg hover:shadow-[0_0_100px_rgba(59,130,246,0.4),0_0_140px_rgba(59,130,246,0.2)] hover:scale-105 hover:rotate-3 transition-all duration-300 border border-gray-200 hover:border-blue-200 shadow-[0_0_50px_rgba(59,130,246,0.2)] lg:shadow-[0_0_100px_rgba(59,130,246,0.4),0_0_140px_rgba(59,130,246,0.2)] lg:scale-105 lg:rotate-3"
            whileHover={{
              scale: 1.05,
              rotate: 3,
              boxShadow:
                "0 0 100px rgba(59,130,246,0.4), 0 0 140px rgba(59,130,246,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <img src={image}></img>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.hr
        className="mt-20 sm:mt-32 lg:mt-40 mb-8 sm:mb-12 lg:mb-14"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16"
          variants={itemVariants}
        >
          Education...
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col sm:flex-row items-center ${
                item.direction === "right" && window.innerWidth >= 640 ? "sm:flex-row-reverse" : ""
              }`}
              initial={{
                x: window.innerWidth >= 640 ? (item.direction === "left" ? -100 : 100) : 0,
                y: window.innerWidth < 640 ? 50 : 0,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="hidden sm:flex flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full mx-4 lg:mx-8 relative"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              <motion.div
                className={`flex-1 w-full sm:max-w-lg bg-slate-800 rounded-lg p-4 sm:p-6 shadow-lg border border-gray-700 ${
                  item.direction === "right" ? "sm:mr-4 lg:mr-8" : "sm:ml-4 lg:ml-8"
                }`}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59,130,246,0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-lg sm:text-xl font-bold text-blue-400 mb-2"
                  whileHover={{ color: "#60a5fa" }}
                >
                  {item.degree}
                </motion.h3>
                <motion.p
                  className="text-base sm:text-lg text-gray-300 mb-1"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.field}
                </motion.p>
                <motion.p
                  className="text-sm sm:text-md text-gray-400 mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.institution}
                </motion.p>
                <motion.p
                  className="text-xs sm:text-sm text-blue-300 mb-3 font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.year}
                </motion.p>
                <motion.p
                  className="text-gray-300 text-xs sm:text-sm leading-relaxed"
                  whileHover={{ color: "#d1d5db" }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
          
        <motion.div
          className="flex justify-center mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              scale: 1.3,
              boxShadow: "0 0 50px rgba(59,130,246,0.5)",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HighOrderComponet(About);