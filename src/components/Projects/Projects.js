import "./Projects.css";
import misImagenes from "../../assets/img/imagenes";

function Projects() {
  return (
    <div id="projects" className="container">
      <a href="#skills-container" className="arrow">
        <i className="fa-solid fa-chevron-up "></i>
      </a>
      <h2>Mis trabajos</h2>
      <div className="lumos">
        <a href="https://delightful-tiramisu-00d03a.netlify.app">
          <img src={misImagenes.lumos} alt="" />
        </a>
        <p>Lumos Store</p>
        <small>Lumos es un proyecto freelance realizada por mí para una tienda pequeña que será lanzada en breve</small>
      </div>
      <div className="text-light tools">
        <h4>Herramientas utilizadas</h4>
        <ul>
          <li>Html, Css, JavaScript</li>
          <li>React Js (Hooks)</li>
          <li>Bootstrap, SweetAlert</li>
          <li>Google Firebase</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
