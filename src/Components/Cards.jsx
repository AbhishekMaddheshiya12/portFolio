import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Corusael from "./Corusael";
import { motion } from "framer-motion";
import { SendIcon } from "lucide-react";

function Cards({ id, title, subtitle, description, link, techStack, images }) {
  // {images,title,Subtitle,description,link,techStack,githubLink,id}
  return (
    <div
      className={`${
        id % 2 == 0 ? "mr-30" : "ml-30"
      } flex md:flex-row flex-col py-5 `}
    >
      <motion.div
        initial={{ opacity: 0, x: id % 2 == 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`${
          id % 2 == 0 ? "md:order-1" : "md:order-2"
        } text-white mt-20 md:mx-6 mx-0 md:w-1/2 w-full`}
      >
        <h1
          className="italic text-gray-100 text-4xl  -underline-offset-8"
          style={{ fontFamily: "Allura, cursive" }}
        >
          {title}
        </h1>
        <p className="text-gray-400 font-bold">{subtitle}</p>
        <p
          className="text-gray-400 text-2xl"
          style={{ fontFamily: "Allura, cursive" }}
        >
          {description}
        </p>
        <p className="text-gray-400" style={{ fontFamily: "Allura, cursive" }}>
          {techStack}
        </p>
        <a href={link} target="_blank">
          <Button className="mt-5">
            <p>View Project</p>
            <SendIcon />
          </Button>
        </a>
      </motion.div>
      <Card
        className={`${
          id % 2 == 0 ? "md:order-2" : "md:order-1"
        } w-full md:w-3/5 mx-auto mt-10 hover:shadow-[0_0_100px_rgba(59,130,246,0.4),0_0_140px_rgba(59,130,246,0.2)] hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-blue-200`}
      >
        <Corusael images={images} />
      </Card>
    </div>
  );
}

export default Cards;
