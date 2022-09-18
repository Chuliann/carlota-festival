import barras from "../img/barras.webp";
import barras2 from "../img/barras2.webp";
import inscribete from "../img/inscribete.webp";
import barrasMovil from "../img/barras-movil.webp";
import barras2Movil from "../img/barras2Movil.webp";
import cartel from "../img/cartel.webp";
import "../styles/festival.css";

const Info = () => {
    return (
        <main id="festival">
            <div className="hero">
                <div className="imagen-hero">
                    <img className="hero-barras" alt="" src={barras}></img>
                    <p className="hero-titulo">Concurso de video</p>
                    <p className="hero-titulo2">Y cine militante</p>

                    <img className="hero-barrasMovil" alt="" src={barrasMovil}></img>
                </div>
                <div className="imagen-hero2">
                    <img className="hero-barras2" alt="" src={barras2}></img>
                    <img className="hero-barras2Movil" alt="" src={barras2Movil}></img>
                    <p className="hero-titulo3">
                        graba y edita un video en 80 horas
                    </p>
                </div>

                <button className="boton-inscribirse" onClick={() => document.querySelector('#inscribirse').scrollIntoView({behavior: "smooth"})}>
                    <img src={inscribete}></img>
                </button>
            </div>

            <div className="hashtags">
                <p>
                    #artemilitante #emancipacion #porladignidad #resistencia
                    #antiimperialismo #lucha #cinepopular #luchasindical
                    #desdeabajo #contraelsistema #anticolonialismo #liberacion
                </p>
            </div>

            <div className="info">
                <p className="blanco titulo-info movil">
                    <span className="grande">Graba y edita</span>
                    <br></br> un documental en{" "}
                    <span className="amarillo">80 horas.</span>
                </p>
                <img className="info-poster" src={cartel} alt="poster"></img>
                <div>
                    <p className="blanco titulo-info web">
                        <span className="grande">Graba y edita</span>
                        <br></br> un documental en{" "}
                        <span className="amarillo">80 horas.</span>
                    </p>
                    <div className="info-texto">
                        <p className="p-1">
                            Atrévete a aportar un proyecto radical, autentico,
                            realista, utópico, revolucionario, inconformista,
                            antisistema, lleno de amor (o de odio) de apoyo a la
                            emancipación de las clases populares, contra los
                            imperios, por la dignidad y por la libertad.
                        </p>

                        <p className="p-white">Primer Premio</p>
                        <p>
                            Premio económico de{" "}
                            <span className="negrita">500 USD</span> y trofeo{" "}
                            <span className="negrita"> CARLOTA</span>
                        </p>
                        <p className="p-white">Segundo Premio</p>
                        <p>
                            Premio económico de{" "}
                            <span className="negrita">200 USD</span> y trofeo{" "}
                            <span className="negrita"> CARLOTA</span>
                        </p>
                        <p className="p-white">Tercer Premio</p>
                        <p>
                            Trofeo <span className="negrita">CARLOTA</span>
                        </p>

                        <p className="p-last">
                            Para <span className="negrita">cineastas</span> y{" "}
                            <span className="negrita">activistas</span> de todo
                            el mundo es una posibilidad de aportar trabajos que
                            sean apreciados por su compromiso con causas
                            politicas.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Info;
