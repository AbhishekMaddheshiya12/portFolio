import React from "react";

function Loader() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col bg-black">
      <style jsx>{`
        @keyframes loader-circle-scale {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(0.7);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
        
        .loader-circle::before {
          content: "";
          display: block;
          position: absolute;
          border-width: 4px;
          border-style: solid;
          border-radius: 50%;
          width: 80px;
          height: 80px;
          border-color: #bbb;
          top: 0;
          left: 0;
          animation: loader-circle-scale 1s linear 0s infinite;
        }
        
        .loader-circle::after {
          content: "";
          display: block;
          position: absolute;
          border-width: 4px;
          border-style: solid;
          border-radius: 50%;
          width: 80px;
          height: 80px;
          border-color: #bbb;
          top: 0;
          left: 0;
          opacity: 0;
          animation: loader-circle-scale 1s linear 0.5s infinite;
        }
      `}</style>
      
      <div className="relative w-20 h-20 inline-block">
        <div className="loader-circle"></div>
      </div>
    </div>
  );
}

export default Loader;