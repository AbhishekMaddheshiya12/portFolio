import React, { useState, useEffect } from "react";
import { Menu, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import NavBar from "../Components/NavBar.jsx";
import avatar from "../assets/avatar.jpg"

const FloatingParticles = () => {
  const particles = Array.from({ length: 25 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${6 + Math.random() * 4}s`
      }}
    />
  ));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes drift {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(15px); opacity: 0.8; }
        }
        .absolute.w-1.h-1 {
          animation: drift infinite ease-in-out;
        }
      `}</style>
      {particles}
    </div>
  );
};
const CustomTypewriter = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "Hi, I'm Abhishek Maddheshiya",
    "Full Stack Developer",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const getDisplayText = () => {
    if (currentIndex === 0) {
      const name = "Abhishek";
      const nameIndex = currentText.indexOf(name);
      if (nameIndex !== -1) {
        const beforeName = currentText.substring(0, nameIndex);
        const afterName = currentText.substring(nameIndex + name.length);
        return (
          <>
            {beforeName}
            <span className="text-gray-400">{name}</span>
            {afterName}
          </>
        );
      }
    }
    return currentText;
  };

  return (
    <div className="mb-8">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight mb-4">
        <span className="text-white">
          {getDisplayText()}
        </span>
        <span className="animate-blink text-blue-400 ml-2">|</span>
      </h1>
    </div>
  );
};

const Tagline = () => {
  return (
    <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
      <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl">
        Transforming ideas into digital experiences with 
        <span className="text-white font-medium"> visionary craftsmanship</span>
      </p>
    </div>
  );
};

const SocialLinks = () => {
  const socials = [
    { Icon: Github, label: "GitHub" },
    { Icon: Linkedin, label: "LinkedIn" },
    { Icon: Mail, label: "Email" }
  ];

  return (
    <div className="flex space-x-6 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
      
    </div>
  );
};

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="flex flex-col items-center text-gray-400">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent mb-2"></div>
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
  );
};

function WelcomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-transparent to-slate-900/50"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <FloatingParticles />
      
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-6 lg:px-12 h-screen flex flex-col">
          
          <NavBar />
          
          <div className="flex-1 flex items-center">
            <div className="w-full">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                <div>
                  <CustomTypewriter />
                  <Tagline />
                  <SocialLinks />
                </div>
                
                <div className="hidden lg:flex justify-center items-center animate-fade-in-right" style={{ animationDelay: '1s' }}>
                  <div className="relative">
                    <div className=" flex items-center justify-center ml-60">
                      <img style={{ borderRadius: '10%'}} width={800} height={800} src={avatar}></img>
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/20 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
          <div className="pb-8 flex justify-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
              <div className="flex space-x-8 text-sm text-gray-500">
                <span>Full Stack</span>
                <span>•</span>
                <span>React/Node.js</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <ScrollIndicator />

      <style jsx>{`        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
}

export default WelcomePage;