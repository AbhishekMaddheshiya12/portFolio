import React from "react";
import HighOrderComponet from "../Components/HOC";
import { Button } from "@/Components/ui/button";
import { motion } from "framer-motion";
import pdf from "../Data/Abhishek_Maddheshiya_ATS_Updated.pdf";

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
      institution: "Your University Name",
      year: "2020 - 2024",
      description:
        "Specialized in software development, data structures, algorithms, and web technologies. Maintained a CGPA of 8.5/10.",
      direction: "left",
    },
    {
      degree: "Higher Secondary Education",
      field: "Science (PCM)",
      institution: "Your College Name",
      year: "2018 - 2020",
      description:
        "Focused on Physics, Chemistry, and Mathematics. Achieved 90% in board examinations.",
      direction: "right",
    },
    {
      degree: "Secondary Education",
      field: "General",
      institution: "Your School Name",
      year: "2016 - 2018",
      description:
        "Completed with distinction in Science and Mathematics. Active participant in coding competitions.",
      direction: "left",
    },
  ];

  return (
    <div className="h-full w-10/12 text-gray-100 m-auto">
      <motion.div
        className="grid grid-cols-5 mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="col-span-3" variants={slideFromLeft}>
          <motion.div className="text-5xl font-bold" variants={itemVariants}>
            About Me...
          </motion.div>
          <motion.div className="mt-10" variants={itemVariants}>
            <motion.p className="text-xl" variants={itemVariants}>
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
                  className="mt-10 p-6 bg-slate-50 text-black hover:bg-slate-300 hover:text-black font-bold text-md hover:shadow-[0_0_100px_rgba(59,130,246,0.4),0_0_140px_rgba(59,130,246,0.2)] hover:scale-105 hover:rotate-3 transition-all duration-300 border border-gray-200 hover:border-blue-200"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="ml-10 col-span-2" variants={slideFromRight}>
          <motion.div
            className="w-full h-full bg-slate-300 rounded-lg sm:hover:shadow-[0_0_100px_rgba(59,130,246,0.4),0_0_140px_rgba(59,130,246,0.2)] hover:scale-105 hover:rotate-3 transition-all duration-300 border border-gray-200 hover:border-blue-200 shadow-[0_0_100px_rgba(59,130,246,0.4),0_0_140px_rgba(59,130,246,0.2)] scale-105 rotate-3"
            whileHover={{
              scale: 1.05,
              rotate: 3,
              boxShadow:
                "0 0 100px rgba(59,130,246,0.4), 0 0 140px rgba(59,130,246,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* <img src={typeScript}></img> */}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.hr
        className="mt-40 mb-14"
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
          className="text-5xl font-bold mb-16"
          variants={itemVariants}
        >
          Education...
        </motion.div>

        <div className="space-y-12">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center ${
                item.direction === "right" ? "flex-row-reverse" : ""
              }`}
              initial={{
                x: item.direction === "left" ? -100 : 100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
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
                className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full mx-8 relative"
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
                className={`flex-1 max-w-lg bg-slate-800 rounded-lg p-6 shadow-lg border border-gray-700 ${
                  item.direction === "right" ? "mr-8" : "ml-8"
                }`}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59,130,246,0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-xl font-bold text-blue-400 mb-2"
                  whileHover={{ color: "#60a5fa" }}
                >
                  {item.degree}
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-300 mb-1"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.field}
                </motion.p>
                <motion.p
                  className="text-md text-gray-400 mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.institution}
                </motion.p>
                <motion.p
                  className="text-sm text-blue-300 mb-3 font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.year}
                </motion.p>
                <motion.p
                  className="text-gray-300 text-sm"
                  whileHover={{ color: "#d1d5db" }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
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
