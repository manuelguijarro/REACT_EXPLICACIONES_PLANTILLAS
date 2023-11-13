//Aqui importamos todos los componentes que vamos a utilizar en nuetro app.js(Main principal)
//Esto es una plantilla para utilizar en futuros proyectos
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoListas from './components/RenderizadoListas';
import Eventos from './components/Eventos';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        
        <section>
          <hr></hr>
          <Componente nameUser = "Manuel"/>
        </section>       
        <section>
          <hr></hr>
          <Propiedades
          cadena="esto es una cadena" 
          numero={5} 
          booleano = {false}
          arreglo={[1,5,10]}
          objeto={{
            nombre:"Manuel",
            email:"manu2506.1994@gmail.com",
            telefono: "637323613"
          }}
          />      
        </section> 
        <section>
          <hr></hr>
          <Estado/>
        </section>
        <section>
          <hr></hr>
          <RenderizadoCondicional/>
        </section>
        <section>
          <hr></hr>
          <RenderizadoListas/>
        </section>
        <section>
          <hr></hr>
          <Eventos/>
        </section>
      </header>
    </div>
    
  );
}

export default App;
