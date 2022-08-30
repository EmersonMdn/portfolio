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
              <img src={imagenes.html} alt="" />

              <div className="progress">
                <div
                  className="progress-bar progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Intermedio
                </div>
              </div>
            </div>
            <div className="skill-item">
              <img src={imagenes.css} alt="" />
              <div className="progress">
                <div
                  className="progress-bar progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Intermedio
                </div>
              </div>
            </div>
            <div className="skill-item">
              <img src={imagenes.js} alt="" />
              <div className="progress">
                <div
                  className="progress-bar progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Intermedio
                </div>
              </div>
            </div>
            <div className="skill-item">
              <img src={imagenes.react} alt="" />
              <div className="progress">
                <div
                  className="progress-bar progress-bar basico"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Basico
                </div>
              </div>
            </div>
            <div className="skill-item">
              <img src={imagenes.git} alt="" />
              <div className="progress">
                <div
                  className="progress-bar progress-bar basico"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Basico
                </div>
              </div>
            </div>
            <div className="skill-item">
              <img src={imagenes.github} alt="" />
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Intermedio
                </div>
              </div>
            </div>
            <div className="skill-item">
              <img src={imagenes.sass} alt="" />
              <div className="progress">
                <div
                  className="progress-bar progress-bar basico"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>Basico</span>
                </div>
              </div>
            </div>
            <div className="skill-item">
              <img src={imagenes.firebase} alt="" />
              <div className="progress">
                <div
                  className="progress-bar progress-bar basico"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>Basico</span>
                </div>
              </div>
            </div>
            <div className="skill-item">
              <img src={imagenes.api} alt="" />
              <div className="progress">
                <div
                  className="progress-bar progress-bar basico"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>Basico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
