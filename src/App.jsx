import { useState } from "react";
import Header from "./components/Header.jsx";
import Info from "./components/Info.jsx";
import Form from "./components/Form.jsx";
import Bases from "./components/Bases.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Patrocinadores from "./components/Patrocinadores.jsx";
import { useEffect } from "react";

function App() {
    const [idioma, setIdioma] = useState("");

    const handleIdioma = (idioma, first=false) => {
        setIdioma(idioma);
        localStorage.setItem("lang", idioma);
        if(first) document.querySelector('body').classList.remove('fijarBody');
    };

    useEffect(() => {
        let idioma = localStorage.getItem("lang");
        if (idioma) {
            setIdioma(idioma);
        } else {
            document.querySelector('body').classList.add('fijarBody');
        }
    }, []);

    return (
        <div className="App">
            {idioma === "" ? (
                <div className="idiomas">
                    <button
                        onClick={() => handleIdioma("es", true)}
                        className="boton-idioma"
                    >
                        ESPAÑOL
                    </button>
                    <button
                        onClick={() => handleIdioma("en", true)}
                        className="boton-idioma"
                    >
                        ENGLISH
                    </button>
                </div>
            ) : (
                <>
                    <Header handleIdioma={handleIdioma} idioma={idioma} />
                    <Info idioma={idioma} />
                    <Form idioma={idioma} />
                    <Bases idioma={idioma} />
                    <Nosotros idioma={idioma} />
                    {/* Patrocinadores */}
                </>
            )}
            
        </div>
    );
}

export default App;
