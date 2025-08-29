import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

function Draw({navList,activeItem}) {
  const navigate = useNavigate();
  return (
    <div>
      <Drawer >
        <DrawerTrigger asChild>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify-icon lucide-align-justify"><path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg>
        </DrawerTrigger>
        <DrawerContent className="bg-gradient-to-br from-gray-900 to-black">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerDescription>
                <div className="bg-gradient-to-br from-gray-900 to-black py-3 px-1.5 rounded-3xl h-full">
                  {navList.map((item) => {
                    return (
                      <div
                        className={` hover:text-gray-600 text-gray-200 my-5 py-5 font-bold text-xl ${
                          activeItem === item.navigate
                            ? "border-2 border-gray-300 rounded-2xl"
                            : ""
                        }`}
                        key={item.name}
                      >
                        <div
                          className="cursor-pointer px-2"
                          onClick={() => navigate(item.navigate)}
                        >
                          {item.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </DrawerDescription>
            </DrawerHeader>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Draw;
