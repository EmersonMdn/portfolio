import "./AboutMe.css";
import imagenes from "../../assets/img/imagenes";

function AboutMe() {
  return (
    <>
      <div id="about-me">
        <a href="#mainPage" className="arrow">
          <i class="fa-solid fa-chevron-up"></i>
        </a>
        <h2>sobre mi</h2>
        <div className="about-text">
          
          <img src={imagenes.img2} alt="" />
          <p>
            Me llamo Emerson Junior Medina Franco, tengo 22 años y soy un
            estudiante de la carrera de Full Stack en Coder House
            <br></br>
            Actualmente domino el Front End sin problemas. De igual manera me
            encuentro adentrandome en el Back End <br></br>
          </p>
        </div>

        <a href="#mainPage" className="arrow">
          <i class="fa-solid fa-chevron-down"></i>
        </a>
      </div>
    </>
  );
}

export default AboutMe;
