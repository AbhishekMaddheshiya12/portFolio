import React from "react";
import HighOrderComponet from "../Components/HOC";
import Cards from "@/Components/Cards";
import { projects } from "@/Data/projects";

function Projects() {
  return (
    <div className="w-5/6 m-auto ">
      <div
        className="italic text-gray-100 text-7xl text-center mt-10 -underline-offset-8"
        style={{ fontFamily: "Allura, cursive" }}
      >
        Projects
      </div>
      <div className="grid grid-row-3 gap-4">
        {projects.map((item) => {
          return <Cards {...item} key={item.id}/>;
        })}
      </div>
    </div>
  );
}

export default HighOrderComponet(Projects);
