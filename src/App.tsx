
import './App.css'

function App() {

  return (
    <>
    <header>
      <div>Sistema de gestion de ventas</div>
      <img src="vite.svg" alt="Vite logo" />
    </header><main>
        <aside>
          <nav>
            <ul id="menu_principal">
              <li><a href="#">Ventas</a></li>
              <li><a href="#">Productos</a></li>
              <li><a href="#">Clientes</a></li>
              <li><a href="#">Reportes</a></li>
            </ul>
          </nav>
        </aside>
        <section id="contenido">
          <h1>Hola Mundo</h1>
          <p>Este es un ejemplo de una pagina web sencilla </p>
          <span className="material-icons">face</span>         
          <span className="material-icons-outlined">face</span> 
          <span className="material-icons-round">face</span>    
          <span className="material-icons-sharp">face</span>    
          <span className="material-icons-two-tone">face</span> 
        </section>
      </main><script type="module" src="/main.js"></script></>
  
  )
}

export default App
