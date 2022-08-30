// import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import MainPage from "./components/MainPage/MainPage";
import Skills from "./components/Skills/Skills";

function App() {
  // const [isActive, setIsActive] = useState(false);

  // setTimeout(() => {
  //   setIsActive(true);
  // }, 2000);
  

  return (
    <div>
      <div className="my-app">
        <MainPage />
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
}

export default App;
