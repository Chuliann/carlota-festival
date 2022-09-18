import logo from "../img/logo.png";
import cerrar from "../img/cerrar.svg";
import slider from "../img/slide.png";
import { useEffect, useState } from "react";
import "../styles/header.css";

const Header = () => {
    const [expandido, setExpandido] = useState(false);
    const [navOculta, setNavOculta] = useState(false);
    const [comportamiento, setComportamiento] = useState(false);

    const handleMenu = () => {
        setExpandido(!expandido);
        document.querySelector("body").classList.toggle("blur-a");
    };

    const subir = () => {
      if(expandido) {
        handleMenu();
      }
      document.querySelector('#inicio').scrollIntoView({ behavior: "smooth" });
    }

    const handleNav = (valor) => {
        handleMenu();
        document
            .querySelector(`#${valor}`)
            .scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        let lastScroll = window.scrollY;
        let navPos = window.visualViewport.height * 70 / 100 + 62;
        const handleScroll = (event) => {
            if (lastScroll > navPos) {
                setComportamiento(true);
                if (lastScroll < window.scrollY) {
                    setNavOculta(true);
                } else {
                    setNavOculta(false);
                }
            } else {
                setNavOculta(false);
                setComportamiento(false);
            }
            lastScroll = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header id="inicio">
            <div className="idiomas">
                <button className="boton-idioma">ESPAÑOL</button>
                <button className="boton-idioma">ENGLISH</button>
                <button className="boton-idioma">DEUTSCH</button>
            </div>
            <nav
                className={`navbar ${navOculta ? "nav-oculta" : ""} ${
                    comportamiento ? "navarriba" : ""
                }`}
            >
                <img className="logo" alt="" src={logo}></img>
                <button
                    onClick={() => handleMenu()}
                    className="boton-hamburguesa"
                >
                    <span className="line1_hamburger"></span>
                    <span className="line2_hamburger"></span>
                    <span className="line3_hamburger"></span>
                </button>
                <button
                    onClick={() => handleMenu()}
                    className={`cross ${expandido ? "expandido" : ""}`}
                >
                    <img src={cerrar}></img>
                </button>
                <div className={`nav-items ${expandido ? "expandido" : ""}`}>
                    <button
                        className="link"
                        value="inicio"
                        onClick={(e) => handleNav(e.target.value)}
                    >
                        Inicio
                    </button>
                    <button
                        className="link"
                        value="festival"
                        onClick={(e) => handleNav(e.target.value)}
                    >
                        Festival
                    </button>
                    <button
                        className="link"
                        value="inscribirse"
                        onClick={(e) => handleNav(e.target.value)}
                    >
                        Inscribirse
                    </button>
                    <button
                        className="link"
                        value="bases"
                        onClick={(e) => handleNav(e.target.value)}
                    >
                        Bases
                    </button>
                    <button
                        className="link"
                        value="nosotros"
                        onClick={(e) => handleNav(e.target.value)}
                    >
                        Nosotros
                    </button>
                    <div className="idiomas-nav">
                        <button>ES</button>
                        <button>EN</button>
                        <button>GN</button>
                    </div>
                </div>
            </nav>

            <div id="overlay" onClick={() => handleMenu()}></div>
            <button 
              onClick={() => subir()} className={`arrow-up ${!navOculta && comportamiento ? "comportamiento" : ""}`}>
                <img src={slider} alt="up-arrow"></img>
            </button>
        </header>
    );
};

export default Header;
