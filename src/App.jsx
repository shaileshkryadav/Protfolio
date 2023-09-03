
import './App.css'
import Navbar from './componets/navbar/Navbar.jsx';
import LandingPage from './Pages/landingPage/LandingPage';
import MySkillPage from './Pages/mySkillPage/MySkillPage';
import AboutMe from './Pages/aboutMe/AboutMe';
import MyProject from './Pages/myProject/MyProject';


function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <MySkillPage />
      <AboutMe />
      <MyProject />
    </>
  )
}

export default App
