
import './App.css'
import MenuLateral from './components/MenuLateral'
import heder from './components/Header'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Header></Header>
   <main>
        <aside>
          <MenuLateral></MenuLateral>

        </aside>
        <section id="contenido">
         <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/productos" element={<h1>Productos</h1>} />
          <Route path="/clientes" element={<h1>Clientes</h1>} />
          <Route path="/ventas" element={<h1>Ventas</h1>} />        
        </Routes>
        </section>
      </main><script type="module" src="/main.js"></script></>
  
  )
}

export default App
