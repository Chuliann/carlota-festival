import React from 'react'

const Alerta = ({children}) => {
    return (
        <div className={`alerta ${children === "Registered inscription" ? "exito" : ""}`}>
            {children}
        </div>
    )
}

export default Alerta