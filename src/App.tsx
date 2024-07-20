import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MenuLateral from './components/MenuLateral';
import Customers from './pages/customers/Customers';

// Importar bootstrap para usar en las tablas
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <main>
        <MenuLateral open={drawerOpen} toggleDrawer={toggleDrawer} />
        <section id="contenido">
          <Routes>
            <Route path="/Inicio" element={<h1>Inicio</h1>} />
            <Route path="/Productos" element={<Customers />} />
            <Route path="/Movimientos" element={<h1>Movimientos</h1>} />
            <Route path="/Reportes" element={<h1>Reportes</h1>} />

          </Routes>

        </section>
      </main>
    </>
  );
};

export default App;