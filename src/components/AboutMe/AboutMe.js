import "./AboutMe.css";
import imagenes from "../../assets/img/imagenes";

function AboutMe() {
  return (
    <>
      <div id="about-me">
        <a href="#mainPage" className="arrow">
          <i className="fa-solid fa-chevron-up"></i>
        </a>
        <h2>sobre mi</h2>
        <div className="about-text">
          <div className="container-fluid about-info">
            <div className="row">
              <div className="col-md-6 myPic">
                <img src={imagenes.img2} alt="" />
              </div>
              <div className="col-md-6 myData">
                <p>
                  <i className="fa-solid fa-address-card"></i> Emerson Junior
                  Medina Franco
                </p>
                <p>
                  <i class="fa-solid fa-graduation-cap"></i>Front End Developer
                  | Coder House (2021 - 2022)
                </p>
                <p>
                  <i className="fa-solid fa-location-dot"></i> Ciudad Autónoma de Buenos Aires, Buenos Aires, Argentina
                </p>
                <p>
                  <i className="fa-solid fa-user-large"></i> 22 años
                </p>
                <div className="contacto-logo">
                  <a href="https://github.com/EmersonMdn" target="_blanck">
                    <img src={imagenes.github} alt="" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/emersonmed/"
                    target="_blanck"
                  >
                    <img src={imagenes.linkedin} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p>
            Soy un estudiante de la carrera de{" "}
            <strong>Full Stack en Coder House</strong>
            <br></br>
            Actualmente domino el Front End sin problemas. De igual manera me
            encuentro adentrandome en el <strong>Back End</strong>. LLevo al
            rededor de un año programando del lado del Front en proyectos
            personales, mejorando mi logica y uso de herramientas
          </p>
        </div>

        <a href="#skills-container" className="arrow">
          <i className="fa-solid fa-chevron-down"></i>
        </a>
      </div>
    </>
  );
}

export default AboutMe;
