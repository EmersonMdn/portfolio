// import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import MainPage from "./components/MainPage/MainPage";

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
      </div>
    </div>
  );
}

export default App;
