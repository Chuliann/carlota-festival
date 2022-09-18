import "../styles/bases.css";
import Botòn from "../img/Botòn.png";

const Bases = () => {

    const descargar = () => {
        console.log("Descargando");
    }

    return(
        <div id="bases">
            <h2>BASES</h2>
            <div className="bases">
                <div>
                    <h3>OBJETIVO</h3>
                    <p>El Festival-concurso "<b>CARLOTA</b>" anima cineastas y video activistas de todo el mundo a realizar proyectos que animen a comprender y transformar la realidad. </p>
                </div>
                <div>
                    <h3>EL CONCURSO</h3>
                    <ul>

                    <li><p>Este concurso se celebra de forma online y pueden participar cineastas, activistas, videoactivistas y en general cualquier persona de cualquier país. De forma individual o grupal.</p></li>
                    <li><p>Las personas que participen tienen 84 horas para grabar y editar un documental.</p></li>
                    <li><p>El concurso comienza el 13 de marzo de 2022 a las 12:00 del mediodia horario de Jerusalen, Palestina. A esa hora se dara a conocer un requisito tecnico que debe cumplirse para garantizar que los documentales se graban en el lapso de 84 horas.</p></li>
                    <li><p>Las personas que desean participar deben tener mas de 18 años.</p></li>
                    <li><p>La inscripcion para el concurso inicial es el <b>13.01.2023</b> y cierra una hora antes de que comienze el concurso, es decir, una hora antes de que se haga publico el requisito tecnico citado anteriormente.</p></li>
            </ul>
                </div>
                <div>
                    <h3>REQUISITOS Y REGLAS</h3>
                    <ul><li><p><b>Genero: </b>Documental</p></li></ul>
                </div>
            </div>
            <button 
                className="descargar"
                onClick={() => descargar()}
            ><img src={Botòn} alt="descargar"></img></button>
        </div>
    );
}

export default Bases;