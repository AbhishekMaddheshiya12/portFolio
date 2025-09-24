import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
const WelcomePage = React.lazy(() => import("./Pages/WelcomePage"));
const Skills = React.lazy(() => import("./Pages/Skills"));
const Projects = React.lazy(() => import("./Pages/Projects"));
const About = React.lazy(() => import("./Pages/About"));
const Contacts = React.lazy(() => import("./Pages/Contacts"));
const Loader = React.lazy(() => import("./Components/Loader"));
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="w-screen bg-gradient-to-br from-black via-gray-950 to-black">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
