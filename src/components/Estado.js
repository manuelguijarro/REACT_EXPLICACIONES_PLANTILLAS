import React,{Component} from "react";

export default class Estado extends Component{
    constructor(props){
        super(props);
        //ahora creamos el objeto del estado
        this.state = {
            contador:0,

        }
        //PARA MODIFICAR LOS ESTADOS SE HACE CON EL METODO setState()
        // porque sino no podemos modificar directamente los stados segun React
        //Lo dejamos comentado para que no aparezca el warning
        /*setInterval(()=>{
            this.setState({
                contador: this.state.contador + 1
            });
        },1000);*/
    }
    //Asi cada vez que el estado se actualiza, el metodo render() se lanza
    //automaticamente para modificar y añadir el nuevo contenido
    render(){
        return   (<div>
                  <h2>Estado</h2>
                  <p>{this.state.contador}</p>
                 </div>)
    }
}