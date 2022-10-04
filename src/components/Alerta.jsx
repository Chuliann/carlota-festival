import React from 'react'

const Alerta = ({children, mensaje}) => {
    return (
        <div className={`alerta ${children === mensaje ? "exito" : ""}`}>
            {children}
        </div>
    )
}

export default Alerta