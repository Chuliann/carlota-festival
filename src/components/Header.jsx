import { useEffect, useState } from "react";
import logo from "../img/logo.webp";
import cerrar from "../img/cerrar.svg";
import slider from "../img/slide.webp";
import barras from "../img/barras.webp";
import barras2 from "../img/barras2.webp";
import barrasMovil from "../img/barras-movil.webp";
import barras1movil from "../imgviejas/barras1movil.png";
import barras2movil from "../imgviejas/barras2movil.png";
import "../styles/header.css";
import { header, hero } from "../utils/lang.js";

const Header = ({ handleIdioma, idioma }) => {
    const [expandido, setExpandido] = useState(false);
    const [navOculta, setNavOculta] = useState(false);


    const handleMenu = () => {
        setExpandido(!expandido);
        document.querySelector("body").classList.toggle("fijarBody");
        document.querySelector("html").classList.toggle("fijarBody");
    };

    const subir = () => {
        if (expandido) {
            handleMenu();
        }
        document
            .querySelector("#inicio")
            .scrollIntoView({ behavior: "smooth" });
    };

    const handleNav = (valor) => {
        handleMenu();
        document
            .querySelector(`#${valor}`)
            .scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        let lastScroll = window.scrollY;
        const handleScroll = (event) => {
            if (lastScroll < window.scrollY) {
                setNavOculta(true);
            } else {
                setNavOculta(false);
            }

            lastScroll = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header id="inicio" className={`${navOculta ? "nav-oculta" : ""} `}>
            <nav
                className="navbar"
            >
                <img className="logo" alt="logo" src={logo}></img>
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
                        { header[idioma]["nav1"] }
                    </button>
                    <button
                        className="link"
                        value="festival"
                        onClick={(e) => handleNav(e.target.value)}
                    >
                        { header[idioma]["nav2"] }
                    </button>
                    <button
                        className="link"
                        value="inscribirse"
                        onClick={(e) => handleNav(e.target.value)}
                    >
                        { header[idioma]["nav3"] }
                    </button>
                    <button
                        className="link"
                        value="bases"
                        onClick={(e) => handleNav(e.target.value)}
                    >
                        { header[idioma]["nav4"] }
                    </button>
                    <button
                        className="link"
                        value="nosotros"
                        onClick={(e) => handleNav(e.target.value)}
                    >
                        { header[idioma]["nav5"] }
                    </button>
                    <div className="idiomas-nav">
                        <button onClick={() => { handleIdioma("es"); handleMenu() }}>ES</button>
                        <button onClick={() => { handleIdioma("en"); handleMenu() }}>EN</button>
                    </div>
                </div>
            </nav>
            
            <div className="hero">
                <div className="imagen-hero">
                    <img className="hero-barras" alt="" src={barras}></img>
                    <p className="hero-titulo">{hero[idioma]["tittle1"]}</p>
                    <p className="hero-titulo2">{hero[idioma]["tittle2"]}</p>

                </div>
                
            
                <div className="imagen-hero2">
                    <img className="hero-barras2" alt="" src={barras2}></img>
                    <p className="hero-titulo3">{hero[idioma]["tittle3"]}</p>
                </div>

                <button
                    className="boton-inscribirse"
                    onClick={() =>
                        document
                            .querySelector("#inscribirse")
                            .scrollIntoView({ behavior: "smooth" })
                    }
                >
                    {hero[idioma]["button"]}
                </button>
            </div>

            <div className="hashtags">
                <p>{hero[idioma]["hashtags"]}</p>
            </div>

            <div id="overlay" onClick={() => handleMenu()}></div>
            <button
                onClick={() => subir()}
                className={`arrow-up ${!navOculta && !expandido ? "comportamiento" : ""}`}
            >
                <img src={slider} alt="up-arrow"></img>
            </button>
        </header>
    );
};

export default Header;
