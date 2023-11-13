import React,{Component} from "react";

export default class Eventos extends Component{
    constructor(props){
        super(props);
        //EL AÑADIR ESTADOS SIEMPRE EN EL CONSTRUCTOR
        this.state = {
            contador: 0,
        }
    //HAY QUE HACER EL BLINDEO DESDE EL CONSTRUCTOR
    //ENLAZAR EL THIS DE LA CLASE, SINO DARA ERROR
    //SE ACE COMO ACONTINUACION
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
    
    
    }
    //VAMOS A AÑADIR DOS METODOS/EVENTOS EN LA CLASE(NO NECESITAMOS LA PALABRA FUNCTION)
    sumar(){
        //CUIDADO AL LLAMAR A THIS, NO ESTA DEFINIDO EN EL CONTEXTO
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar(){
        this.setState({
            contador: this.state.contador - 1,
        })
    }
    render(){
        return (
            <div>
                <h3>Eventos en componentes de clase</h3>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        );
    };
}