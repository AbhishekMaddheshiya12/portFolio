import React from "react"
import WelcomePage from "./Pages/WelcomePage"
import { Route, Routes } from "react-router"
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"
import About from "./Pages/About"
import Contacts from "./Pages/Contacts"
import Cards from "./Components/Cards"
function App() {

  return (
    <div className=" w-screen bg-gradient-to-br from-gray-900 to-black">
      <Routes>
        <Route path="/" element={<WelcomePage />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contacts />}/>
        <Route path="/cards" element={<Cards/>}></Route>
      </Routes>
    </div>
  )
}

export default App
