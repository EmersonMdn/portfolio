import "./MainPage.css";
import imagenes from "../../assets/img/imagenes";

function MainPage() {
  return (
    <>
      <div id="mainPage">
        <div className="presentacion">
          <h1 className="title">Hola, soy Emerson</h1>
          <h2 className="subtitle">Un desarrollador Front end</h2>
          <a href="#about-me" className="arrow">
            <i class="fa-solid fa-chevron-down "></i>
          </a>
        </div>
        <video muted autoPlay loop>
          <source src={imagenes.video} type="video/mp4" />
        </video>
        <div className="capa"></div>
      </div>
    </>
  );
}

export default MainPage;
