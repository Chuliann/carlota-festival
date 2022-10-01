import { useState, useEffect } from "react";
import axios from "axios";
import Alerta from "../components/Alerta.jsx";
import {form} from "../utils/lang.js";
import "../styles/inscribirse.css";

const Form = ({idioma}) => {
    const [data, setData] = useState({
        nombre: "",
        email: "",
        pais: "",
        tel: "",
        web: "",
        mensaje: ""
    })
    const [error, setError] = useState("");

    const handleForm = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
        
    }

    useEffect(() => {
        setTimeout(() => {
            setError("");
        }, 5000)
    }, [error])


    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if(data.nombre === "" || data.email === "" || data.pais === "") {
            setError(form[idioma]["campos"]);
            return;
        }

        
        try {
            await fetch('http://localhost:4000/api', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            } 
            })
            .then(response => response.json())
            .then(data => {if(data.ok) {
                setError("Registered inscription")
            }});
        } catch(error) {
            console.log(error);
        }
        
    }

    return (
        <div id="inscribirse">
            <form className="formulario" onSubmit={(e) => handleSubmit(e)}>
                <h2>{form[idioma]["tittle"]}</h2>
                <div className="cont-blanco">
                    <div className="gris">
                        <div className="campo name">
                            <input 
                                className="input"
                                type="text"
                                id="nombre"
                                onChange={e => handleForm(e)}
                            />
                            <label className={`label ${data.nombre.length > 0 ? "fijar" : ""}`}>{form[idioma]["nombre"]}</label>
                        </div>
                        <div className="campo email">
                            <input 
                                className="input"
                                type="email"
                                id="email"
                                onChange={e => handleForm(e)}
                            />
                            <label className={`label ${data.email.length > 0 ? "fijar" : ""}`}>{form[idioma]["correo"]}</label>
                        </div>
                        <div className="campo pais">
                            <input 
                                className="input"
                                type="text"
                                id="pais"
                                onChange={e => handleForm(e)}
                            />
                            <label className={`label ${data.pais.length > 0 ? "fijar" : ""}`}>{form[idioma]["pais"]}</label>
                        </div>
                        <div className="campo tel">
                            <input 
                                className="input"
                                type="tel"
                                id="tel"
                                onChange={e => handleForm(e)}
                            />
                            <label className={`label ${data.tel.length > 0 ? "fijar" : ""}`}>{form[idioma]["tel"]}<span> {form[idioma]["tel2"]}</span></label>
                        </div>
                        <div className="campo web">
                            <input 
                                className="input "
                                type="text"
                                id="web"
                                onChange={e => handleForm(e)}
                            />
                            <label className={`label ${data.web.length > 0 ? "fijar" : ""}`}>{form[idioma]["web"]} <span>{form[idioma]["web2"]}</span></label>
                        </div>
                        <div className="campo mensaje">
                            <textarea 
                                className="input"
                                type="text"
                                id="mensaje"
                                onChange={e => handleForm(e)}
                            ></textarea>
                            <label className={`label ${data.mensaje.length > 0 ? "fijar" : ""}`}>{form[idioma]["mensaje"]} <span>{form[idioma]["mensaje2"]}</span></label>
                        </div>
                        {error && error !== "" ? (
                            <Alerta>{error}</Alerta>
                        ) : null}
                        <input 
                            type="submit"
                            className="enviar"
                            value={form[idioma]["submit"]}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
