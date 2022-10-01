import logo2 from "../img/logo2.webp";
import slide from "../img/slide.webp";
import {nosotros} from "../utils/lang.js";
import "../styles/nosotros.css";

const Nosotros = ({idioma}) => {
    return (
        <div id="nosotros">
            <div className="logo2">
                <img src={logo2} alt="logo"></img>
                <span></span>
            </div>
            <h2>{nosotros[idioma]["tittle"]}</h2>
            <h3>{nosotros[idioma]["subtittle1"]}</h3>
            <p>
                <b>Carlota</b> {nosotros[idioma]["text1"]}.
            </p>
            <h3>{nosotros[idioma]["subtittle2"]}</h3>
            <p>
                {nosotros[idioma]["text2"]}
            </p>
            <h3>{nosotros[idioma]["subtittle3"]}</h3>
            <p className="bold">{nosotros[idioma]["text3"]} <span className="amarillo">CARLOTA</span>. {nosotros[idioma]["text3_1"]} .</p>
            <span className="colaborar">{nosotros[idioma]["support"]}</span>
            <img className="slider" src={slide} alt=""></img>
        </div>
    );
};

export default Nosotros;
