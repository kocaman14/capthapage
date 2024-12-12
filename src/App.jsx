import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import Captcha from "./components/Captcha"
import { useSelector } from "react-redux"
import Project from "./components/Project"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} /> 
    <Route path="/captcha" element={<Captcha />} />
    <Route path="/project" element={<Project />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
