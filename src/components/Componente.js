//Ejemplo primero para crear un componente para reutilizarlo
//Se crea una clase que hereda de Component
import React,{Component} from "react";
/*
let nombre = "Manuel"
//SIN UTILIZAR PROPS
class Componente extends Component{
    //La funcion render, se utiliza siempre para devolver el componente
    render(){
        return <h2>Hola {nombre}</h2>    
    }
}
*/
//UTILIZANDO PROPS
class Componente extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <h2>Bienvenido {this.props.nameUser}</h2>
    }
}
export default Componente;