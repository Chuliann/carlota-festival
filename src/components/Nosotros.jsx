import logo2 from "../img/logo2.png";
import slide from "../img/slide.png";
import "../styles/nosotros.css";

const Nosotros = () => {
    return (
        <div id="nosotros">
            <div className="logo2">
                <img src={logo2} alt="logo"></img>
                <span></span>
            </div>
            <h2>SOBRE NOSOTROS</h2>
            <h3>SIGLO XIX</h3>
            <p>
                <b>Carlota</b> fue una esclava cubana que lideró uno de los
                alzamientos de esclavos más significativos de la isla. Aunque no
                logró el objetivo de liberar a los esclavos, sino que fue
                apresada y descuartizada públicamente junto a su pareja
                sentimental (otra esclava), su ejemplo plantó la semilla de la
                Revolución y la emancipación.
            </p>
            <h3>SIGLO XX</h3>
            <p>
                En honor a la esclava Carlota, se llamó así una operación
                militar internacionalista que luchó en África contra el
                Apartheid.
            </p>
            <h3>SIGLO XXI</h3>
            <p className="bold">En el 2023 se celebrará la primera edición del concurso de cine y
            video militante <span className="amarillo">CARLOTA</span>. este festival se pone de lado de los que
            luchan contra el capitalismo. Simplemente queremos reconocer la
            realidad, y dignificar los esfuerzos por cambiarla. Este proyecto es
            apoyado por diferentes organizaciones políticas y sociales que
            luchan por transformar la realidad.</p>
            <span className="colaborar">Si quieres apoyar no dudes en escribir a colabora@carlotainternacional.com</span>
            <img className="slider" src={slide} alt=""></img>
        </div>
    );
};

export default Nosotros;
