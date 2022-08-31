import "./Skills.css";
import imagenes from "../../assets/img/imagenes";

function Skills() {
  return (
    <>
      <div id="skills-container">
        <h2>Mis skills</h2>

        <div className="container skills">
          <div className="row">
            <div className="skill-item">
              <h4>HTML</h4>
              <img src={imagenes.html} alt="" />
              <p>
                Nivel <i className="fa-solid fa-chevron-down"></i>
              </p>

              <div className="progress">
                <div
                  className="progress-bar progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>Intermedio</span>
                </div>
              </div>
            </div>
            <div className="skill-item">
              <h4>css</h4>
              <img src={imagenes.css} alt="" />
              <p>
                Nivel <i className="fa-solid fa-chevron-down"></i>
              </p>

              <div className="progress">
                <div
                  className="progress-bar progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>Intermedio</span>
                </div>
              </div>
            </div>
            <div className="skill-item">
              <h4>Javascript</h4>
              <img src={imagenes.js} alt="" />
              <p>
                Nivel <i className="fa-solid fa-chevron-down"></i>
              </p>

              <div className="progress">
                <div
                  className="progress-bar progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>Intermedio</span>
                </div>
              </div>
            </div>
            <div className="skill-item">
              <h4>React js</h4>
              <img src={imagenes.react} alt="" />
              <p>
                Nivel <i className="fa-solid fa-chevron-down"></i>
              </p>

              <div className="progress">
                <div
                  className="progress-bar progress-bar basico"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>Básico</span>
                </div>
              </div>
            </div>
            <div className="skill-item">
              <h4>GIT</h4>
              <img src={imagenes.git} alt="" />
              <p>
                Nivel <i className="fa-solid fa-chevron-down"></i>
              </p>

              <div className="progress">
                <div
                  className="progress-bar progress-bar basico"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>Básico</span>
                </div>
              </div>
            </div>
            <div className="skill-item">
              <h4>github</h4>
              <img src={imagenes.github} alt="" />
              <p>
                Nivel <i className="fa-solid fa-chevron-down"></i>
              </p>

              <div className="progress">
                <div
                  className="progress-bar progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>Intermedio</span>
                </div>
              </div>
            </div>
            <div className="skill-item">
              <h4>sass</h4>
              <img src={imagenes.sass} alt="" />
              <p>
                Nivel <i className="fa-solid fa-chevron-down"></i>
              </p>

              <div className="progress">
                <div
                  className="progress-bar progress-bar basico"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>Básico</span>
                </div>
              </div>
            </div>
            <div className="skill-item">
              <h4>firebase</h4>
              <img src={imagenes.firebase} alt="" />
              <p>
                Nivel <i className="fa-solid fa-chevron-down"></i>
              </p>

              <div className="progress">
                <div
                  className="progress-bar progress-bar basico"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>Básico</span>
                </div>
              </div>
            </div>
            <div className="skill-item">
              <h4>Consumir api</h4>
              <img src={imagenes.api} alt="" />
              <p>
                Nivel <i className="fa-solid fa-chevron-down"></i>
              </p>

              <div className="progress">
                <div
                  className="progress-bar progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>Básico | Intermedio</span>
                </div>
              </div>
            </div>
            <div className="skill-item">
              <h4>ingles</h4>
              <img src={imagenes.english} alt="" />
              <p>
                Nivel <i className="fa-solid fa-chevron-down"></i>
              </p>

              <div className="progress">
                <div
                  className="progress-bar progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>Básico | Intermedio</span>
                </div>
              </div>
            </div>
          </div>
          <div>hola</div>
        </div>
      </div>
    </>
  );
}

export default Skills;
