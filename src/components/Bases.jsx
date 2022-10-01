import "../styles/bases.css";
import Botòn from "../img/Botòn.webp";
import {bases} from "../utils/lang.js";

const Bases = ({idioma}) => {

    const descargar = () => {
        window.open(bases[idioma]["link"], '_blank')
    }

    return(
        <div id="bases">
            <h2>{bases[idioma]["tittle"]}</h2>
            <div className="bases">
                <div>
                    <h3>{bases[idioma]["subtittle1"]}</h3>
                    <p>{bases[idioma]["text1"]} "<b>CARLOTA</b>" {bases[idioma]["text1_1"]} </p>
                </div>
                <div>
                    <h3>{bases[idioma]["subtittle2"]}</h3>
                    <ul>

                    <li><p>{bases[idioma]["text2"]}.</p></li>
                    <li><p>{bases[idioma]["text3"]} <b>{bases[idioma]["text3_1"]}.</b></p></li>
                    <li><p>{bases[idioma]["text4"]}.</p></li>
                    <li><p>{bases[idioma]["text5"]}.</p></li>
                    <li><p>{bases[idioma]["text6"]} <b>13.01.2023</b> {bases[idioma]["text6_1"]}.</p></li>
            </ul>
                </div>
                <div>
                    <h3>{bases[idioma]["subtittle3"]}</h3>
                    <ul>
                        <li><p><b>{bases[idioma]["text7"]} </b>{bases[idioma]["text7_1"]}</p></li>
                        <li><p>{bases[idioma]["text8"]}</p></li>
                        <li><p>{bases[idioma]["text9"]}</p></li>
                        <li><p>{bases[idioma]["text10"]}</p></li>
                        <li><p>{bases[idioma]["text11"]}</p></li>
                        <li><p>{bases[idioma]["text12"]}</p></li>
                        <li><p>{bases[idioma]["text13"]}</p></li>
                        <li><p>{bases[idioma]["text14"]}</p></li>
                        <li><p>{bases[idioma]["text15"]}</p></li>
                        <li><p>{bases[idioma]["text16"]}</p></li>
                        <li><p>{bases[idioma]["text17"]}</p></li>
                        <li><p>{bases[idioma]["text18"]}</p></li>
                    </ul>
                </div>
                <div>
                    <h3>{bases[idioma]["subtittle4"]}</h3>
                    <ul>
                        <li><p>{bases[idioma]["text19"]}</p></li>
                    </ul>
                </div>
                <div>
                    <h3>{bases[idioma]["subtittle5"]}</h3>
                    <ul>
                        <li><p>{bases[idioma]["text20"]}</p></li>
                        <li><p>{bases[idioma]["text21"]}</p></li>
                    </ul>
                </div>
                <div>
                    <h3>{bases[idioma]["subtittle6"]}</h3>
                    <ul>
                        <li><p>{bases[idioma]["text22"]} <b>CARLOTA</b> {bases[idioma]["text22_1"]} </p></li>
                        <li><p>{bases[idioma]["text23"]} <b>CARLOTA</b> {bases[idioma]["text23_1"]} </p></li>
                        <li><p>{bases[idioma]["text24"]} <b>CARLOTA</b> {bases[idioma]["text24_1"]} </p></li>
                        <li><p>{bases[idioma]["text25"]}</p></li>
                    </ul>
                </div>
            </div>
            <button 
                className="descargar"
                onClick={() => descargar()}
            >{/* <img src={Botòn} alt="descargar"></img> */}{bases[idioma]["download"]}</button>
        </div>
    );
}

export default Bases;