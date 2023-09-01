import { useState } from 'react'
import './App.css'
import Navbar from './componets/navbar/Navbar.jsx';
import LandingPage from './Pages/landingPage/LandingPage';
import MySkillPage from './Pages/mySkillPage/MySkillPage';
import AboutMe from './Pages/aboutMe/AboutMe';

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <MySkillPage />
      <AboutMe />
    </>
  )
}

export default App
