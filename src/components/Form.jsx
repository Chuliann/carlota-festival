import { useState } from "react";
import "../styles/inscribirse.css";

const Form = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [pais, setPais] = useState("");
    const [tel, setTel] = useState("");
    const [web, setWeb] = useState("");
    const [mensaje, setMensaje] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div id="inscribirse">
            <form className="formulario" onClick={(e) => handleSubmit(e)}>
                <h2>INSCRÍBETE</h2>
                <div className="cont-blanco">
                    <div className="gris">
                        <div className="campo name">
                            <input 
                                className="input"
                                type="text"
                                onChange={e => setNombre(e.target.value)}
                            />
                            <label className={`label ${nombre.length > 0 ? "fijar" : ""}`}>Nombre</label>
                        </div>
                        <div className="campo email">
                            <input 
                                className="input"
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                            />
                            <label className={`label ${email.length > 0 ? "fijar" : ""}`}>Correo Electronico</label>
                        </div>
                        <div className="campo pais">
                            <input 
                                className="input"
                                type="text"
                                onChange={e => setPais(e.target.value)}
                            />
                            <label className={`label ${pais.length > 0 ? "fijar" : ""}`}>País</label>
                        </div>
                        <div className="campo tel">
                            <input 
                                className="input"
                                type="tel"
                                onChange={e => setTel(e.target.value)}
                            />
                            <label className={`label ${tel.length > 0 ? "fijar" : ""}`}>Numero de Telegram <span>(opcional)</span></label>
                        </div>
                        <div className="campo web">
                            <input 
                                className="input "
                                type="text"
                                onChange={e => setWeb(e.target.value)}
                            />
                            <label className={`label ${web.length > 0 ? "fijar" : ""}`}>Pagina Web <span>(opcional)</span></label>
                        </div>
                        <div className="campo mensaje">
                            <textarea 
                                className="input"
                                type="text"
                                onChange={e => setMensaje(e.target.value)}
                            ></textarea>
                            <label className={`label ${mensaje.length > 0 ? "fijar" : ""}`}>Mensaje <span>(opcional)</span></label>
                        </div>

                        <input 
                            type="submit"
                            className="enviar"
                            value="ENVIAR"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
