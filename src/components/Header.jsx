import logo from "../img/logo.png";
import cerrar from "../img/cerrar.svg";
import { useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [expandido, setExpandido] = useState(false);

  const handleMenu = () => {
    setExpandido(!expandido);
    document.querySelector("body").classList.toggle("blur-a");
  };

  const handleNav = (valor) => {
    console.log(valor)
  }

  return (
    <header id="inicio">
      <div className="idiomas">
        <button className="boton-idioma">ESPAÑOL</button>
        <button className="boton-idioma">ENGLISH</button>
        <button className="boton-idioma">DEUTSCH</button>
      </div>
      <div className="navbar">
        <img className="logo" alt="" src={logo}></img>
        <button onClick={() => handleMenu()} className="boton-hamburguesa">
          <span className="line1_hamburger"></span>
          <span className="line2_hamburger"></span>
          <span className="line3_hamburger"></span>
        </button>
        <button onClick={() => handleMenu()} className={`cross ${expandido ? "expandido" : ""}`}>
          <img src={cerrar}></img>
        </button>
        <nav className={`nav-items ${expandido ? "expandido" : ""}`}>
          <button className="link" value="inicio" onClick={(e) => handleNav(e.target.value)}>Inicio</button>
          <button className="link" value="festival" onClick={(e) => handleNav(e.target.value)}>Festival</button>
          <button className="link" value="inscribirse" onClick={(e) => handleNav(e.target.value)}>Inscribirse</button>
          <button className="link" value="bases" onClick={(e) => handleNav(e.target.value)}>Bases</button>
          <button className="link" value="nosotros" onClick={(e) => handleNav(e.target.value)}>Nosotros</button>
        </nav>
      </div>

      <div id="overlay" onClick={() => handleMenu()}></div>
    </header>
  );
};

export default Header;
