import React,{Component} from "react";

//PARA QUE SE PUEDA AÑADIR COMO COMPONENTE JS TIENE QUE EMPEZAR EN MAYUSCULAS

function Login(){
    return(
        <div>
            <h3>Login</h3>
        </div>
    );
}
//PARA QUE SE PUEDA AÑADIR COMO COMPONENTE JS TIENE QUE EMPEZAR EN MAYUSCULAS
function Logout(){
    return(
        <div>
            <h3>Logout</h3>
        </div>
    );
}
//Esta es la clase que utilizaremos al exportar . Solo podemos una
export default class RenderizadoCondicional extends Component{
    constructor(props){
        super(props);
        //Ahora añadimos estados, para ver si mostramos login o logout
        this.state = {
            session:true,
        }
    } 
    
    render(){
        return(
            <div>
                <h2>RenderizadoCondicional</h2>
                {this.state.session ? <Login/>:<Logout/>}
                
            </div>
        );
    }
}