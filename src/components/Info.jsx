import cartelesp from "../img/cartelesp.webp";
import carteling from "../img/carteling.webp";
import num1 from "../img/num1.webp";
import num2 from "../img/num2.webp";
import num3 from "../img/num3.webp";
import premioing from "../img/premioing.webp";
import premioesp from "../img/premioesp.webp";
import "../styles/festival.css";
import { info } from "../utils/lang.js";

const Info = ({ idioma }) => {
    return (
        <main id="festival">
            

            

            <div className="info">
                <p className="blanco titulo-info movil">
                    <span className="grande">{info[idioma]["tittle1_1"]}</span>
                    <br></br> {info[idioma]["tittle1_2"]}
                    <span className="amarillo"> {info[idioma]["tittle1_3"]}.
                    </span>
                </p>
                <img className="info-poster" src={idioma === "es" ? cartelesp : carteling} alt="poster"></img>
                <div>
                    <p className="blanco titulo-info web">
                        <span className="grande">
                            {info[idioma]["tittle1_1"]}
                        </span>
                        <br></br> {info[idioma]["tittle1_2"]}
                        <span className="amarillo"> {info[idioma]["tittle1_3"]}. </span>
                    </p>
                    <div className="info-texto">
                            <p className="p-1">
                                {info[idioma]["text1"]}.
                            </p>
                        

                            <div className="subtittle-img">
                                <img src={num1} alt=""></img>
                                <p className="p-white">{info[idioma]["subtittle1"]}</p>
                            </div>
                            <p> {info[idioma]["text2_1"]} <span className="negrita">500 USD</span> {info[idioma]["text2_2"]} <span className="negrita"> CARLOTA</span> {info[idioma]["text2_3"]}
                            </p>
                            <div className="subtittle-img img2">
                            <img src={num2} alt=""></img>
                            <p className="p-white">{info[idioma]["subtittle2"]}</p>
                            </div>
                            <p> {info[idioma]["text2_1"]} <span className="negrita">200 USD</span> {info[idioma]["text2_2"]} <span className="negrita"> CARLOTA</span> {info[idioma]["text2_3"]}
                            </p>
                            <div className="carta-contenedor">
                            <div>
                            <div className="subtittle-img img3">
                                <img src={num3} alt=""></img>
                                <p className="p-white">{info[idioma]["subtittle3"]}</p>
                            </div>
                            <p>
                                {info[idioma]["text3_1"]} <span className="negrita">CARLOTA</span> {info[idioma]["text3_2"]}
                            </p>
                            </div>
                            <img className="img-sorpresa" src={`${idioma === "en" ? premioing : premioesp}`} alt=""></img>
                        </div>

                        <p className="p-last"> {info[idioma]["text4_1"]} <span className="negrita"> {info[idioma]["text4_2"]} </span> {info[idioma]["text4_3"]} <span className="negrita"> {info[idioma]["text4_4"]} </span> {info[idioma]["text4_5"]}. </p>
                        
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Info;
