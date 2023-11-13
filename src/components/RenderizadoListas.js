import React,{Component} from "react";
//Exportamos el json IMPORTANTE PONER EL JSON
import data from "../Helpers/data.json";

//VAMOS A CREAR UN COMPONENTE para añadir en la clase
//AL SER UN COMPONENTE DEVERIA ESTAR EN UN ARCHIVO
//PERO LO DEJAMOS AQUI PARA HACERLO MAS RAPIDO



//EN ESTA FUNCION EL ELEMENTO "EL" SE PASA COMO PROPS EN EL RENDER
function ElementoLista(props){
    return(
        <li>
            <a href={props.el.webSite}>{props.el.name}</a>
        </li>
    );
}

//Ahora aremos un render con array
export default class RenderizadoListas extends Component{
    constructor(props){
        super(props);
        //LOS ESTADOS SE AÑADEN EN EL CONSTRUCTOR
        this.state = {
            seassons : ["Primavera","Verano","Otoño","Invierno"],
        };
    }
    //VAMOS AÑADIR LOS ELEMENTOS A LA <ol> DE MANERA DINAMICA 
    render(){
        console.log(data)
        return(
            
            <div>
                <h3>RenderizadoListas</h3>
                <h3>Estaciones del año</h3>
                <ol>    
                {this.state.seassons.map((el,index) => <li key={index}>{el}</li>)}
                </ol>
                <h3>FrameWorks Frontend</h3>
                <ul>
                    {data.frameworks.map((el) => <ElementoLista key={el.id} el={el}/>)}
                </ul>
            </div>
        );
    }
}