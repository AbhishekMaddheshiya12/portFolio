import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Draw from "./SubComponent/Draw";

function NavBar() {
  const navList = [
    { name: "Home", navigate: "/" },
    { name: "Skills", navigate: "/skills" },
    { name: "Projects", navigate: "/projects" },
    { name: "About", navigate: "/about" },
    { name: "Contact", navigate: "/contact" },
  ];
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("/");
  useEffect(() => {
    setActiveItem(window.location.pathname);
  }, [window.location.pathname]);
  return (
    <div className="w-100vh">
      <div className="flex justify-evenly pt-10">
        <h1
          className="italic text-gray-400 text-5xl hidden md:block"
          style={{ fontFamily: "Allura, cursive" }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Abhishek
        </h1>
        <div className="bg-gray-400 py-3 px-1.5 rounded-3xl hidden md:block">
          {navList.map((item) => {
            return (
              <div
                className={`mx-4 inline-block hover:text-gray-600 text-gray-200 ${
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
        <div></div>
         <div className="block mt-2 md:hidden text-gray-400 mr-80">
          <Draw navList={navList} activeItem={activeItem} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

