import React from "react";

export default function Propiedades(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{(props.booleano)?"True":"False"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>Nombre: {props.objeto.nombre}</li>
                <li>Email: {props.objeto.email}</li>
                <li>Teléfono:{props.objeto.telefono}</li>
            </ul>
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: "Las propiedades",
}