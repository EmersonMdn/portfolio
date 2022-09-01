// import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  // const [isActive, setIsActive] = useState(false);

  // setTimeout(() => {
  //   setIsActive(true);
  // }, 2000);
  

  return (
    <div>
      <div className="my-app">
        <NavBar />
        <MainPage />
        <AboutMe />
        <Skills />
        <Projects />

      </div>
    </div>
  );
}

export default App;
