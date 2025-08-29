import React from "react";
import NavBar from "../Components/NavBar";
import HighOrderComponet from "../Components/HOC";
import Cards from "@/Components/Cards";
import Typewriter from "typewriter-effect";
import Animate from "@/Components/Animate";

function WelcomePage() {
  return (
    <div className="h-screen text-gray-100 flex flex-col">
      <div className="w-10/12 m-auto flex flex-col h-full">
        <div><NavBar /></div>
        <div className="flex-1 flex items-center justify-center">
          <Typewriter
            options={{
              strings: [
                '<div class = "text-7xl font-bold "  style="font-family: Allura, cursive">Hi,I am <span class ="text-gray-500">Abhishek</span> Maddheshiya</div>',
                '<div class = "text-7xl font-bold"  style="font-family: Allura, cursive">I am a Full Stack Developer </div>',
                // '<div class = "text-7xl font-bold font-mono"  style="font-family: Allura, cursive">I am a UI/UX Designer</div>',
              ],
              autoStart: true,
              loop: true,

            }}
          />
        </div>
        <div className="pb-16">
          <Animate/>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;